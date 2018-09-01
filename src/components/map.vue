<template>
  <svg 
  :width="width" 
  :height="height"
  >
    <g ref="target"
    >
      <path
        v-for="feature in features"
        v-if="feature.type !== 'Point'"
        :key="feature.key"
        :d="feature.d"
        :class="feature.classes"
        :transform="transform || ''"
      ></path>
      <!-- <slot name="points"
        v-for="feature in features"
        v-if="feature.type === 'Point'"
        :feature="feature.feature"
      >
        <circle :key="feature.key"></circle>
      </slot>
      <slot name="points"
        v-for="(point, idx) in points"
        v-if="type === 'Point'"
        :feature="point"
      >
        <circle :key="point.id || '#' + idx"></circle>
      </slot> -->

    </g>
  </svg>
</template>

<script>
const d3 = require("d3");
const topojson = require("topojson");

const toFeatureObject = (vm, name) => (feature, idx) => {
  // this is an invalid feature id, which may cause duplicate key errors
  const key = feature.id == -99 ? "unknown" + idx : feature.id;
  const type = feature.geometry && feature.geometry.type;
  const properties = feature.properties || {};
  const d = vm.project(feature);
  return { key, type, properties, d, feature, classes: [name] };
};

export default {
  data() {
    return {
      center: [0, 0],
      rotate: [0, 0, 0],
      transform: null
    };
  },
  props: {
    width: { type: Number, default: 500 },
    height: { type: Number, default: 300 },
    // if data is an object, it will be made reactive by vue, which will make it dynamic but incur
    // a rendering cost
    data: { type: [Object, String], required: true },
    projection: { type: [String, Function], default: "geoMercator" },
    objects: { type: [String] },
    points: { type: Array, default: () => [] }
  },
  computed: {
    topojson() {
      if (typeof this.data === "string") {
        return JSON.parse(this.data);
      }
      return this.data;
    },
    features() {
      const objects =
        this.objects && this.objects.length
          ? this.objects.map(v => [v, this.topojson.objects[v]])
          : Object.entries((this.topojson && this.topojson.objects) || {});

      return objects
        .map(([name, obj]) =>
          topojson
            .feature(this.topojson, obj)
            .features.map(toFeatureObject(this, name))
        )
        .reduce((acc, arr) => acc.concat(arr), []);
    }
  },
  methods: {
    project(feature) {
      const projection = d3[this.projection]().rotate(this.rotate);
      const toPath = d3.geoPath().projection(projection);
      return toPath(feature);
    },
    select() {
      return d3.select(this.$el);
    },
    zoom() {
      const { transform } = d3.event;
      this.transform = transform;
    }
  },

  mounted() {
    window.mapApp = this;
    this.select().call(d3.zoom().on("zoom", this.zoom));

    debugger;
  }
};
</script>

<style>
path {
  fill: #ccc;
  stroke: #fff;
}
path:hover {
  fill: cadetblue;
}
</style>
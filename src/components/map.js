const topojson = require("topojson");
const d3 = require("d3");
const render = require("./render");
const parseTopoJson = require("../modules/parseTopoJson.js");

const toFeatureObject = (vm, name) => (feature, idx) => {
  // this is an invalid feature id, which may cause duplicate key errors
  const key = feature.id == -99 ? "unknown" + idx : feature.id;
  const type = feature.geometry && feature.geometry.type;
  const properties = feature.properties || {};
  const d = vm.project(feature);
  return { key, type, properties, d, feature, classes: [name] };
};

const buildComputedPropAndDataValues = (
  { props, computed, dataVals },
  [name, type, defaultValue]
) => {
  const propName = name;
  const compName = `${name}Value`;
  const dvName = `dv${name}`;
  const initialName = `initial${name[0] + name.slice(1)}`;

  props[propName] = { type, default: () => defaultValue };
  dataVals.push([dvName, vm => vm[propName]]);
  computed[compName] = {
    get() {
      return this[propName] || this[dvName];
    },
    set(val) {
      if (this[propName]) {
        this.$emit(propName, val);
      } else {
        this[dvName] = val;
      }
    }
  };
  return { props, computed, dataVals };
};

const { props, computed, dataVals } = [
  ["center", Array, [0, 0]],
  ["rotate", Array, [0, 0, 0]],
  ["scaleExtent", Array, [1, 10]],
  ["zoom", Number, 1]
].reduce(buildComputedPropAndDataValues, {
  props: {},
  computed: {},
  dataVals: []
});

const toData = vm =>
  dataVals.reduce((acc, [key, fn]) => {
    acc[key] = fn(vm);
    return acc;
  }, {});

export default {
  render,
  data() {
    return {
      ...toData(dataVals),
      transform: null,
      zoomBehavior: null
    };
  },

  props: {
    width: { type: Number, default: 500 },
    height: { type: Number, default: 300 },
    // if data is an object, it will be made reactive by vue, which will make it dynamic but incur
    // a rendering cost
    data: { type: [Object, String, Function], required: true },
    projection: { type: [String, Function], default: "geoMercator" },
    objects: { type: [String] },
    points: { type: Array, default: () => [] },
    disableZoom: { type: Boolean, default: false },
    ...props
  },

  computed: {
    topojson: parseTopoJson,
    geoJsonObjects() {
      const objects =
        this.objects && this.objects.length
          ? this.objects.map(v => [v, this.topojson.objects[v]])
          : Object.entries((this.topojson && this.topojson.objects) || {});

      return objects.map(([name, obj]) => [
        name,
        topojson.feature(this.topojson, obj)
      ]);
    },
    features() {
      return this.geoJsonObjects
        .map(([name, geojson]) =>
          geojson.features.map(toFeatureObject(this, name))
        )
        .reduce((acc, arr) => acc.concat(arr), []);
    },
    ...computed
  },

  methods: {
    project(feature) {
      const projection = d3[this.projection]()
        .rotate(this.rotateValue)
        .translate([this.width / 2, this.height / 2]);
      const toPath = d3.geoPath().projection(projection);
      return feature ? toPath(feature) : toPath;
    },
    click() {
      debugger;
    },
    select() {
      return d3.select(this.$el);
    },
    doZoom() {
      const { transform } = d3.event;
      this.transform = transform;
    }
  },

  mounted() {
    this.zoomBehavior = d3
      .zoom()
      .scaleExtent(this.scaleExtentValue)
      .on("zoom", this.doZoom);
    if (!this.disableZoom) {
      this.select().call(this.zoomBehavior);
    }
    const zoomValue = this.zoomValue || 1;
    this.zoomBehavior.scaleTo(this.select(), zoomValue);
  }
};

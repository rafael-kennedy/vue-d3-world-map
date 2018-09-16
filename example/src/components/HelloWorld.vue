<template>
  <div class="hello">
    <topo-map 
      :data="data" 
      projection="geoMercator"
    >
    </topo-map>
  </div>
</template>

<script>
import map from 'vue-d3-world-map/src/components/map.js';
import data from '../world.json';

export default {
  components: {
    'topo-map': map
  },
  data() {
    return {
      data: JSON.stringify(data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.countries1 {
  fill: cadetblue;
  stroke: red;
}
svg {
  background-color: lightblue;
}
</style>

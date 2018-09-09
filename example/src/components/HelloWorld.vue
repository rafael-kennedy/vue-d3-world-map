<template>
  <div class="hello">
    <topo-map 
      :data="data" 
      projection="geoOrthographic"
    ></topo-map>
  </div>
</template>

<script>
import map from 'vue-d3-world-map/src/components/map';
// const data = require('../../../test/fixtures/square.json');
const data = require('../world.json')

export default {
  name: 'HelloWorld',
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
<style scoped>
.earth {
  fill: cadetblue;
  stroke: red;
}
</style>

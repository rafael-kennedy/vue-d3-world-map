<template>
  <div class="hello">
    <topo-map :data="data" projection="geoConicConformal"></topo-map>
  </div>
</template>

<script>
import map from 'vue-d3-world-map/src/components/map';
const data = require('../world.json');

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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

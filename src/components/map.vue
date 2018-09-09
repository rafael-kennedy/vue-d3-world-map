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
    </g>
  </svg>
</template>

<script>
import mapComponent from './map.js';
export default mapComponent;
</script>

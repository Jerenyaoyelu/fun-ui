<script setup lang="ts">
interface IOptions {
  width?: number;
  height?: number;
  blur?: number;
}

defineProps<IOptions>();
</script>

<template>
  <div
    class="fun-ui__card-wrapper"
    :style="{
      '--width': (width || 350) + 'px',
      '--height': height === undefined ? 'fit-content' : height + 'px',
      '--blur': (blur || 25) + 'px',
    }"
  >
    <slot> </slot>
  </div>
</template>

<style lang="less" scoped>
.fun-ui__card-wrapper {
  width: var(--width);
  height: var(--height);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  position: relative;
  z-index: 20;
  backdrop-filter: blur(var(--blur));
  padding: 20px;
}
</style>

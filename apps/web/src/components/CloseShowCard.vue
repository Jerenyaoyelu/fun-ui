<script setup lang="ts">
interface ICardProps {
  width?: number;
  height?: number;
}
defineProps<ICardProps>();
</script>

<template>
  <div class="fun-ui__card-wrapper" :style="{ '--width': `${width || 300}px`, '--height': `${height || 500}px` }">
    <div class="fun-ui__card">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.fun-ui__card-wrapper {
  perspective: 900px;
  -webkit-perspective: 900px;
  width: var(--width);
  height: var(--height);
}
.fun-ui__card {
  width: 100%;
  height: 100%;
  transition: 0.5s all ease;
  transform: rotateX(60deg) scale(0.7);
  perspective: 900px;
  -webkit-perspective: 900px;
  box-shadow: 0px 20px 50px #555;
  animation: entry 1s linear 1; // 缓慢进场效果
  padding: 20px;
  &:hover {
    transform: rotateX(0deg) scale(1) translateY(10px);
  }
}
@keyframes entry {
  0% {
    transform: translateY(-20%);
    opacity: 0.1;
  }
  100% {
    transform: translateY(0);
  }
}
</style>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue';

interface ITextMap {
  [propName: number]: string;
}

const props = defineProps<{
  textMap?: ITextMap;
}>();

const textMapIsEmpty = computed<boolean>(() => {
  if (!props.textMap) return true;
  return JSON.stringify(props.textMap) === '{}';
});

const getText = computed<(i: number) => string>(() => {
  return (i: number): string => {
    const len = Object.keys(props.textMap || {}).length;
    if (textMapIsEmpty.value) return '';
    return (props.textMap as ITextMap)[i % len];
  };
});
</script>

<template>
  <div :class="['container', textMapIsEmpty ? '' : 'with-text']">
    <div class="circle">
      <span
        v-for="(a, i) in new Array(21)"
        :text="!textMapIsEmpty ? getText(i) : ''"
        :key="i"
        :style="{ '--i': i }"
      ></span>
    </div>
    <div class="circle">
      <span
        v-for="(a, i) in new Array(21)"
        :text="!textMapIsEmpty ? getText(i) : ''"
        :key="i"
        :style="{ '--i': i }"
      ></span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;

  &.with-text {
    span::before {
      box-shadow: none;
      background: #ededed;
      color: #333;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: 500;
    }
  }

  &:not(.with-text) {
    animation: colorfull 8s linear infinite;
  }

  .circle {
    width: 200px;
    height: 200px;
    position: relative;
    margin: 0 -7.5px;
    &:last-of-type {
      transform: rotate(-180deg);
      & span::before {
        animation-delay: calc(-0.1s * var(--i));
      }
    }
  }

  span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: rotate(calc(18deg * var(--i)));
    &::before {
      content: attr(text);
      text-align: center;
      position: absolute;
      width: 15px;
      height: 15px;
      right: 0;
      top: calc(50% - 7.5px);
      background: #00ff0a;
      border-radius: 50%;
      box-shadow: 0 0 10px #00ff0a, 0 0 20px #00ff0a, 0 0 40px #00ff0a, 0 0 60px #00ff0a, 0 0 80px #00ff0a,
        0 0 100px #00ff0a;
      transform: scale(0.2);
      animation: loading 4s linear infinite;
      animation-delay: calc(0.1s * var(--i));
    }
  }
}
@keyframes loading {
  0% {
    transform: scale(1);
  }

  50%,
  100% {
    transform: scale(0.2);
  }
}

@keyframes colorfull {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>

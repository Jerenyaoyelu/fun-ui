<script setup lang="ts">
import { CSSProperties, ref, computed } from 'vue';

interface ICardProps {
  width?: number;
  height?: number;
  data: any[] | any;
  showNums?: number;
}

enum ActionType {
  INCREASE = 1,
  DECREASE = -1,
}

const props = defineProps<ICardProps>();

const current = ref<number>(0);

// 使用场景必定是在数组的时候
const isEven = computed(() => {
  return props.showNums === undefined ? null : props.showNums % 2 === 0;
});

const isArray = computed(() => {
  return Array.isArray(props.data);
});

function getStyles(index: number) {
  const styles: CSSProperties = {};
  const gap = index - current.value;
  styles.left = `${gap * 100}%`;
  const half = Math.floor((props.showNums as number) / 2);
  // 设置display
  // 单数作业平分，双数current归到左边
  if (isEven.value) {
    if (gap < 0) {
      styles.visibility = -gap < half ? 'visible' : 'hidden';
    } else {
      styles.visibility = gap <= half ? 'visible' : 'hidden';
    }
  } else {
    styles.visibility = Math.abs(gap) <= half ? 'visible' : 'hidden';
  }

  return styles;
}

const hanldeClick = (type: number) => {
  if (!Array.isArray(props.data)) return;
  if (type > 0 && current.value < props.data.length - 1) {
    current.value = current.value + 1;
  }
  if (type < 0 && current.value > 0) {
    current.value = current.value - 1;
  }
  console.log(current.value);
};
</script>

<template>
  <div class="fun-ui__card-container">
    <div v-if="isArray" class="fun-ui_carousel-arrow-left" @click="hanldeClick(ActionType.INCREASE)">&lt;</div>
    <div class="fun-ui__card" :style="{ '--width': `${width || 300}px`, '--height': `${height || 500}px` }">
      <template v-if="isArray">
        <div class="fun-ui__card-content-wrapper" :style="getStyles(i)" v-for="(item, i) in data" :key="i">
          <slot name="item" v-bind="item"></slot>
        </div>
      </template>
      <template v-else>
        <div class="fun-ui__card-content-wrapper">
          <slot></slot>
        </div>
      </template>
    </div>
    <div v-if="isArray" class="fun-ui_carousel-arrow-right" @click="hanldeClick(ActionType.DECREASE)">></div>
  </div>
</template>

<style lang="less" scoped>
.fun-ui__card-container {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  .fun-ui_carousel-arrow-left {
    left: 10px;
  }
  .fun-ui_carousel-arrow-right {
    right: 10px;
  }
  .fun-ui_carousel-arrow-left,
  .fun-ui_carousel-arrow-right {
    position: absolute;
    top: 45%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    color: rgb(95, 93, 93);
    font-size: 35px;
    line-height: 60px;
    font-weight: 600;
    text-align: center;
    border: 1px solid #d8d1d1;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 10px 25px rgb(151, 148, 148);
    }
  }
}
.fun-ui__card {
  perspective: 900px;
  -webkit-perspective: 900px;
  width: var(--width);
  height: var(--height);
  position: relative;
  .fun-ui__card-content-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 0.5s transform ease, 0.5s left ease;
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
}
</style>

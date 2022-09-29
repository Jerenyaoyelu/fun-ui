/** 设计灵感来源： // https://codepen.io/akhil_001/pen/zoQdaO?editors=1100 */
<script setup lang="ts">
import CarouselCard from '@/components/CarouselCard.vue';
import CardContent from '@/components/CardContent.vue';
import { ref } from 'vue';
import Card1 from '@/assets/image/card-1.jpg';
import Card2 from '@/assets/image/card-2.jpg';
import Card3 from '@/assets/image/card-3.jpg';

const list = ref<any[]>([
  {
    img: Card1,
  },
  {
    img: Card2,
  },
  {
    img: Card3,
  },
]);
</script>
<template>
  <div class="fun-ui__page">
    <CarouselCard :data="list" :show-nums="3">
      <template #item="item">
        <CardContent :data="item" />
      </template>
    </CarouselCard>
    <div class="fun-ui__tips">
      <span>&lt;&lt;&lt;</span>
      hover the card
      <span>>>></span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.fun-ui__page {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  height: calc(100vh - 60px);
  position: relative;
  .fun-ui__tips {
    position: absolute;
    bottom: 80px;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      &:first-of-type {
        margin-right: 20px;
        animation: leftArrow 1s linear infinite;
      }
      &:last-of-type {
        margin-left: 20px;
        animation: rightArrow 1s linear infinite;
      }
    }
  }
}
@keyframes leftArrow {
  0% {
    transform: translateX(10px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0px);
    opacity: 0;
  }
}
@keyframes rightArrow {
  0% {
    transform: translateX(-10px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0px);
    opacity: 0;
  }
}
</style>

<script setup lang="ts">
import BoostList, { IListItem } from '@/components/BoostList.vue';
import Beauty from '@/assets/image/boost-list.jpg';
import { ref } from 'vue';

const list = ref<IListItem[]>([
  {
    img: Beauty,
    name: 'Danny',
    desc: 'what a beauty',
    showRank: true,
  },
  {
    img: Beauty,
    name: 'Danny',
    desc: 'what a beauty',

    showRank: true,
  },
  {
    img: Beauty,
    name: 'Danny',
    desc: 'what a beauty',

    showRank: true,
  },
  {
    img: Beauty,
    name: 'Danny',
    desc: 'what a beauty',

    showRank: true,
  },
  {
    img: Beauty,
    name: 'Danny',
    desc: 'what a beauty',
    showRank: true,
  },
]);
</script>

<template>
  <div class="fun-ui__page">
    <BoostList title="Beautifull girls in ranking" :list="list">
      <template v-slot:rank-icon>No.</template>
    </BoostList>
  </div>
</template>

<style lang="less" scoped>
.fun-ui__page {
  position: relative;
  overflow-x: hidden;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #242424;
  &::before {
    content: '';
    position: absolute;
    width: 350px;
    height: 350px;
    background: linear-gradient(#ffc107, #e91e63);
    border-radius: 50%;
    top: 20px;
    left: -80px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: linear-gradient(#2196f3, #31ff38);
    border-radius: 50%;
    right: -60px;
    bottom: 20px;
  }
}
</style>

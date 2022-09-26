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
  <div class="page-content">
    <BoostList title="Beautifull girls in ranking" :list="list">
      <template v-slot:rank-icon>No.</template>
    </BoostList>
  </div>
</template>

<style lang="less" scoped>
.page-content {
  position: relative;
  overflow-x: hidden;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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

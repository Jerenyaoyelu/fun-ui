<script setup lang="ts">
import CardItemVue, { IDataType } from '@/components/CardItem.vue';
import { ref } from 'vue';

const dataList = ref<IDataType[]>([
  {
    color: 'red',
    text: '1',
  },
  {
    color: 'yellow',
    text: '2',
  },
  {
    color: 'blue',
    text: '3',
  },
  {
    color: 'grey',
    text: '4',
  },
  {
    color: 'green',
    text: '5',
  },
  {
    color: 'lightyellow',
    text: '6',
  },
  {
    color: 'lightblue',
    text: '7',
  },
  {
    color: 'lightgrey',
    text: '8',
  },
  {
    color: 'lightgreen',
    text: '9',
  },
]);
</script>

<template>
  <div class="container">
    <CardItemVue v-for="d in dataList" :data="d" />
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  width: 400px;
  flex-wrap: wrap;
  margin: 200px auto;
}
</style>

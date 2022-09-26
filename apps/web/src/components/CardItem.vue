<script setup lang="ts">
import { ref } from 'vue';

export interface IDataType {
  color: string;
  text: string;
}
defineProps<{ data: IDataType }>();
</script>

<template>
  <div
    class="item"
    :style="{
      background: data.color,
    }"
  >
    {{ data.text }}
  </div>
</template>

<style lang="less" scoped>
.item {
  width: 40px;
  height: 40px;
  padding: 5px;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
}
</style>

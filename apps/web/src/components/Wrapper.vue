<script setup lang="ts">
interface IProp {
  title: string;
}

defineProps<IProp>();
</script>

<template>
  <div class="wrapper">
    <div class="title">{{ title }}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.wrapper {
  padding: 10px;
  border: 1px solid #cfcccc;
  &:hover {
    box-shadow: 1px 1px 5px 5px #888888;
  }
  .title {
    font-size: 20px;
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 1px solid #c7c2c2;
  }
  .content {
    padding: 30px 0 20px;
  }
}
</style>

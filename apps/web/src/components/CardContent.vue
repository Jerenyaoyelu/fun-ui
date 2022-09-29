<script setup lang="ts">
defineProps<{ data: any }>();
</script>
<template>
  <div class="fun-ui__card-content">
    <img :src="data.img" alt="" />
  </div>
</template>

<style lang="less" scoped>
.fun-ui__card-content {
  height: 100%;
  text-align: center;
  color: #333;
  font-size: 30px;
  font-weight: 600;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>

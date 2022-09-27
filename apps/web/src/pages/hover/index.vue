<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="page">
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
.page {
  background: #161623;
  padding-top: 60px;
  position: relative;
  height: 100vh;
}
</style>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="page">
    <div class="navigation">
      <button
        @click="
          () => {
            router.push({
              name: 'CoolList',
            });
          }
        "
      >
        cool-list
      </button>
    </div>
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
.navigation {
  z-index: 999;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 60px;
  padding: 10px;
  background: #999;
  box-shadow: 1px 1px 5px 2px #ddd;
}
</style>

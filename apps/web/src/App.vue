<script setup lang="ts">
import FunIcon from '@/assets/svg/fun-ui.svg';
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="fun-ui__layout">
    <div class="fun-ui__nav">
      <div
        @click="
          () => {
            router.push({
              name: 'Home',
            });
          }
        "
        class="fun-ui__logo"
      >
        <img :src="FunIcon" alt="fun-ui" />
        <h1>FunUI</h1>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
.fun-ui__layout {
  padding-top: 60px;
}
.fun-ui__nav {
  position: fixed;
  top: 0;
  left: 0;
  padding: 15px 15px;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 999;
  width: 100%;
  .fun-ui__logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
      margin-right: 8px;
    }
    h1 {
      margin: 0;
    }
  }
}
</style>

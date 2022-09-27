<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const offset = ref<number>(0);

window.addEventListener('scroll', () => {
  offset.value = window.scrollY;
});
</script>

<template>
  <div class="fun-ui__page">
    <div class="fun-ui__desc">A set of fun & fancy UI on Vuejs 3</div>
    <div class="fun-ui__clip" :style="{ '--offset': `${offset}px` }">FunUI</div>
    <div class="fun-ui__showcase">
      <button
        @click="
          () => {
            router.push({
              name: 'Loading',
            });
          }
        "
      >
        Loading
      </button>
      <button
        @click="
          () => {
            router.push({
              name: 'CoolList',
            });
          }
        "
      >
        Hover
      </button>
    </div>
    <div class="fun-ui__showcase"></div>
  </div>
</template>

<style lang="less" scoped>
.fun-ui__page {
  position: relative;

  .fun-ui__desc {
    position: absolute;
    top: 150px;
    left: 0;
    width: 100%;
    text-align: center;
    color: #fff;
    font-weight: 500;
    font-size: 30px;
  }
}

.fun-ui__clip {
  background-image: url('@/assets/image/home-clip-bg.jpg');
  width: 100%;
  font-size: 300px;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: calc(50% + var(--offset)) calc(50% + var(--offset));
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-image: inherit;
    background-size: cover;
    background-repeat: no-repeat;
    left: 0;
    top: 0;
    position: absolute;
    background-position: 50% 50%;
    transform: translateY(var(--offset));
    z-index: -10;
  }
}
.fun-ui__showcase {
  height: 100vh;
}
</style>

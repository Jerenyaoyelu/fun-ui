<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="cube"></div>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cube {
  width: 80px;
  height: 80px;
  position: relative;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: #f08080;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 5px;
    animation: jump 0.5s linear infinite;
  }
  &::after {
    content: '';
    position: absolute;
    background: #f0808050;
    height: 5px;
    width: 100%;
    border-radius: 50%;
    bottom: -10px;
    left: 0;
    animation: shadow 0.5s linear infinite;
  }
}

@keyframes jump {
  0% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-10px) rotate(45deg);
    border-bottom-right-radius: 50%;
  }

  100% {
    transform: translateY(-20px) rotate(90deg);
  }
}

@keyframes shadow {
  0%,
  100% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(1.4, 1);
  }
}
</style>

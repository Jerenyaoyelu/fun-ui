<script setup lang="ts">
import BounceCube from '@/components/BounceCube.vue';
import infinite from '@/components/infinite.vue';
import Wrapper from '@/components/Wrapper.vue';
import { ref } from 'vue';

const textMap = ref({
  0: 'h',
  1: 'e',
  2: 'l',
  3: 'l',
  4: 'o',
});
</script>

<template>
  <div class="page">
    <Wrapper class="marginTop" title="Q弹的loading方块">
      <BounceCube />
    </Wrapper>

    <Wrapper class="marginTop" title="∞loading环">
      <infinite />
    </Wrapper>

    <Wrapper class="marginTop" title="带文字的∞loading环">
      <infinite :text-map="textMap" />
    </Wrapper>
  </div>
</template>

<style lang="less" scoped>
.page {
  padding: 40px;
  display: flex;
  margin: 0 -20px;
}
.marginTop {
  width: 420px;
  margin: 20px 20px 30px;
  height: fit-content;
}
</style>

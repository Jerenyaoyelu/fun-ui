<script setup lang="ts">
import BlurGlassCard from '@/components/BlurGlassCard.vue';

export interface IListItem {
  img?: string;
  name: string;
  desc?: string;
  showRank?: boolean;
}

defineProps<{ title: string; list: IListItem[] }>();
</script>

<template>
  <BlurGlassCard>
    <h2 class="fun-ui__boost-list-title">{{ title }}</h2>
    <div class="fun-ui__boost-list-content">
      <div class="fun-ui__boost-list-item" v-for="(item, i) in list" :key="i">
        <div class="fun-ui__boost-list-item-left">
          <img v-if="item.img" :src="item.img" class="fun-ui__boost-list-item-img" />
          <div class="fun-ui__boost-list-item-info">
            <h4>{{ item.name }}</h4>
            <small v-if="item.desc">{{ item.desc }}</small>
          </div>
        </div>
        <div v-if="item.showRank" class="fun-ui__boost-list-item-right">
          <slot name="rank-icon">#</slot>
          {{ i + 1 }}
        </div>
      </div>
    </div>
  </BlurGlassCard>
</template>

<style lang="less" scoped>
.fun-ui__boost-list-title {
  color: #fff;
  font-size: 500;
}
.fun-ui__boost-list-content {
  margin-top: 20px;
  .fun-ui__boost-list-item {
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 4px;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.4s linear 0s;
    cursor: pointer;
    &-left {
      display: flex;
      align-items: center;
    }
    &-img {
      width: 40px;
      height: 40px;
      border-radius: 5px;
      margin-right: 8px;
      object-fit: cover;
    }
    &-info {
      h4 {
        margin: 0;
      }
    }
    &-right {
      display: none;
      font-size: 30px;
      color: #03a9f4;
      flex-shrink: 0;
      font-weight: 600;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 1);
      color: #333;
      transform: scale(1.15) translateX(20px) translateY(-10px);
      box-shadow: -15px 30px 50px rgba(0, 0, 0, 0.5);
      .fun-ui__boost-list-item-right {
        display: block;
      }
    }
  }
}
</style>

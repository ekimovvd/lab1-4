<template>
  <div class="item" :class="item.class" @click="onShow">
    <i :class="item.icon"></i>
    <h4 class="item__title">
      {{ item.title }}
    </h4>
    <p class="item__text">Лабораторная работа #{{ item.id }}</p>
  </div>
</template>

<script>
import './Item.scss';
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onShow() {
      if (this.item.to.length > 0) {
        this.$router.push(this.item.to);
      }
    },
  },
};
</script>

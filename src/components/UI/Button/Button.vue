<template>
  <button :class="btn.class" @click="onClick">
    {{ btn.title }}
    <i :class="btn.icon" v-if="btn.icon" aria-hidden="true"></i>
  </button>
</template>

<script>
import './Button.scss';
export default {
  props: {
    btn: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<template>
  <div class="navbar">
    <div class="container">
      <ul class="menu">
        <li class="menu__item" v-for="item in navbar" :key="item.id">
          <router-link :to="item.url" class="menu__link">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import './Navbar.scss';
export default {
  props: {
    navbar: {
      type: Array,
      required: true,
    },
  },
};
</script>

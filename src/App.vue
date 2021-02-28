<template>
  <div id="app">
    <Navbar :navbar="navbar" />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/UI/Navbar/Navbar.vue';
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      navbar: [
        {
          title: 'Главная',
          url: '/',
        },
      ],
    };
  },
};
</script>

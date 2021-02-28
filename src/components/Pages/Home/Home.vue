<template>
  <div class="home">
    <div class="container">
      <div class="content">
        <Profile />
        <div class="grid">
          <Item v-for="item in grid" :key="item.id" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './Home.scss';
import Profile from '../../UI/Profile/Profile.vue';
import Item from '../../UI/Item/Item.vue';
export default {
  components: {
    Profile,
    Item,
  },
  computed: {
    grid() {
      return this.$store.getters.getGrid;
    },
  },
};
</script>

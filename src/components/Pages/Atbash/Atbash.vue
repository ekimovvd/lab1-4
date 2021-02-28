<template>
  <div class="atbash">
    <div class="container">
      <div class="content">
        <Item :item="item" />
        <div class="form">
          <div class="form__group">
            <textarea
              type="text"
              placeholder="Введите сообщение"
              class="form__textarea"
              v-model="encrypt"
            />
            <Button :btn="btn" @click="onEncrypt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './Atbash.scss';
import Item from '../../UI/Item/Item.vue';
import Button from '../../UI/Button/Button.vue';
export default {
  components: {
    Item,
    Button,
  },
  data() {
    return {
      encrypt: '',
      item: {
        id: 1,
        title: 'Атбаш',
        to: '',
        class: 'item_red',
        icon: 'bx bx-meteor bx-tada item__icon item__icon_red',
      },
      btn: {
        title: '',
        class: 'form__btn form__btn_one btn',
        icon: 'bx bx-right-arrow-alt form__icon',
      },
    };
  },
  methods: {
    onEncrypt() {
      this.$store.dispatch('setAtbashEncrypt', this.encrypt);
      this.encrypt = this.$store.getters.getAtbashEncrypt;
    },
  },
};
</script>

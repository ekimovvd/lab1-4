<template>
  <div class="scytale">
    <div class="container">
      <div class="content">
        <Item :item="item" />
        <Result
          :encrypt="scytaleEncrypt"
          :decrypt="scytaleDecrypt"
          v-if="scytaleEncrypt || scytaleDecrypt"
        />
        <div class="form">
          <div class="form__group">
            <Button :btn="btn1" @click="decrease" />
            <input
              type="number"
              class="form__input form__input_length"
              placeholder="Введите кол-во строк"
              v-model="rows"
              min="0"
              max="100"
            />
            <Button :btn="btn2" @click="addition" />
          </div>
          <div class="form__group">
            <textarea
              type="text"
              class="form__textarea"
              v-model="scytaleEncryptStr"
              placeholder="Введите сообщение"
            />
          </div>
          <div class="form__submit">
            <Button :btn="btn3" @click="onEncrypt" />
            <Button :btn="btn4" @click="onDecrypt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './Scytale.scss';
import Item from '../../UI/Item/Item.vue';
import Button from '../../UI/Button/Button.vue';
import Result from '../../UI/Result/Result.vue';
export default {
  components: {
    Item,
    Button,
    Result,
  },
  data() {
    return {
      rows: 1,
      scytaleEncryptStr: '',
      item: {
        id: 1,
        title: 'Сцитала',
        class: 'item_orange',
        to: '',
        icon: 'bx bx-meteor bx-tada item__icon item__icon_orange',
      },
      btn1: {
        class: 'form__btn form__btn_minus',
        title: '',
        icon: 'bx bx-minus form__icon',
      },
      btn2: {
        class: 'form__btn form__btn_plus',
        title: '',
        icon: 'bx bx-plus form__icon',
      },
      btn3: {
        class: 'form__btn btn form__btn_encrypt',
        title: 'Зашифровать',
      },
      btn4: {
        class: 'form__btn btn',
        title: 'Расшифровать',
      },
    };
  },
  computed: {
    scytaleEncrypt() {
      return this.$store.getters.getScytaleEncrypt;
    },
    scytaleDecrypt() {
      return this.$store.getters.getScytaleDecrypt;
    },
  },
  methods: {
    decrease() {
      if (this.rows > 1) {
        this.rows--;
      }
    },
    addition() {
      if (this.rows < 100) {
        this.rows++;
      }
    },
    onEncrypt() {
      let obj = {
        rows: this.rows,
        scytaleEncryptStr: this.scytaleEncryptStr,
      };

      this.$store.dispatch('setScytaleEncrypt', obj);
    },
    onDecrypt() {
      this.$store.dispatch('setScytaleDecrypt', this.scytaleEncrypt);
    },
  },
};
</script>

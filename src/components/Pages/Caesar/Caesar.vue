<template>
  <div class="caesar">
    <div class="container">
      <div class="content">
        <Item :item="item" />
        <div class="form">
          <div class="form__group">
            <textarea
              type="text"
              class="form__textarea"
              v-model="text"
              placeholder="Введите сообщение"
            ></textarea>
          </div>
          <div class="form__group">
            <textarea
              type="text"
              class="form__textarea"
              placeholder="Зашифрованный текст"
              v-model="textCipher"
              disabled
            />
          </div>
          <div class="form__group">
            <Button :btn="btn1" @click="onDecrease" />
            <input
              type="number"
              class="form__input form__input_length"
              placeholder="Введите кол-во строк"
              v-model="key"
              min="0"
              max="65"
            />
            <Button :btn="btn2" @click="onAddition" />
          </div>
          <div class="form__group">
            <Button :btn="btn1" @click="onDecreaseLang" />
            <input
              type="text"
              class="form__input form__input_length"
              v-model="lang[langIndex]"
              disabled
            />
            <Button :btn="btn2" @click="onAdditionLang" />
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
import './Caesar.scss';
import Item from '../../UI/Item/Item.vue';
import Button from '../../UI/Button/Button.vue';
export default {
  components: {
    Item,
    Button,
  },
  data() {
    return {
      lang: ['Русский язык', 'Английский язык'],
      langIndex: 0,
      key: 0,
      text: '',
      item: {
        id: 4,
        title: 'Цезарь',
        class: 'item_blue',
        to: '',
        icon: 'bx bx-bone bx-tada item__icon item__icon_blue',
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
    textCipher() {
      return this.$store.getters.getTextCipher;
    },
  },
  methods: {
    onDecrease() {
      if (this.key > 0) {
        this.key--;
      }
    },
    onAddition() {
      if (this.key < 65) {
        this.key++;
      }
    },
    onDecreaseLang() {
      if (this.langIndex > 0) {
        this.langIndex--;
      }
    },
    onAdditionLang() {
      if (this.langIndex < this.lang.length - 1) {
        this.langIndex++;
      }
    },
    onEncrypt() {
      let obj = {
        text: this.text,
        key: this.key,
        lang: this.lang[this.langIndex],
      };
      this.$store.dispatch('setEncrypt', obj);
    },
    onDecrypt() {
      let obj = {
        text: this.text,
        key: this.key,
        lang: this.lang[this.langIndex],
      };
      this.$store.dispatch('setDecrypt', obj);
    },
  },
};
</script>

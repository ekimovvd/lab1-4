<template>
  <div class="polybius">
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
              placeholder="Вывод"
              v-model="textCipherPolybius"
              disabled
            />
          </div>
          <div class="form__group">
            <input
              type="text"
              class="form__input"
              v-model="key"
              placeholder="Введите ключ"
            />
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
import './Polybius.scss';
import Item from '../../UI/Item/Item.vue';
import Button from '../../UI/Button/Button.vue';
export default {
  components: {
    Item,
    Button,
  },
  data() {
    return {
      text: '',
      key: '',
      lang: ['Русский язык', 'Английский язык'],
      langIndex: 0,
      item: {
        id: 3,
        title: 'Полибий',
        class: 'item_grey',
        to: '',
        icon: 'bx bx-badge bx-tada item__icon item__icon_grey',
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
    textCipherPolybius() {
      return this.$store.getters.getTextCipherPolybius;
    },
  },
  methods: {
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
      this.$store.dispatch('setEncryptPolybius', obj);
    },
    onDecrypt() {
      let obj = {
        text: this.text,
        key: this.key,
        lang: this.lang[this.langIndex],
      };
      this.$store.dispatch('setDecryptPolybius', obj);
    },
  },
};
</script>

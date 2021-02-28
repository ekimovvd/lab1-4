<template>
  <div class="result">
    <div class="result__group">
      <h5 class="result__title">
        Зашифрованная строка:
      </h5>
      <p class="result__text">
        {{ encrypt }}
      </p>
    </div>
    <div class="result__group">
      <h5 class="result__title">
        Расшифрованная строка:
      </h5>
      <p class="result__text">
        {{ decrypt }}
      </p>
    </div>
  </div>
</template>

<script>
import './Result.scss';
export default {
  props: {
    encrypt: {
      type: String,
    },
    decrypt: {
      type: String,
    },
  },
};
</script>

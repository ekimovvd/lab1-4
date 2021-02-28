export default {
  state: {
    textCipher: '',
    alphabetRu:
      'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя',
    alphabetEn: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    alphabetCipher: '',
  },
  mutations: {
    setAlphabetCipher(state, payload) {
      state.alphabetCipher = payload;
    },
    setEncrypt(state, payload) {
      state.textCipher = payload;
    },
    setDecrypt(state, payload) {
      state.textCipher = payload;
    },
  },
  actions: {
    setEncrypt({commit, getters, dispatch}, {text, key, lang}) {
      var alphabetCipher;
      if (lang === 'Русский язык') {
        alphabetCipher = getters.getAlphabetRu;
      } else {
        alphabetCipher = getters.getAlphabetEn;
      }

      let obj = {
        arr: alphabetCipher.split(''),
        key: key,
      };
      alphabetCipher = dispatch('shiftArray', obj).then((response) => {
        commit('setAlphabetCipher', response);
        console.log(response);

        var alphabet;
        if (lang === 'Русский язык') {
          alphabet = getters.getAlphabetRu;
        } else {
          alphabet = getters.getAlphabetEn;
        }

        dispatch('cryptText', {
          text,
          alphabet: alphabet,
          alphabetCipher: response,
        }).then((res) => {
          console.log(res);
          commit('setEncrypt', res);
        });
      });
    },
    setDecrypt({commit, getters, dispatch}, {lang, text, key}) {
      var alphabetCipher;
      if (lang === 'Русский язык') {
        alphabetCipher = getters.getAlphabetRu;
      } else {
        alphabetCipher = getters.getAlphabetEn;
      }

      let obj = {
        arr: alphabetCipher.split(''),
        key: key,
      };
      alphabetCipher = dispatch('shiftArray', obj).then((response) => {
        commit('setAlphabetCipher', response);
        console.log(response);

        var alphabetCipher;
        if (lang === 'Русский язык') {
          alphabetCipher = getters.getAlphabetRu;
        } else {
          alphabetCipher = getters.getAlphabetEn;
        }

        dispatch('cryptText', {
          text,
          alphabet: response,
          alphabetCipher: alphabetCipher,
        }).then((res) => {
          console.log(res);
          commit('setDecrypt', res);
        });
      });
    },
    shiftArray({}, {arr, key}) {
      return arr
        .slice(key)
        .concat(arr.slice(0, key))
        .join('');
    },
    cryptText({}, {text, alphabet, alphabetCipher}) {
      const numArr = [];
      const textArr = text.split('');

      // проверка есть ли в оригинальном алфавите такая буква
      textArr.forEach((element) => {
        if (alphabet.indexOf(element) !== -1) {
          numArr.push(alphabet.indexOf(element));
        } else {
          numArr.push(element);
        }
      });

      // заменяем на букву из криптованного алфавита
      return numArr
        .map((index) => {
          let arr = [];

          // иначе если это символ, оставить, как есть
          if (Number.isInteger(index)) {
            arr = alphabetCipher[index];
          } else {
            arr = index;
          }

          return arr;
        })
        .join('');
    },
  },
  getters: {
    getAlphabetRu(state) {
      return state.alphabetRu;
    },
    getAlphabetEn(state) {
      return state.alphabetEn;
    },
    getTextCipher(state) {
      return state.textCipher;
    },
  },
};

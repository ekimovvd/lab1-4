export default {
  state: {
    cube: [],
    textCipherPolybius: '',
  },
  mutations: {
    setEncryptPolybius(state, payload) {
      state.textCipherPolybius = payload;
    },
  },
  actions: {
    setEncryptPolybius({commit, dispatch}, {text, key, lang}) {
      var rows, columns, alphabet, newText;

      text = text.toLowerCase();
      key = key.toLowerCase();

      if (lang === 'Русский язык') {
        rows = 6;
        columns = 6;
        alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
      } else {
        rows = 5;
        columns = 5;
        alphabet = 'abcdefghijklmnopqrstuvwxyz';
      }

      key = key.replace('j', 'i');
      dispatch('checkDup', key).then((check) => {
        if (!check) {
          for (let i = 0; i < key.length; i++) {
            alphabet = alphabet.replace(key[i], '');
          }
          alphabet = alphabet.replace('j', '');

          newText = key + alphabet;

          let count = 0;
          let cube = new Array();
          for (let i = 0; i < rows; i++) {
            let tmp = [];
            for (let j = 0; j < columns; j++) {
              if (newText[count]) {
                tmp.push(newText[count]);
              } else {
                tmp.push(' ');
              }
              count += 1;
            }
            cube.push(tmp);
          }

          console.log(cube);

          // Координаты
          let vertical = [];
          let horizontal = [];

          for (let i = 0; i < text.length; i++) {
            for (let j = 0; j < rows; j++) {
              for (let k = 0; k < columns; k++) {
                if (text[i] === cube[j][k]) {
                  console.log(j, k);
                  vertical.push(k);
                  horizontal.push(j);
                }
              }
            }
          }

          let newTmp = '';
          for (let i = 0; i < vertical.length; i++) {
            newTmp += vertical[i];
          }
          for (let i = 0; i < horizontal.length; i++) {
            newTmp += horizontal[i];
          }

          newTmp = newTmp.split('');

          console.log(newTmp);

          let v = 0;
          let h = 1;
          let c = 0;

          let textCipher = '';
          while (c < newTmp.length) {
            textCipher += cube[newTmp[h]][newTmp[v]];
            v += 2;
            h += 2;
            c += 2;
          }
          commit('setEncryptPolybius', textCipher);
        }
      });
    },
    setDecryptPolybius({commit, dispatch}, {text, key, lang}) {
      var rows, columns, alphabet, newText;

      text = text.toLowerCase();
      key = key.toLowerCase();

      if (lang === 'Русский язык') {
        rows = 6;
        columns = 6;
        alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
      } else {
        rows = 5;
        columns = 5;
        alphabet = 'abcdefghijklmnopqrstuvwxyz';
      }

      key = key.replace('j', 'i');
      dispatch('checkDup', key).then((check) => {
        if (!check) {
          for (let i = 0; i < key.length; i++) {
            alphabet = alphabet.replace(key[i], '');
          }
          alphabet = alphabet.replace('j', '');

          newText = key + alphabet;

          let count = 0;
          let cube = new Array();
          for (let i = 0; i < rows; i++) {
            let tmp = [];
            for (let j = 0; j < columns; j++) {
              if (newText[count]) {
                tmp.push(newText[count]);
              } else {
                tmp.push(' ');
              }
              count += 1;
            }
            cube.push(tmp);
          }

          console.log(cube);

          let tmpText = '';
          for (let i = 0; i < text.length; i++) {
            for (let j = 0; j < rows; j++) {
              for (let k = 0; k < columns; k++) {
                if (text[i] === cube[j][k]) {
                  tmpText += k.toString() + j.toString();
                }
              }
            }
          }

          console.log(tmpText.split(''));

          let v = [];
          let h = [];
          for (let i = 0; i < tmpText.length; i++) {
            if (i < tmpText.length / 2) {
              v.push(tmpText[i]);
            } else {
              h.push(tmpText[i]);
            }
          }

          let textCipher = '';
          for (var i = 0; i < h.length; i++) {
            textCipher += cube[h[i]][v[i]];
          }
          commit('setEncryptPolybius', textCipher);
        }
      });
    },
    checkDup({}, key) {
      var map = {};
      for (var i = 0; i < key.length; i++) {
        if (map[key[i]]) {
          return true;
        }
        map[key[i]] = 1;
      }
      return false;
    },
  },
  getters: {
    getTextCipherPolybius(state) {
      return state.textCipherPolybius;
    },
  },
};

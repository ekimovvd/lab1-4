export default {
  state: {
    scytaleEncryptStr: '',
    scytaleDecryptStr: '',
    scytaleColumns: 0,
    scytaleRows: 0,
    scytaleTranspose: [],
  },
  mutations: {
    setScytaleEncrypt(state, payload) {
      state.scytaleEncryptStr = payload;
    },
    setScytaleRows(state, payload) {
      state.scytaleRows = payload;
    },
    setScytaleColumns(state, payload) {
      state.scytaleColumns = payload;
    },
    setScytaleTranspose(state, payload) {
      state.scytaleTranspose = payload;
    },
    setScytaleDecrypt(state, payload) {
      state.scytaleDecryptStr = payload;
    },
  },
  actions: {
    setScytaleEncrypt({commit, dispatch, getters}, {rows, scytaleEncryptStr}) {
      dispatch('setScytaleColumns', {
        len: scytaleEncryptStr.length,
        rows: rows,
      });
      dispatch('setScytaleRows', rows);
      let columns = getters.getScytaleColumns;
      let array = new Array();

      let count = 0;

      for (let i = 0; i < rows; i++) {
        let tmp = [];
        for (let j = 0; j < columns; j++) {
          if (scytaleEncryptStr[count]) {
            tmp.push(scytaleEncryptStr[count]);
          } else {
            tmp.push('*');
          }
          count++;
        }
        array.push(tmp);
      }
      console.log(array);
      dispatch('setScytaleTranspose', {array, rows, columns});
      let arrayTranspose = getters.getScytaleTranspose;
      console.log(arrayTranspose);

      var str = '';

      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          str += arrayTranspose[i][j];
        }
      }

      commit('setScytaleEncrypt', str);
    },
    setScytaleRows({commit}, payload) {
      commit('setScytaleRows', payload);
    },
    setScytaleColumns({commit}, {len, rows}) {
      let columns = Math.floor((len - 1) / rows + 1);
      commit('setScytaleColumns', columns);
    },
    setScytaleTranspose({commit}, {array, rows, columns}) {
      var arrayTranspose = [];
      for (var i = 0; i < columns; i++) {
        arrayTranspose[i] = [];
        for (var j = 0; j < rows; j++) {
          arrayTranspose[i][j] = array[j][i];
        }
      }

      commit('setScytaleTranspose', arrayTranspose);
    },
    setScytaleDecrypt({commit, getters}, scytaleDecryptStr) {
      let rows = getters.getScytaleRows;
      let columns = getters.getScytaleColumns;

      let arr = [];
      let str = '';
      let count = 0;

      for (let i = 0; i < rows; i++) {
        arr[i] = [];
        for (let j = 0; j < columns; j++) {
          if (scytaleDecryptStr[count] !== '*') {
            arr[i][j] = scytaleDecryptStr[count];
            str += scytaleDecryptStr[count];
          } else if (
            scytaleDecryptStr[count] === '*' &&
            count < scytaleDecryptStr.length
          ) {
            arr[i][j] = '';
            str += '';
          }

          count += rows;
        }
        count = i + 1;
      }
      commit('setScytaleDecrypt', str);
    },
  },
  getters: {
    getScytaleEncrypt(state) {
      return state.scytaleEncryptStr;
    },
    getScytaleRows(state) {
      return state.scytaleRows;
    },
    getScytaleColumns(state) {
      return state.scytaleColumns;
    },
    getScytaleTranspose(state) {
      return state.scytaleTranspose;
    },
    getScytaleDecrypt(state) {
      return state.scytaleDecryptStr;
    },
  },
};

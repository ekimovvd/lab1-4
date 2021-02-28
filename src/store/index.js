import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import grid from './grid.js';
import atbash from './atbash.js';
import scytale from './scytale.js';
import polybius from './polybius.js';
import caesar from './caesar.js';

export default new Vuex.Store({
  modules: {
    grid,
    atbash,
    scytale,
    polybius,
    caesar,
  },
});

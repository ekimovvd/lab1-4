export default {
  state: {
    grid: [
      {
        id: 1,
        title: 'Атбаш',
        class: 'item_red',
        to: '/atbash',
        icon: 'bx bx-meteor bx-tada item__icon item__icon_red',
      },
      {
        id: 2,
        title: 'Сцитала',
        class: 'item_orange',
        to: '/scytale',
        icon: 'bx bx-bomb bx-tada item__icon item__icon_orange',
      },
      {
        id: 3,
        title: 'Полибий',
        class: 'item_grey',
        to: '/polybius',
        icon: 'bx bx-badge bx-tada item__icon item__icon_grey',
      },
      {
        id: 4,
        title: 'Цезарь',
        class: 'item_blue',
        to: '/caesar',
        icon: 'bx bx-bone bx-tada item__icon item__icon_blue',
      },
    ],
  },
  getters: {
    getGrid(state) {
      return state.grid;
    },
  },
};

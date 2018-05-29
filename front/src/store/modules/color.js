const state = {
  color: 'red',
};

// getters
const getters = {
  getColor($state) {
    return $state.color;
  },
};

// actions
const actions = {

};

// mutations
const mutations = {
  changeColor($state, $payload) {
    $state.color = $payload;
    return $state.color;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

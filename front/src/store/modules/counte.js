// initial state
// shape: [{ id, quantity }]
const state = {
  count: 2,
};

// getters
const getters = {
  getCounter($state) {
    return $state.count;
  },
};

// actions
const actions = {
  asyncAddCount($context, $payload) {
    // commit 의 대상인 addCounter 는 mutations 의 메서드를 의미한다.
    return setTimeout(() => {
      $context.commit('addCounter');
    }, 1000);
  },
};

// mutations
const mutations = {
  addCounter($state, $payload) {
    $state.count += 1;
    return $state.count;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

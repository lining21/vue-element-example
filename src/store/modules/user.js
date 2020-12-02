const state = {
  roles: []
};

const mutations = {
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  }
};

const actions = {
  // remove token
  setRoles({ commit }) {
    return new Promise((resolve) => {
      commit('SET_ROLES', ['admin']);
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

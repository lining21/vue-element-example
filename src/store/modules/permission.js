import { asyncRoutes, constantRoutes } from '@/router';

const state = {
  routes: [],
  addRoutes: []
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    console.log('constantRoutes', constantRoutes);
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  }
};

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise((resolve) => {
      // let accessedRoutes;
      // if (roles.includes('admin')) {
      const accessedRoutes = asyncRoutes || [];
      console.log('accessedRoutes', accessedRoutes);
      // } else {
      //   accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
      // }
      commit('SET_ROUTES', accessedRoutes);
      resolve(accessedRoutes);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

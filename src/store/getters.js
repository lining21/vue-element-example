const getters = {
  permission_routes: (state) => state.permission.routes,
  roles: (state) => state.user.roles,
  sidebar: (state) => state.app.sidebar
};
export default getters;

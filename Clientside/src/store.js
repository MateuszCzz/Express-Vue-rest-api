import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isAuthenticated: false,
      userId: null, 
    };
  },
  mutations: {
    SET_AUTHENTICATION(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    SET_USER_ID(state, userId) {
      state.userId = userId;
    },
  },
  actions: {
    updateAuthentication({ commit }, isAuthenticated) {
      commit('SET_AUTHENTICATION', isAuthenticated);
    },
    setUserId({ commit }, userId) {
      commit('SET_USER_ID', userId);
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    getUserId(state) {
      return state.userId;
    },
  },
});

export default store;

import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const game = {
  state: {
    points: 0,
    cps: 0
  },
  mutations: {
    earnPoints(state, payload){
      state.points += payload.amount
    },
    addCps(state, payload) {
      state.cps += payload.amount
    }
  }
}

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    game
  },
  plugins: [createPersistedState()]
})

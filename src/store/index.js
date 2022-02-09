import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const game = {
  state: {
    points: 0,
    cps: 0,
    unicorns: [
      {img: 'https://tiermaker.com/images/chart/chart/unicorn-emoji-70263/unicorn-face1f984-2png', name:'Unicorn', price: 2, amount: 0, cps: 1}
    ]
  },
  mutations: {
    earnPoints(state, payload){
      state.points += payload.amount
    },
    addCps(state, payload) {
      state.cps += payload.amount
    },
    addPrice(state, payload) {
      state.unicorns[payload.index].price += payload.price
    },
    addUnicorn(state, payload) {
      state.unicorns[payload.index].amount += payload.amount
    }
  },
  actions: {
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

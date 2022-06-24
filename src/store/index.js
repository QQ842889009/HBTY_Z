import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import user from "./modules/user"
import permission from "./modules/permission"
import station from "./modules/station"
import aiUnit from "./modules/aiUnit"
import inDoor from "./modules/inDoor"
// import door from "./modules/door"
export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { inDoor, station, aiUnit } //
})

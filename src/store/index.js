import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import user from "./modules/user"
import permission from "./modules/permission"
import station from "./modules/station"
import aiUnit from "./modules/aiUnit"
export default new Vuex.Store({
  modules: {
    user,
    permission,
    station,
    aiUnit
  }
})

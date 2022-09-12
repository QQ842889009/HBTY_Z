import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import user from "./modules/user"
import permission from "./modules/permission"
import station from "./modules/station"
import aiUnit from "./modules/aiUnit"
import weather from "./modules/weather"

import plcS7 from "./modules/plcS7"
import inDoor from "./modules/inDoor"
import door from "./modules/door"
import stationBranch from "./modules/stationBranch"
export default new Vuex.Store({
  modules: {
    user,
    permission,
    station,
    aiUnit,
    plcS7,
    inDoor,
    door,
    stationBranch,
    weather
  }
})

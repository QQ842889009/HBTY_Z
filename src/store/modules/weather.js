import Vue from "vue"
import isNumber from "assets/js/isNumber"

export default {
  // namespaced: true,
  state: {
    weather: [
      {
        sid: "02"
      }
    ]
  },
  getters: {
    weather(state) {
      //气象
      return state.weather
    }
  },

  mutations: {
    //
    //四新气象
    WEATHER(state, data) {
      let len = data.length
      let j = parseInt(data.Sid)
      if (j < 3) {
        //因为气象的sid是2
        let obj = isNumber.isNumberObj(data)

        for (let key in obj) {
          Vue.set(state.weather[0], key, obj[key])
        }
      }
    }
  },
  actions: {}
}

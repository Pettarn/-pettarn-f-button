import Vue from 'vue'
import App from './App.vue'

import FButton from '../dist/build'
Vue.use(FButton)

new Vue({
  el: '#app',
  render: h => h(App)
})

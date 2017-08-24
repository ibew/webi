import Vue from 'vue'
import App from './App.vue'
import Webi from '../src/index.js'


Vue.use(Webi)

new Vue({
  el: '#app',
  render: h => h(App)
})

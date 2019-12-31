import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Class Example
Vue.filter('to-lowercase', function (value) {
  return value.toLowerCase()
})

// Class Example
Vue.mixin({
  created () {
    console.log('Global Mixin - Created Hook')
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')

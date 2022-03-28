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



export default {

  methods: {

    alertMe() {

      alert('The Alert!');

    }

  },

  directives: {

    'my-on': {

      bind(el, binding) {
        el.addEventListener(binding.arg, binding.value);
      },

      unbind(el, binding) {
        el.removeEventListener(binding.arg, binding.value);
      }

    }

  }

}


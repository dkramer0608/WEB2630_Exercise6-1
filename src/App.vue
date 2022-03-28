<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives</h1>
        
        
          <h1 v-my-on:click="alertMe">Click me!</h1>

      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        
        <div id="app">
      
    <h1>{{ name | reverseString }}</h1>
  </div>

<div>
    <h1>{{ name| uppercase }}</h1>
  </div>
 

        <div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: "Danielle Kramer",
    };
  },

  filters: {
    uppercase: function(value) {
      return value.toUpperCase();
    }
  }
};


new Vue({
  el: '#main',
  template: '',
  components: { App },
})


var vm = new Vue({
  el: '#example',
  data: {
    message: 'Danielle Kramer'
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})



new Vue({
  el: "#app",
  mixins: [helloMixin]
});


Vue.mixin({
  created() {
    this.hello();
  },
  methods: {
    hello() {
      alert("Danielle Kramer");
    }
  }
});

new Vue({
  el: "#app"
});

</script>

<style></style>

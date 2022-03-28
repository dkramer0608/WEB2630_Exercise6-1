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
         <h1>Filters & Mixins</h1>

        <input type="text" class="form-control" v-model="text"/>
        <p>{{text|reverseText}}</p>


        <input type="text" class="form-control" v-model="textCount"/>
        <p>{{textCount|countText}}</p>


        <input type="text" class="form-control" v-model="textCom"/>
        <p>{{textReverseComputed}}</p>


        <input type="text" class="form-control" v-model="textCount"/>
        <p>{{textCountComputed}}</p>
      </div>
    </div>
  </div>
</template>

<script>

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

import {countMixin} from "./countMixin"; 

export default {
  name: "App",
  data() {
    return {
      text: "",
      textCount: "",
      textCom: "Test",
    };
  },

  mixins: [countMixin]
  
};



</script>

<style></style>
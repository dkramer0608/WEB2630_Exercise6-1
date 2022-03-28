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
        <!-- ToDo 2 -->
        <!-- Build a local Filter which reverses the Text it is applied on -->

        <!-- ToDo 3 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->

        <!-- ToDo 4 -->
        <!-- Do the same as in ToDo 2 & 3, now with Computed Properties -->

        <!-- ToDo 5 -->
        <!-- Share the Computed Property rebuilding ToDo 4 via a Mixin -->
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
</script>

<style></style>
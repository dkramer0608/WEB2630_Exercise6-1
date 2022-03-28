<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives</h1>
        <!-- ToDo 1 -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
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

import {countMixin} from "./main.js"; 

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
<template>
  <div class="container" id="app">
    <div class="row">
      <div class="col">
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
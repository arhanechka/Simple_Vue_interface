<template>
  <div id="app">
        <div class="container">
            <menu-component></menu-component>
            <h1>{{msg}}</h1>
            <footer-component></footer-component>
        </div>
  </div>
</template>

<script>
import MenuComponent from '../MenuComponent.vue'
import FooterComponent from '../FooterComponent.vue'
export default {
  name: 'app',
  components: {MenuComponent, FooterComponent}, //Register other components
  data () {
    return {
      msg: 'Welcome to Avra Token page!'
    }
  }
}
</script>


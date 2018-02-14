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
import MenuComponent from './public/components/MenuComponent.vue'
import FooterComponent from './public/components/FooterComponent.vue'
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

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

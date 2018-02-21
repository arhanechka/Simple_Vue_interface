<template>
  <div id="app">
     <div class="container">
       <template v-if="!currentUser">
            <menu-component></menu-component>
       </template>
        <template v-if="currentUser">
            <menu-if-login-component></menu-if-login-component>
       </template>
    <v-container>
      <router-view/>
    </v-container>
    <footer-component></footer-component>
        </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import MenuComponent from './components/MenuComponent.vue'
import MenuIfLoginComponent from './components/MenuIfLoginComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
  export default {
    name: 'app',
    components: {MenuComponent, MenuIfLoginComponent, FooterComponent}, 
  
    computed: {
    ...mapGetters({ currentUser: 'currentUser' })
  },
  created () {
    this.checkCurrentLogin()
  },
  updated () {
    this.checkCurrentLogin()
  },
  methods: {
    checkCurrentLogin () {
      console.log('profile current user : ' + JSON.stringify(this.currentUser))
      console.log('profile current user2 : ' + JSON.stringify(this.$store.state.currentUser))
      if (!this.currentUser) {
       return false;
      }
    }
  }
}
</script>

<style>

</style>



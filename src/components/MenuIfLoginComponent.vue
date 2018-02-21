<!--MenuComponent.vue-->
<template>
    
<header>
   
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">{{company}}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" 
    data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" 
    aria-label="Toggle navigation" style="">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">

               <a class="nav-link" href="#/cabinet">Cabinet</a>
            </li>
           </ul>
        <form class="form-inline my-2 my-lg-0" method="POST" action = "/logout">

    <router-link to="logout">
<button class="btn btn-outline-warning">Logout</button>
</router-link>
</form> 
    </div>
</nav>
</header>
</template>

<script>
import {
    mapGetters
  } from 'vuex'
  
  export default {
    name: 'MenuIfLoginComponent',
    data(){
            return {
                company: 'Avra'
            }
        },
    computed: {
      ...mapGetters({
        currentUser: 'currentUser'
      })
    }
  }
    
</script>


<style>

</style>
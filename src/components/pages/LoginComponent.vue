<template>
  <div id="login">
        <div class="container">
            <menu-component></menu-component>
  <form method="POST" action="/login">
    <fieldset>
        <legend>Login form</legend>

        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" data-cip-id="exampleInputEmail1">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" name="password" id="exampleInputPassword1" placeholder="Password" data-cip-id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </fieldset>
</form>
 <footer-component></footer-component>
        </div>
  </div>
</template>
<script>
import MenuComponent from '../MenuComponent.vue'
import FooterComponent from '../FooterComponent.vue'
 import axios from 'axios';  
export default {
  name: 'reg',
  components: {MenuComponent, FooterComponent}, //Register other components
  data () {
    return {
      msg: 'Welcome to Avra Token page!'
    }
  }
}

</script>


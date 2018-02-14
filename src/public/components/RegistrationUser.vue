<template>
  <div id="reg">
        <div class="container">
            <menu-component></menu-component>
  <form method="POST" action="/registration">
    <fieldset>
        <legend>Registration</legend>
        <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" name = "name" class="form-control" id="exampleName" aria-describedby="emailHelp" placeholder="Enter name" data-cip-id="exampleInputEmail1">
        </div>

        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" name = "email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" data-cip-id="exampleInputEmail1">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" name = "password" class="form-control" id="exampleInputPassword1" placeholder="Password" data-cip-id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </fieldset>
</form>
 <footer-component></footer-component>
        </div>
</template>
<script>
import MenuComponent from './MenuComponent.vue'
import FooterComponent from './FooterComponent.vue'
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


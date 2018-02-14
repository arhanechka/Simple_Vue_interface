<template>
  <div id="login">
        <div class="container">
            <menu-component></menu-component>
  <form @submit="onSubmit" @reset="onReset">
    <fieldset>
        <legend>Login form</legend>

        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" name="email" id="exampleInputEmail1" 
            aria-describedby="emailHelp" placeholder="Enter email" 
            data-cip-id="exampleInputEmail1" v-model="email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" name="password" 
            id="exampleInputPassword1" placeholder="Password" 
            data-cip-id="exampleInputPassword1" v-model="password">
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
  name: 'login',
  components: {MenuComponent, FooterComponent}, //Register other components
  data () {
    return {
      msg: 'Welcome to Avra Token page!', 
      email:'',
      password:''
    }
  },
  methods: {
     onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.email = "";
      this.password = "";
      /* Trick to reset/clear native browser form validation state */
      this.$nextTick(() => {
       });
    },
    onSubmit(evt) {
         evt.preventDefault();
        let url = 'http://localhost:3000/user/signin';
        let param = {
          email: this.email,
          password: this.password
      };
      console.log(this.email);
      console.log(this.password);
        axios.post(url, param).then((response) => {
          console.log(response);
          alert(response.data.msg);
          this.$router.push('cabinet')
         }).catch((error) => {
          console.log(error);
        })
      }
    }
  }


</script>


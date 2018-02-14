<template>
  <div id="reg">
        <div class="container">
            <menu-component></menu-component>
  <form method="POST" @submit="onSubmit" @reset="onReset">
    <fieldset>
        <legend>Registration</legend>
        <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" name = "name" class="form-control" 
            id="exampleName" aria-describedby="emailHelp" placeholder="Enter name" 
            data-cip-id="exampleInputEmail1" v-model="name">
        </div>

        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" name = "email" class="form-control" 
            id="exampleInputEmail1" aria-describedby="emailHelp" 
            placeholder="Enter email" data-cip-id="exampleInputEmail1" v-model="email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" name = "password" class="form-control" 
            id="exampleInputPassword1" placeholder="Password" data-cip-id="exampleInputPassword1" 
            v-model="password">
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
      msg: 'Welcome to Avra Token page!',
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
     onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.name = "";
      this.email = "";
      this.password = "";
      /* Trick to reset/clear native browser form validation state */
      this.$nextTick(() => {
       });
    },
    onSubmit(evt) {
         evt.preventDefault();
        let url = 'http://localhost:3000/loginexp/signup';
        let param = {
          name: this.name,
          email: this.email,
          password: this.password
      };
      console.log(this.name);
      console.log(this.email);
      console.log(this.password);
        axios.post(url, param).then((response) => {
          console.log(response);
          alert(response.data.msg);
          this.$router.push('/cabinet')
         }).catch((error) => {
          console.log(error);
        })
      }
    }
}

</script>


<template>
  <div id="cabinet">
        <div class="container">
            <menu-component></menu-component>
  <h3>Welcome, User!</h3>
    <form method="GET" action="/wallets">
        <fieldset>
            <legend>View my wallets</legend>

            <button type="submit" class="btn btn-primary">Submit</button>
        </fieldset>
    </form>


<form method="POST" action="/wallets">
    <fieldset>
        <legend>Generate new wallet</legend>

        <button type="submit" class="btn btn-primary">Generate</button>
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
  name: 'cabinet',
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
        let url = 'http://localhost:3000/routes/login';
        let param = {
          email: this.email,
          password: this.password
      };
      console.log(this.email);
      console.log(this.password);
        axios.post(url, param).then((response) => {
          console.log(response);
          alert(response.data.msg);
          this.$router.push('/')
         }).catch((error) => {
          console.log(error);
        })
      }
    }
  }


</script>
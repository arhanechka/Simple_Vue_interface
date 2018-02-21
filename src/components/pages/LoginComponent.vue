<template>
  <div id="login">
       
  <form @submit.prevent="login">
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

  </div>
</template>
<script>

 import axios from 'axios';  
 import { mapGetters } from 'vuex'

export default {
  name: 'login',
 
  data () {
    return {
      msg: 'Welcome to Avra Token page!', 
      email:'',
      password:''
    }
  },
  computed: {
    ...mapGetters({ currentUser: 'currentUser' })
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
     checkCurrentLogin () {
      if (this.currentUser) {
        console.log('current user login = ' + JSON.stringify(this.currentUser))
        this.$router.replace(this.$route.query.redirect || '/profile')
      }
    },
    login () {
      let url = 'http://localhost:3000/user/signin';
        let param = {
          email: this.email,
          password: this.password
      };
      console.log(this.email);
      console.log(this.password);
      axios
        .post(url, param)
        .then(request => this.loginSuccessful(request))
        .catch(() => this.loginFailed())
      console.log(this.email)
      console.log(this.password)
    },
    loginSuccessful (req) {
      if (!req.data.token) {
        this.loginFailed()
        return
      }
      this.error = false
      localStorage.token = req.data.token
      this.$store.dispatch('login')
      //this.$router.replace(this.$route.query.redirect || '/profile')
      this.$router.push('cabinet')
    },

    loginFailed () {
      this.error = 'Login failed!'
      this.$store.dispatch('logout')
      delete localStorage.token
    }
}
}
</script>


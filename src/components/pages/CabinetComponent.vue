<template>
  <div id="cabinet">
        
  <h3>Welcome, {{name}}!</h3>
    <form @submit="onSubmit" action="/wallets">
        <fieldset>
            <legend>View my wallets</legend>

            <button type="submit" class="btn btn-primary">Submit</button>
        </fieldset>
    </form>
<form action="/wallets">
    <fieldset>
        <legend>Generate new wallet</legend>
        <button type="submit" class="btn btn-primary" v-on:click="generateWallet">Generate</button>
    </fieldset>
</form>
   </div>
</template>
<script>

 import axios from 'axios'; 
 import { mapGetters } from 'vuex' 
export default {
  name: 'cabinet',
  
  data () {
    return {
      msg: 'Welcome to Avra Token page!', 
      wallets:[],
      name: '',
      id:'5a840e808d3ac54bec9ad819',
      password: 'b052ad71d9fcd26e996e13d076a7eb11827043d5'
    }
  },
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
      if (this.currentUser) {
        console.log('current user login = ' + JSON.stringify(this.currentUser))
        this.name = this.currentUser.name
      }
    },
  
         onSubmit(evt) {
         evt.preventDefault();
      console.log('current user = ' + JSON.stringify(this.currentUser))
     let param = this.currentUser.id;
      let url = '/wallet/wallets/'+param;
     console.log(url)
       this.$http
       .get(url).then((response) => {
          console.log(response);
          alert(response.data.msg);
         }).catch((error) => {
          console.log(error);
        })
      },
      generateWallet(event) {
        if (event) event.preventDefault();
         console.log(this.id);
        let url = 'http://localhost:3000/wallet/newWallet';
        let param = {
          id: this.id,
          password: this.password
         };
     
       $this.http.post(url, param).then((response) => {
          console.log(response);
          alert(response.data.msg);
         }).catch((error) => {
          console.log(error);
        })
    }
  }
}
  </script>
<template>
  <div id="cabinet">
        
  <h3>Welcome, User!</h3>
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
      name:'',
      id:'5a840e808d3ac54bec9ad819',
      password: 'b052ad71d9fcd26e996e13d076a7eb11827043d5'
    }
  },
  computed: {
    ...mapGetters({ currentUser: 'currentUser' })
  },
  methods: {
         onSubmit(evt) {
         evt.preventDefault();
         let url = 'http://localhost:3000/wallet/wallets/';
         console.log('current user = ' + JSON.stringify(this.currentUser))
     let param = this.currentUser.id;
      url = 'http://localhost:3000/wallet/wallets/'+param;
     console.log(url)
       axios.get(url).then((response) => {
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
     
       axios.post(url, param).then((response) => {
          console.log(response);
          alert(response.data.msg);
         }).catch((error) => {
          console.log(error);
        })
    }
  }
}
  </script>
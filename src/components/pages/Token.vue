<template>
  <div id="token">
        
  <h3>Avra Token page</h3>
  
  <h3>You have <span ><span id="balance"></span> AVRA</span></h3>

  <br>
  <h1>Send AvraCoin</h1>
  <br>
  <label for="amount">Amount:</label>
  <input type="text" id="amount" placeholder="e.g., 95"> 
  <br><label for="receiver">To Address:</label>
  <input type="text" id="receiver" placeholder="e.g., 0x93e66d9baea28c17d9fc393b53e3fbdd76899dae">
  <br><br><button id="send" onclick="App.sendCoin()">Send MetaCoin</button>
  <br><br>
  <span id="status"></span>
  <br>
  <span class="hint"><strong>Hint:</strong> open the browser developer console to view any errors and warnings.</span>

   </div>
</template>
<script>

 
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
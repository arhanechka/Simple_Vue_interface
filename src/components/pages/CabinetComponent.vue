<template>
  <div id="cabinet">
        
  <h3>Welcome, {{name}}!</h3>
    <form>
        <fieldset>
            <legend>My wallets</legend>

            <button type="submit" v-on:click="getWallet" class="btn btn-primary">View</button>
        </fieldset>
        </form>
        <div  v-if="wallets">
        <table class="table b-table">
    <thead>
    <tr>
      <th>Address</th>
      <th>Balance</th>
      <th class="col-sm-2">Actions</th>
    </tr>
    </thead>
    <tbody> 
     <tr v-for="wallet in wallets">
      <td>
        <router-link :to="{name: 'cabinet', params: {wallet_id: wallet._id}}">{{ wallet.public }}</router-link>
      </td>
      <td>
        {{ wallet.balance }}
        <span class="glyphicon glyphicon-euro" aria-hidden="true"></span>
      </td>
      <td>
        <button class="btn btn-danger disabled" v-on:click="walletDelete(wallet._id)">Delete</button>
      </td>
    </tr>
    </tbody>
  </table>
        </div>
<form action="/wallets">
    <fieldset>
        <legend>Generate new wallet</legend>
        <button type="submit" class="btn btn-primary" v-on:click="generateWallet">Generate</button>
    </fieldset>
</form>
   </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "cabinet",
  data() {
    return {
      msg: "Welcome to Avra Token page!",
      wallets: [],
      name: "",
      id: "",
      password: "b052ad71d9fcd26e996e13d076a7eb11827043d5"
    };
  },
  computed: {
    ...mapGetters({ currentUser: "currentUser" })
  },
  created() {
    this.checkCurrentLogin();
  },
  updated() {
    this.checkCurrentLogin();
  },
  methods: {
    checkCurrentLogin() {
      if (this.currentUser) {
        console.log("current user login = " + JSON.stringify(this.currentUser));
        this.name = this.currentUser.name;
        this.id = this.currentUser.id;
        
      }
    },
    getWallet() {
      // evt.preventDefault();
      console.log("current user = " + JSON.stringify(this.currentUser));
      let url = "/wallet/wallets/" + this.id;
      console.log(url);
      this.$http
        .get(url)
        .then(response => {
          console.log(response);
          alert(response.data.wallets.length + " wallets has been found!");
          this.wallets = response.data.wallets;
          this.$router.redirect('cabinet');
        })
        .catch(error => {
          console.log(error);
        });
    },
    generateWallet(event) {
      if (event) event.preventDefault();
      console.log(this.id);
      let url = 'wallet/newWallet/'+this.id;
      console.log(url)
         this.$http
        .post(url)
        .then(response => {
          console.log(response);
          alert(response.data.msg);
          this.$router.redirect('cabinet');
        })
        .catch(error => {
          console.log(error);
        });
    },
    walletDelete(wallet_id) {
      console.log(wallet_id);
      let url = "wallet/deleteWallet/" + wallet_id;
      console.log(url);
      this.$http
        .post(url)
        .then(response => {
          console.log(response);
          alert(response.data.msg);
          this.$router.push('cabinet');
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
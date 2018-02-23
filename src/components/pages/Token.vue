<template>
  <div id="token">
        
  <h1>Avra Token</h1>
  <h3>Total supply of AVRA: <span id="supply">{{totalSupply}}</span> </h3>
  <h4>You can buy Avra at this address: <span id="contract_address">{{crowdsaleAddress}}</span></h4>
  <h3>You have <span id="balance">{{balance}}</span> AVRA</h3>
   <button id="check" class="btn btn-success disabled" v-on:click="getInfo">Check your balance</button>
  <br><br>
  <h3>Buy Avra</h3>
  <label for="amount">Amount:</label>
  <input type="text" class="form-control"  id="amount" placeholder="e.g., 95" v-model="amount">
  <!--<br><label for="receiver">To Address:</label><input type="text" id="receiver" placeholder="e.g., 0x93e66d9baea28c17d9fc393b53e3fbdd76899dae"></input>-->
  <br><button id="send" class="btn btn-primary" v-on:click="buyToken">Buy Avra</button>
  <br>
  <h3>Transfer Avra</h3>
  <label for="amount1">Amount:</label>
  <input type="text" class="form-control" id="amount1" placeholder="e.g., 95">
  <br><label for="receiver">To Address:</label>
  <input type="text" class="form-control" id="receiver" placeholder="e.g., 0x93e66d9baea28c17d9fc393b53e3fbdd76899dae">
  <br><button id="send1" class="btn btn-primary" onclick="App.transferCoin()">Transfer</button>
  <br>
  <span id="status"></span>
  <br>
  <span class="hint"><strong>Hint:</strong> open the browser developer console to view any errors and warnings.</span>

   </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "token",

  data() {
    return {
      wallet: "",
      name: "",
      id: this.$route.id,
      password: "b052ad71d9fcd26e996e13d076a7eb11827043d5",
      totalSupply: 0,
      crowdsaleAddress: "",
      balance: 0,
      amount: ""
    };
  },
  computed: {
    ...mapGetters({ currentUser: "currentUser" })
  },
  created() {
    this.checkCurrentLogin();
    this.getInfo();
  },
  updated() {
    this.checkCurrentLogin();
    this.getInfo();
  },
  methods: {
    checkCurrentLogin() {
      if (this.currentUser) {
        console.log("current user login = " + JSON.stringify(this.currentUser));
        this.name = this.currentUser.name;
        this.id = this.currentUser.id;
        if (this.wallet == "") {
          this.wallet = this.$route.params.wallet;
        }
        console.log(this.wallet);
      }
    },
    getInfo() {
      let url = "avratoken/getInfo/" + this.wallet._id;
      console.log("url");
      console.log(url);
      this.$http
        .get(url)
        .then(response => {
          console.log(response);
          this.crowdsaleAddress = response.data.address;
          this.totalSupply = response.data.supply;
          this.balance = response.data.balance;
        })
        .catch(error => {
          console.log(error);
        });
    },
    buyToken() {
      console.log("this.wallet");

      console.log(this.wallet.public);
      let param = {
        amount: this.amount,
        wallet: this.wallet.public}
      console.log("param:");
      console.log(param);
      let url = "avratoken/buyToken/";
      console.log("url in buy");
      console.log(url);
      this.$http
        .post(url, param)
        .then(response => {
          console.log(response);
          this.balance = response.data.account;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<template>
 <form class="form-inline my-2 my-lg-0" method="POST" action = "/logout">
<button class="btn btn-outline-warning">Logout</button>
</form>
</template>

<script>
module.exports = {
  name: 'Logout',
  created () {
    delete localStorage.token
    this.$store.dispatch('logout')
    this.$router.push('/')
  }
}
</script>
<style>

</style>
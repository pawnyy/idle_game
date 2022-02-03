<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    setInterval(() => {
      this.$store.commit('earnPoints', {amount: +((this.$store.state.game.cps/10).toFixed(2))})
    }, 100)
  }
}
</script>

<style>
</style>

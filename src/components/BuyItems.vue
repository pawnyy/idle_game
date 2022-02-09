<template>
  <b-table dark :fields="fields" :items="$store.state.game.unicorns" tbody-class="text-center noClick" thead-class="text-center noClick" striped hover @row-clicked="buy">
    <template #cell(img)="data">
      <img :src="data.value" alt="" style="height: 5vh">
    </template>
    <template #head(img)="">&nbsp;</template>
    <template #cell(name)="data">
      {{data.value}}
      <br>
      +{{$store.state.game.unicorns[data.index].cps}} CPS
    </template>

    <template #cell(price)="data">
      {{Math.floor(data.value)}} fart<span v-if="data.value !== 1">s</span>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "BuyItems",
  data() {
    return {
      fields: [
          'img',
          'name',
          'price',
          'amount',
      ],
    }
  },
  methods: {
    buy(unicorn) {
      if (this.$store.state.game.points < unicorn.price) {
        return
      }
      let context = this.$store
      console.log(unicorn)

      context.commit("earnPoints", {amount: -unicorn.price})
      context.commit("addCps", {amount: unicorn.cps})
      let i = context.state.game.unicorns.indexOf(unicorn)
      context.commit('addPrice', {index: i, price: unicorn.price * 1.005})
      context.commit('addUnicorn', {index: i, amount: 1})
    }
  }
}
</script>

<style>
.table td div{
  vertical-align: middle;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.noClick {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>

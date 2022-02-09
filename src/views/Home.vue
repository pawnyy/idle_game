<template>
    <b-container fluid>

    <b-row style="height: 100vh">
      <b-col class="cookieArea">
        <b-row style="height: 20vh">
            <div class="cookieCount text-center text-white"> <span style="opacity: 1">{{Math.floor($store.state.game.points)}} Farts<br>{{$store.state.game.cps}} per second </span></div>

        </b-row>
        <b-row>
          <img :src="img" alt="cookie" class="cookieImg" v-on:click="click($event)" draggable="false">
        </b-row>
        <b-row></b-row>

      </b-col>
      <b-col><b-button @click="cps">cps</b-button></b-col>
      <b-col>
        <BuyItems></BuyItems>
      </b-col>
    </b-row>
      <img @click="click($event)" id="poop" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_grande.png?v=1571606036" style="display:none; width: 3vw;" alt="no">
  </b-container>
</template>

<script>
// @ is an alias to /src
import BuyItems from "../components/BuyItems";

export default {
  name: 'Home',
  components: {
    BuyItems
  },
  data() {
    return {
      img: 'https://www.transparentpng.com/thumb/unicorn/K38WQ1-rainbow-unicorn-clouds-and-stars-shirt-for-sale.png'
    }
  },
  methods: {
    click(event) {
      this.$store.commit('earnPoints', {amount: 1})
      let fart = document.createElement('img')
      fart = document.getElementById('poop').cloneNode(false)
      fart.setAttribute('src', 'https://cdn.shopify.com/s/files/1/1061/1924/products/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_grande.png?v=1571606036')
      fart.setAttribute('class', 'fart')
      fart.style.width = '2vw'

      fart.style.left = 'calc('+event.pageX+'px - 1vw)'
      fart.style.top = 'calc('+event.pageY+'px - 1vw)'
      fart.style.position = 'absolute'
      fart.style.display = 'block'
      fart.style.pointerEvents = 'none'
      fart.setAttribute('draggable', false)
      document.body.appendChild(fart)
      let opacity = 1
      for (let i=0;i<100;i++) {
        setTimeout(()=>{
          fart.style.opacity= opacity
          opacity -= 0.01;
          if (opacity < 0) {
            document.body.removeChild(fart)
          }
        }, i*10)
      }
    },
    cps() {
      this.$store.commit('addCps', {amount: 1})
    }

  }
}
</script>

<style scoped>
.cookieArea {
  background-color: blue;
}

.cookieImg {
  border-radius: 15vw;
  cursor: pointer;
  width: 75%;
  display: block;
  margin: auto;
  align-self: center;
  transition: 500ms;
  position:absolute;
  top:0;
  bottom:0;
  right:0;
  left:0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.cookieCount {
  background-color: grey;
  opacity: 0.7;
  border-radius: 5vw;
  width: 50%;
  margin: auto auto 0;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.fart {
  position: absolute;
}


</style>

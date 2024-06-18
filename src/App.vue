<script setup lang="ts">
  import TheHeader from './components/Header.vue'
  import TheFooter from './components/Footer.vue'
  import Cart from './components/Cart.vue'
  import Shop from './components/Shop.vue'
</script>

<template>
  <div class="main-container">
    <TheHeader class="header b1"/>    
    <Shop class="shop b2"/>
    <Cart class="cart b3"/>  
    <TheFooter class="footer b4"/>
  </div>
</template>

<style scoped lang="scss">
@import './assets/main.scss';

.main-container{
  display: grid;
  grid-template-areas: "header header" "shop cart" "footer footer";
  grid-template-columns: 70%;
  grid-template-rows: 48px auto 48px;
  min-width: 100vh;
}

.header{
  grid-area: header;
}

.shop{
  grid-area: shop;
}

.cart{
  grid-area: cart;
}

.footer{
  grid-area: footer;
}


</style>

<script setup lang="ts">
import { reactive } from 'vue'
import TheHeader from './components/Header.vue'
import TheFooter from './components/Footer.vue'
import CartView from './components/Cart/CartView.vue'
import ShopView from './components/Shop/ShopView.vue'
import data from './data/product'
import type { ProductInterface } from './interfaces/product.interface'

const state = reactive<{
  products : ProductInterface[],
  cart :ProductInterface[]
}>({
  products : data,
  cart : []
})

const addProductInCart = (idProduct:number) :void => {
  const product = state.products.find((product) => product.id === idProduct)
  if(product && !state.cart.find((product) => product.id === idProduct)){
    state.cart.push({...product})
  }
}

const delProductInCart = (idProduct:number) :void =>{ 
    state.cart = state.cart.filter((product) => product.id !== idProduct)
}

</script>

<template>
  <div class="main-container">
    <TheHeader class="header" />
    <ShopView class="shop" v-bind:products="state.products" v-on:add-product-to-cart="addProductInCart"/>
    <CartView class="cart" v-bind:cart="state.cart" v-on:del-product-in-cart="delProductInCart"/>
    <TheFooter class="footer" />
  </div>
</template>

<style scoped lang="scss">
@import './assets/main.scss';

.main-container {
  background-color: var(--gray-2);
  display: grid;
  grid-template-areas: "header header" "shop cart" "footer footer";
  grid-template-columns: 75% 25%;
  grid-template-rows: 48px auto 48px;
  min-height: 100vh;
}

.header {
  grid-area: header;
}

.shop {
  grid-area: shop;
}

.cart {
  grid-area: cart;
}

.footer {
  grid-area: footer;
}
</style>

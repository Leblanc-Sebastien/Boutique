<script setup lang="ts">
import { reactive } from 'vue'
import TheHeader from './components/Header.vue'
import TheFooter from './components/Footer.vue'
import CartView from './components/Cart/CartView.vue'
import ShopView from './components/Shop/ShopView.vue'
import data from './data/product'
import type { ProductInterface } from './interfaces/product.interface'


const products = reactive<ProductInterface[]>(data)


</script>

<template>
  <div class="main-container">
    <TheHeader class="header" />
    <ShopView class="shop" v-bind:products="products"/>
    <CartView class="cart" />
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

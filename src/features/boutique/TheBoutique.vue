<script setup lang="ts">
import { computed, reactive } from 'vue'
import CartView from './components/Cart/CartView.vue'
import ShopView from './components/Shop/ShopView.vue'
import data from '../../data/product'
import type { ProductInterface, ProductCartInterface, FiltersInterface, FilterUpdate } from '@/interfaces/Index'
import { DEFAULT_FILTERS } from '../../features/boutique/data/filters'

const state = reactive<{
  products: ProductInterface[]
  cart: ProductCartInterface[]
  filters: FiltersInterface
}>({
  products: data,
  cart: [],
  filters: { ...DEFAULT_FILTERS }
})

const filteredProducts = computed(() => {
  return state.products.filter((product) => {
    if (
      product.title.toLocaleLowerCase().startsWith(state.filters.search.toLocaleLowerCase()) &&
      product.price >= state.filters.priceRange[0] &&
      product.price <= state.filters.priceRange[1] &&
      (product.category === state.filters.category || state.filters.category === 'all')
    ) {
      return true
    }
    else {
      return false
    }
  })
})

const addProductInCart = (idProduct: number): void => {
  const product = state.products.find((product) => product.id === idProduct)
  if (product) {
    const productInCart = state.cart.find((product) => product.id === idProduct)
    if (productInCart) {
      productInCart.quantity++
    } else {
      state.cart.push({ ...product, quantity: 1 })
    }
  }
}

const delProductInCart = (idProduct: number): void => {
  const productInCart = state.cart.find((product) => product.id === idProduct)
  if (productInCart) {
    if (productInCart.quantity > 1) {
      productInCart.quantity--
    } else {
      state.cart = state.cart.filter((product) => product.id !== idProduct)
    }
  }
}

const updateFilter = (filterUpdate: FilterUpdate) => {
  if (filterUpdate.search !== undefined) {
    state.filters.search = filterUpdate.search
  } else if (filterUpdate.priceRange) {
    state.filters.priceRange = filterUpdate.priceRange
  } else if (filterUpdate.category) {
    state.filters.category = filterUpdate.category
  } else {
    state.filters = { ...DEFAULT_FILTERS }
  }
}

</script>

<template>
  <div class="boutique-container" 
      :class="{ 'grid-empty': state.cart.length === 0 }">
    <ShopView 
      class="shop" 
      v-bind:products="filteredProducts" 
      v-bind:filters="state.filters"
      v-on:updateFilter="updateFilter" 
      v-on:add-product-to-cart="addProductInCart" />
    <CartView 
      class="cart" 
      v-bind:cart="state.cart" 
      v-on:del-product-in-cart="delProductInCart" />
  </div>
</template>

<style scoped lang="scss">
.boutique-container {
  display: grid;
  grid-template-columns: 75% 25%;
}

.grid-empty {
  grid-template-columns: 100%;
}
</style>

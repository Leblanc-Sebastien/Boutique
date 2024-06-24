<script setup lang="ts">
import { computed } from 'vue'
import CartProductList from './CartProductList.vue'
import type { ProductCartInterface } from '@/interfaces/Index'

const props = defineProps<{
  cart: ProductCartInterface[]
}>()

const emit = defineEmits<{
  (e: 'delProductInCart', productId: number): void
}>()

const totalPrice = computed(() =>
  props.cart.reduce((acc, product) => {
    return acc + product.price * product.quantity
  }, 0)
)
</script>

<template>
  <div class="p-10 card-view-container">
    <h1 class="m-b-10">Votre panier :</h1>
    <CartProductList
      v-bind:cart="cart"
      v-on:del-product-in-cart="emit('delProductInCart', $event)"
    />
    <div class="total-container d-flex flex-row align-item-center">
      <span>Total : {{ totalPrice }} €</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-view-container {
  border-left: 1px solid var(--gray-3);
  background-color: var(--gray-1);

  h1 {
    font-size: 1.3em;
    margin-bottom: 20px;
  }

  .total-container {
    background-color: #fff;
    border-radius: 4px;
    justify-content: space-between;
    padding: 10px 10px;
    background-color: var(--gray-2);
    border: 1px solid var(--gray-3);
  }
}
</style>

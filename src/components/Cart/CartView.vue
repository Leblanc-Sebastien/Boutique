<script setup lang="ts">
import { computed } from 'vue'
import CartProductList from '@/features/boutique/components/Cart/CartProductList.vue'
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
  <div v-if="totalPrice > 0" class="p-20 card-view-container d-flex flex-column">
    <div>
      <h1 class="m-b-10">Votre panier :</h1>
      <CartProductList
        v-bind:cart="cart"
        v-on:del-product-in-cart="emit('delProductInCart', $event)"
      />
    </div>
    <div>
      <button>Commander ({{ totalPrice }}) €</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-view-container {
  border-left: 1px solid var(--gray-3);
  background-color: var(--gray-1);
  justify-content: space-between;

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

  button {
    background-color: var(--success-2);
    width: 100%;
    height: 45px;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    border: none;
    font-size: 0.8em;
    transition: 0.2s;
    font-size: 1em;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--success-1);
  }
}
</style>

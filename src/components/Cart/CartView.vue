<script setup lang="ts">
import CartProductList from './CartProductList.vue'
import type {ProductCartInterface} from '@/interfaces/Index'

defineProps<{
    cart: ProductCartInterface[]
}>()

const emit = defineEmits<{
    (e: 'delProductInCart', productId: number): void
}>()

</script>

<template>
    <div class="p-10 card-view-container">
        <h1 class="m-b-10">Votre panier :</h1>
        <CartProductList v-bind:cart="cart" v-on:del-product-in-cart="emit('delProductInCart', $event)" />
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
}
</style>
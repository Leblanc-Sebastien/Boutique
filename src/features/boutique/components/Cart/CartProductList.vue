<script setup lang="ts">
import CartProduct from './CartProduct.vue'
import type {ProductCartInterface} from '@/interfaces/Index'

defineProps<{
    cart: ProductCartInterface[]
}>()

const emit = defineEmits<{
    (e: 'delProductInCart', productId: number): void
}>()

</script>

<template>
    <div class="d-flex flex-column">
        <CartProduct v-for="product of cart" v-bind:key="product.id" v-bind:product="product"
            v-on:del-product-in-cart="emit('delProductInCart', $event)" />
    </div>
</template>

<style lang="scss" scoped></style>
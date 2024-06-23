<script setup lang="ts">
import ShopProduct from './ShopProduct.vue'
import type { ProductInterface } from '../../interfaces/product.interface'

defineProps<{
    products: ProductInterface[]
}>()

const emit = defineEmits<{
    (e: 'addProductToCart', productId: number): void
}>()

</script>

<template>
    <div class="grid-container p-20">
        <ShopProduct v-for="product of products" v-bind:key="product.id" v-bind:product="product" v-on:add-product-to-cart="emit('addProductToCart', $event)"/>
    </div>
</template>

<style lang="scss" scoped>
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 410px;
    gap: 20px;
}
</style>
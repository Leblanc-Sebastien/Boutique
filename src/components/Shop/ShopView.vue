<script setup lang="ts">
import type { ProductInterface } from '@/interfaces/product.interface';
import ShopProductList from './ShopProductList.vue'

defineProps<{
    products: ProductInterface[]
}>()

const emit = defineEmits<{
    (e: 'addProductToCart', productId: number): void
}>()

</script>

<template>
    <div>
        <ShopProductList v-bind:products="products" v-on:add-product-to-cart="emit('addProductToCart', $event)"/>
    </div>
</template>

<style lang="scss" scoped></style>
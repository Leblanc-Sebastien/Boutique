<script setup lang="ts">
import ShopProduct from './ShopProduct.vue'
</script>

<template>
    <div class="grid-container p-20">
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
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
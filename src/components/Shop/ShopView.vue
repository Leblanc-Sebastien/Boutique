<script setup lang="ts">
import type { ProductInterface } from '@/interfaces/Product.interface';
import ShopProductList from './ShopProductList.vue'
import ShopFilters from '../ShopFilters/ShopFilters.vue'
import type { FilterUpdate, FiltersInterface } from '@/interfaces/Filters.interface';


defineProps<{
    products: ProductInterface[],
    filters: FiltersInterface
}>()

const emit = defineEmits<{
    (e: 'addProductToCart', productId: number): void
    (e: 'updateFilter', filterUpdate: FilterUpdate): void
}>()

</script>

<template>
    <div class="d-flex flex-row">
        <ShopFilters 
            class="shop-filters" 
            v-bind:filters="filters"
            v-bind:nb-of-products="products.length"
            v-on:update-filter="emit('updateFilter', $event)"
        />
        <ShopProductList 
            class="flex-fill" 
            v-bind:products="products"
            v-on:add-product-to-cart="emit('addProductToCart', $event)" 
        />
    </div>
</template>

<style lang="scss" scoped>
.shop-filters {
    flex: 0 0 200px;
}
</style>
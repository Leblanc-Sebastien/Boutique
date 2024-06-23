<script setup lang="ts">
import type { ProductInterface } from '../../interfaces/product.interface'

defineProps<{
    product: ProductInterface
}>()

const emit = defineEmits<{
    (e: 'addProductToCart', productId: number): void
}>()

</script>

<template>
    <div class="product">
        <div class="product-image" v-bind:style="{ backgroundImage: `url(${product.image})` }"></div>
        <div class="p-10">
            <h2>{{ product.title }}</h2>
            <p>{{ product.description }}</p>
            <div class="product-footer d-flex flex-row align-item-center">
                <strong>Prix : {{ product.price }}€</strong>
                <button v-on:click="emit('addProductToCart', product.id)">Ajouter au panier</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.product {
    background-color: #fff;
    border: 1px solid var(var(--gray-2));
    border-radius: 4px;

    h2 {
        font-size: 1.2em;
    }

    p {
        font-size: 0.9em;
    }

    &-image {
        background-size: cover;
        background-position: center;
        height: 250px;


    }

    &-footer {
        justify-content: space-between;

        button {
            background-color: var(--primary-1);
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 5px;
            padding-bottom: 5px;
            color: #fff;
            border-radius: 4px;
            border: 1px solid var(--primary-1);
            transition: 0.2s;
            cursor: pointer;
        }

        button:hover {
            background-color: var(--primary-2);
        }
    }
}
</style>
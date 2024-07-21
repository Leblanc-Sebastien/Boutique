<script setup lang="ts">
import type { ProductCartInterface } from '@/interfaces/Index'

defineProps<{
    product: ProductCartInterface
}>()

const emit = defineEmits<{
    (e: 'delProductInCart', productId: string): void
}>()

</script>

<template>
    <div class="m-b-10 d-flex flex-row align-item-center cart">
        <div class="d-flex align-item-center cart-product-name">
            <h3> {{ product.title }}</h3>
            <span>x {{ product.quantity }}</span>
        </div>
        <div class="product d-flex flex-row align-item-center">
            <span>Prix : {{ product.price }} €</span>
            <button v-on:click="emit('delProductInCart', product._id)">Supprimer</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cart {
    background-color: #fff;
    border-radius: 4px;
    justify-content: space-between;
    padding: 10px 10px;
    background-color: var(--gray-2);
    border: 1px solid var(--gray-3);

    .cart-product-name {
        gap: 10px
    }

    h3 {
        font-weight: 700;
        font-size: 1em;
    }

    .product {
        gap: 10px;

        span {
            font-size: 1em;
        }
    }

    button {
        background-color: var(--danger-2);
        color: #fff;
        padding: 5px 10px;
        border-radius: 4px;
        border: none;
        font-size: 0.8em;
        transition: 0.2s;
        cursor: pointer;
    }

    button:hover {
        background-color: var(--danger-1);
    }
}
</style>
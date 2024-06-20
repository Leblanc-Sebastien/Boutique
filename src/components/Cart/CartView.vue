<script setup lang="ts">
    import CartProductList from './CartProductList.vue'
</script>

<template>
    <div class="p-10 card-view-container">
        <h1 class="m-b-10">Votre panier :</h1>
        <CartProductList/>
    </div>
</template>

<style lang="scss" scoped>
    .card-view-container{
        h1{
            font-size: 1.3em;
            margin-bottom: 20px;
        }
    }
</style>
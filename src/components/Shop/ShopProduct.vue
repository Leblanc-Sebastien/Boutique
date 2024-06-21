<script setup lang="ts">

</script>

<template>
    <div class="product">
        <div class="product-image"></div>
        <div class="p-10">
            <h2>Alienware 17 pouces</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium corrupti saepe quasi officiis
                labore?</p>
            <div class="product-footer d-flex flex-row align-item-center">
                <strong>Prix : 2100€</strong>
                <button>Ajouter au panier</button>
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
    p{
        font-size: 0.9em;
    }

    &-image {
        background-image: url(src/assets/images/alienware.PNG);
        background-size: cover;
        background-position: center;
        height: 250px;


    }

    &-footer {
        justify-content: space-between;

        button{
            background-color: var(--primary-1);
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 5px;
            padding-bottom: 5px;
            color: #fff;
            border-radius: 4px;
            border: 1px solid var(--primary-1);
            transition: 0.2s;
            cursor:pointer;
        }
        button:hover{
            background-color: var(--primary-2);
        }
    }
}
</style>
<script setup lang="ts">

</script>

<template>
    <div class="m-b-10 d-flex flex-row align-item-center cart">
        <h3>AlienWare 13 pouces</h3>
        <div class="product d-flex flex-row align-item-center">
            <span>Prix : 1500 €</span>
            <button>Supprimer</button> 
        </div>        
    </div>
</template>

<style lang="scss" scoped>
    .cart{    
        background-color: #fff;  
        border-radius: 4px;
        justify-content: space-between;
        padding: 10px 10px;
        background-color: var(--gray-2);
        border: 1px solid var(--gray-3);

        h3{
            font-weight: 700;
            font-size: 1em;
        }
        
        .product{
            gap: 10px;

            span{
                font-size: 1em;
            }
        }

        button {
            background-color: var(--danger-1);
            color: #fff;
            padding: 5px 10px;
            border-radius: 4px;
            border: none;
            font-size: 0.8em;
        }

        button:hover{
            background-color: var(--danger-2);
        }
    }
</style>
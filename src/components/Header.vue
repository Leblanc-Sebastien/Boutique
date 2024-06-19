<script setup lang="ts">

</script>

<template>
    <header class="d-flex flex-row align-item-center">
        <ul class="d-flex flex-row align-item-center">
            <li><a href="#"><img src="../../src/assets/logo.svg" alt="logo Vue"></a></li>
            <li>Dyma</li>
        </ul>
        <ul class="d-flex flex-row align-item-center">
            <li><a href="#">Inscription</a></li>
            <li><a href="#">Connexion</a></li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
    header{
        background-color: var(--primary-2);
        color: var(--text-primary-color);
        padding-left: 20px;
        padding-right: 20px;
        justify-content: space-around;
        a{
            color: var(--text-primary-color);
            img{
                width: 20px;
            }
        }

        ul{
            gap: 20px;
        }
    }
</style>
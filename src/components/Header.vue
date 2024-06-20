<script setup lang="ts">

</script>

<template>
    <header class="d-flex flex-row align-item-center">
        <ul class="d-flex flex-row align-item-center">
            <li class="d-flex flex-row align-item-center"><a href="#"><img src="../../src/assets/logo.svg" alt="logo Vue"><span>Dyma</span></a></li>
            <li><a href="#">Boutique</a></li>
            <li><a href="#">Admin</a></li>
        </ul>
        <ul class="d-flex flex-row align-item-center sign-link">
            <li><a href="#">Inscription</a></li>
            <li><a href="#">Connexion</a></li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: var(--primary-2);
    color: var(--text-primary-color);
    padding-left: 20px;
    padding-right: 20px;
    justify-content:space-around;

    a {
        color: var(--text-primary-color);

        span{
            font-weight: 700;
        }

        img {
            width: 20px;
        }
    }

    ul {
        gap: 10px;
    }
}
</style>
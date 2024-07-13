<script setup lang="ts">
import TheHeader from './components/Header.vue'
import TheFooter from './components/Footer.vue'
import TheBoutique from './features/boutique/TheBoutique.vue';
</script>

<template>
  <div class="main-container">
    <TheHeader class="header" />
    <div class="app-content">
      <Component v-bind:is="TheBoutique" />
    </div>
    <TheFooter class="footer" />
  </div>
</template>

<style scoped lang="scss">
@import './assets/main.scss';

.main-container {
  background-color: var(--gray-2);
  display: grid;
  grid-template-areas: 'header' 'app-content' 'footer';
  grid-template-columns: 100%;
  grid-template-rows: 48px auto 48px;
  min-height: 100vh;
}

.header {
  grid-area: header;
}

.app-content {
  grid-area: app-content;
}

.footer {
  grid-area: footer;
}
</style>

<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import TheBoutique from './features/boutique/TheBoutique.vue';
import TheAdmin from './features/admin/TheAdmin.vue';
import { reactive, type Component as C } from 'vue';
import type { Page } from './interfaces/Types'

const state = reactive<{
  page: Page
}>({
  page: 'TheBoutique'
})

const pages: { [s: string]: C } = {
  TheBoutique: TheBoutique,
  TheAdmin: TheAdmin
}
const navigate = (page: Page): void => {
  state.page = page
}

</script>

<template>
  <div class="main-container">
    <TheHeader class="header" v-on:navigate="navigate" v-bind:page="state.page" />
    <div class="app-content">
      <Component v-bind:is="pages[state.page]" />
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

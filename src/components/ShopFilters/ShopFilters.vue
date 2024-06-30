<script setup lang="ts">
import type { FilterUpdate, FiltersInterface } from '@/interfaces/Filters.interface';

const props = defineProps<{
  filters: FiltersInterface
  nbOfProducts: number
}>()

const emit = defineEmits<{
  (e: 'updateFilter', filterUpdate: FilterUpdate): void
}>()
</script>

<template>
  <div class="container-shop-filters d-flex flex-column p-10">
    <h2>Filtrer les produits:</h2>
    <div class="container-shop-filters-search d-flex flex-column">
      <h3>Par nom :</h3>
      <input type="text" v-bind:value="filters.search"
        v-on:input="emit('updateFilter', { search: ($event.target as HTMLInputElement).value })">
    </div>
    <div class="container-shop-filters-radio d-flex flex-column ">
      <h3>Par prix :</h3>
      <section>
        <input type="radio" id="filter1" name="priceFilter" checked
          v-on:input="emit('updateFilter', { priceRange: [0, 10000] })">
        <label for="filter1">Tout les prix</label>
      </section>
      <section>
        <input type="radio" id="filter2" name="priceFilter"
          v-on:input="emit('updateFilter', { priceRange: [0, 1500] })">
        <label for="filter2">0 - 1500 euros</label>
      </section>
      <section>
        <input type="radio" id="filter3" name="priceFilter"
          v-on:input="emit('updateFilter', { priceRange: [1500, 2500] })">
        <label for="filter3">1500 - 2500 euros</label>
      </section>
      <section>
        <input type="radio" id="filter4" name="priceFilter"
          v-on:input="emit('updateFilter', { priceRange: [2500, 10000] })">
        <label for="filter4">plus de 2500 euros</label>
      </section>
    </div>
    <div class="container-shop-filters-category d-flex flex-column">
      <h3>Par catégorie :</h3>
      <section>
        <input type="radio" id="category1" name="category-filter" checked
          v-on:input="emit('updateFilter', { category: 'all' })">
        <label for="category1">Toutes les catégories</label>
      </section>
      <section>
        <input type="radio" id="category2" name="category-filter"
          v-on:input="emit('updateFilter', { category: 'streaming' })">
        <label for="category2">Streaming</label>
      </section>
      <section>
        <input type="radio" id="category3" name="category-filter"
          v-on:input="emit('updateFilter', { category: 'desktop' })">
        <label for="category3">Desktop</label>
      </section>
      <section>
        <input type="radio" id="category4" name="category-filter"
          v-on:input="emit('updateFilter', { category: 'gamer' })">
        <label for="category4">Gaming</label>
      </section>
    </div>
    <span>Nombre de résultat : {{ props.nbOfProducts }}</span>
    <button v-on:click="emit('updateFilter', {})">Reset
      filtres</button>
  </div>


</template>

<style lang="scss" scoped>
.container-shop-filters {
  gap: 20px;

  h2 {
    font-size: 1.3em;
    text-decoration: underline;
  }

  .container-shop-filters-search {
    gap: 10px;
  }

  .container-shop-filters-radio {
    gap: 10px;
  }

  .container-shop-filters-category {
    gap: 10px;
  }
}
</style>
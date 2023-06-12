<template>
  <navbar_product />
  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import navbar_product from './components/navbar_product.vue';

// useProductStore
import { useProductStore } from './store/product'
const product_store = useProductStore()

//useCartStore
import { useCartStore } from './store/cart';
const cart_store = useCartStore()

onMounted(() => product_store.fetch_products())
onMounted(() => cart_store.loadFromLocalStorage())

</script>

<style lang="scss" scoped>

</style>
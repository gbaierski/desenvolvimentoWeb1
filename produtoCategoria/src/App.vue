<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink :to="{name: 'home'}" class="categoriaMenu">Home</RouterLink>
    <RouterLink :to="{name: 'category'}" class="categoriaMenu">Categoria</RouterLink>
    <RouterLink :to="{name: 'product'}" class="categoriaMenu">Produtos</RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
@import '@/assets/base.css';

#app {
  height: 100vh;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 140%;
  height: 100px;
  background: hsla(272, 26%, 27%, 1);
  background: linear-gradient(90deg, hsla(272, 26%, 27%, 1) 0%, hsla(188, 35%, 45%, 1) 50%, hsla(112, 42%, 64%, 1) 100%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

main {
  padding: 20px;
  margin-top: 20px;
}

.categoriaMenu {
  color: white;
  text-decoration: none;
  margin-right: 20px;
  font-family: sans-serif;
  font-weight: bold;
  transition: all 0.3s;
}

.categoriaMenu:hover {
  transform: translateY(-3px);
}
</style>

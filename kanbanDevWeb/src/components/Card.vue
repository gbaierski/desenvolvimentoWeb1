<script>
export default {
  props: {
    card: {
      type: Object,
    },
    containerId: {
      type: Number,
    },
  },
  emit: [
    'retornar',
    'prosseguir'
  ]
};
</script>
<template>
  <div class="card">
    <div class="tituloCard">{{ card.nome }}</div>
    <div class="descCard">{{ card.desc }}</div>
    <div class="tagsCard">
      <div class="tag" v-for="tag in card.tags">{{ tag }}</div>
    </div>
    <div class="containerBotoesMover">
      <button class="botaoMover" @click="$emit('retornar', card.id, containerId)">❮</button>
      <button class="botaoMover" @click="$emit('prosseguir', card.id, containerId)">❯</button>
    </div>
  </div>
</template>

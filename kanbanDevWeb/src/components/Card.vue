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
      <div v-if="containerId == 0">
        <button class="botaoMover" @click="$emit('prosseguir', card.id, containerId)">❯</button>
      </div>
      <div v-else-if="containerId == 3">
          <button class="botaoMover" @click="$emit('retornar', card.id, containerId)">❮</button>
      </div>
      <div v-else>
        <button class="botaoMover" @click="$emit('retornar', card.id, containerId)">❮</button>
        <button class="botaoMover" @click="$emit('prosseguir', card.id, containerId)">❯</button>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>

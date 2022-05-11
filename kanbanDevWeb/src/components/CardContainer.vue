<script>
import Card from "./Card.vue";
export default {
    components: { Card },
    props: {
        container: {
            type: Object,
        },
    },
    methods: {
        retornar(id, containerId) {
            this.$emit('retornar',id, containerId);
        },
        prosseguir(id, containerId) {
            this.$emit('prosseguir',id, containerId);
        }
    }
}
</script>

<template>
    <div class="cardsContainer">
        <div class="tituloCardContainer">{{container.titulo}}</div>
        <div class="cards">
            <Card v-for="card in container.cards" :key="card.id" :card="card" :containerId="container.id" @retornar = "retornar"  @prosseguir = "prosseguir"/>
        </div>
    </div>
</template>
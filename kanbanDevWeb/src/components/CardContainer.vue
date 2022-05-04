<script>
import Card from "./Card.vue";
export default {
    components: { Card },
    props: {
        container: {
            type: Object,
        },
    },
}
</script>

<template>
    <div class="cardsContainer">
        <div class="tituloCardContainer">{{container.titulo}}</div>
        <div class="cards">
            <Card v-for="card in container.cards" :key="card.id" :card="card"/>
        </div>
    </div>
</template>
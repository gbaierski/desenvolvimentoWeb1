<script>
export default {
    data() {
        return {
            cards : [
            {id: 1, nome: "Card 1", desc: "Descrição Card 1. Teste descrição.", tag1: "Importante", tag2: "Hotfix", tag3: "Versão 1.0"},
            {id: 2, nome: "Card 2", desc: "Descrição Card 2. Teste descrição.", tag1: "Médio", tag2: "Improvement", tag3: "Versão 1.5"},
            {id: 3, nome: "Card 3", desc: "Descrição Card 3. Teste descrição.", tag1: "Médio", tag2: "Hotfix", tag3: "Versão 1.5"},
            {id: 4, nome: "Card 4", desc: "Descrição Card 4. Teste descrição.", tag1: "Importante", tag2: "Improvement", tag3: "Versão 1.0"},
            {id: 5, nome: "Card 5", desc: "Descrição Card 5. Teste descrição.", tag1: "Baixo", tag2: "Hotfix", tag3: "Versão 1.2"},
            {id: 6, nome: "Card 6", desc: "Descrição Card 6. Teste descrição.", tag1: "Baixo", tag2: "Improvement", tag3: "Versão 1.0"},
            ],
        }

    }
}

</script>
<template>
<div class="cardsContainer">
<div class="tituloCardContainer">Backlog</div>
<div class="cards">
    <div class="card" v-for="card in cards" :key="card.id">
        <div class="tituloCard">{{ card.nome }}</div>
        <div class="descCard">{{ card.desc }}</div>
        <div class="tagsCard">
            <div class="tag tag1">{{ card.tag1 }}</div>
            <div class="tag tag2">{{ card.tag2 }}</div>
            <div class="tag tag3">{{ card.tag3 }}</div>
        </div>
    </div>
</div>
</div>
</template>
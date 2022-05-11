<script>
import CardContainer from './components/CardContainer.vue';

export default {
    components: {
        CardContainer,
    },
    methods: {
        retornar(id, containerId) {
            alert("ret: " + id + containerId);
        },
        prosseguir(id, containerId) {
            alert("pross: " + id + containerId);
        }
    },
    data() {
        return {
            containers : [
                {
                    titulo: "Backlog" ,
                    id: 0,
                    cards: [
                        { id: 1, nome: "Card 1", desc: "Descrição Card 1. Teste descrição.", tags: ["Importante", "Hotfix", "Versão 1.0"] },
                        { id: 2, nome: "Card 2", desc: "Descrição Card 2. Teste descrição.", tags: ["Médio", "Improvement", "Versão 1.5"] },
                        { id: 3, nome: "Card 3", desc: "Descrição Card 3. Teste descrição.", tags: ["Médio", "Hotfix", "Versão 1.5"] },
                    ],
                },
                {
                    titulo: "To Do", 
                    id: 1,
                    cards: [
                        { id: 4, nome: "Card 4", desc: "Descrição Card 4. Teste descrição.", tags: ["Importante", "Improvement", "Versão 1.0"] },
                        { id: 5, nome: "Card 5", desc: "Descrição Card 5. Teste descrição.", tags: ["Baixo", "Hotfix", "Versão 1.2"] },
                    ],
                },
                {
                    titulo: "Doing",
                    id: 2,
                    cards: [
                        { id: 6, nome: "Card 6", desc: "Descrição Card 6. Teste descrição.", tags: ["Baixo", "Improvement", "Versão 1.0"] },
                    ],
                },
                {
                    titulo: "Done",
                    id: 3,
                    cards: [ ],
                },
            ],
        }
    }
}

</script>

<template>
    <link rel="stylesheet" href="../src/assets/base.css">
    <section id="kanbanContainer">
        <h1>
            <div id="bordaEsq" class="bordaTitulo"></div> 
            <div id="bordaDir" class="bordaTitulo"></div> 
            Zenflow
        </h1>
        <div id="kanban">
            <CardContainer v-for="container in containers" :key="container.containerId" :container="container" @retornar = "retornar"  @prosseguir = "prosseguir"/>
        </div>
    </section>
</template>

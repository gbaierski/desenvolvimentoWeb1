<script>
import CardContainer from './components/CardContainer.vue';

export default {
    components: {
        CardContainer,
    },
    data() {
        return {
            containers : [
                {containerId: "backlog", titulo: "Backlog" ,
                    cards: [{
                        id: 1, nome: "Card 1", desc: "Descrição Card 1. Teste descrição.", tags: ["Importante", "Hotfix", "Versão 1.0"],
                        id: 2, nome: "Card 2", desc: "Descrição Card 2. Teste descrição.", tags: ["Médio", "Improvement", "Versão 1.5"],
                        id: 3, nome: "Card 3", desc: "Descrição Card 3. Teste descrição.", tags: ["Médio", "Hotfix", "Versão 1.5"],
                }],
                },
                {containerId: "todo", titulo: "To Do", 
                    cards: [{
                        id: 4, nome: "Card 4", desc: "Descrição Card 4. Teste descrição.", tags: ["Importante", "Improvement", "Versão 1.0"],
                        id: 5, nome: "Card 5", desc: "Descrição Card 5. Teste descrição.", tags: ["Baixo", "Hotfix", "Versão 1.2"],
                }],                
                },
                {containerId: "doing", titulo: "Doing",
                    cards: [{
                        id: 6, nome: "Card 6", desc: "Descrição Card 6. Teste descrição.", tags: ["Baixo", "Improvement", "Versão 1.0"],
                }],                
                },
                {containerId: "done", titulo: "Done",
                    cards: [{

                }],                
                },
            ],
        }

    }
}

</script>

<template>
    <section id="kanbanContainer">
        <h1>
            <div id="bordaEsq" class="bordaTitulo"></div> 
            <div id="bordaDir" class="bordaTitulo"></div> 
            Kanban DevWeb
        </h1>
        <div id="kanban">
            <CardContainer v-for="container in containers" :key="container.containerId" :container="container"/>
        </div>
    </section>
</template>

<style>
body {
    margin: 0;
    background: linear-gradient(90deg, hsla(334, 34%, 58%, 1) 0%, hsla(191, 63%, 61%, 1) 100%);
    color: white;
    font-family: 'Muli',sans-serif;
}

h1 {
    height: 35px;
    font-size: 180%;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
    background-color: rgb(46, 46, 46);
    padding: 20px 50px 10px 50px;
    transform: translateY(25px);
}

.bordaTitulo {
    width: 30px;
    height: 50px;
    position: absolute;
    background-color:rgb(46, 46, 46);
}

#bordaEsq {
    transform: translateX(-95px);
    padding-right: 20px; 
    border-radius: 10px 0px 0 0;
}

#bordaDir {
    transform: translateX(+270px);
    padding-left: 20px; 
    border-radius: 0px 10px 0 0;
}

#kanbanContainer {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#kanban {
    width: 90%;
    height: 600px;
    background-color: rgb(46, 46, 46);
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    box-shadow: rgba(184, 111, 143, 0.67) 5px 5px, rgba(152, 73, 107, 0.431) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px;
}

.cardsContainer {
    width: 23%;
    height: 90%;
    border-radius: 5px;
    background: transparent;
    border: solid 1px hsla(334, 34%, 58%, 1);
    overflow:auto;
}

.cardsContainer:nth-child(odd) {
    border: solid 1px hsla(191, 63%, 61%, 1);
}

.tituloCardContainer {
    font-size: 140%;
    padding: 2%;
    text-align: center;
    height: 5%;
}

.cards {
    width: 100%;
    height: 93%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding-bottom: 5%;
}

.card {
    width: 90%;
    height: 20%;
    margin-top: 5%;
    margin-left: 5%;
    background-color: white;
    color: black;
    text-align: center;
    border-radius: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.tituloCard {
    font-weight: bold;
    font-size: 110%;
    margin-top: 2%;
}

.descCard {
    font-size: 80%;
    margin-top: 5%;
}

.tagsCard {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
}

.tag {
    font-size: 60%;
    padding: 3px;
    color: white;
    font-weight: bold;
    margin-left: 2%;
    width: 25%;
    border-radius: 5px;
}
.tag:nth-child(1) {
    background: hsla(26, 89%, 48%, 1);
    background: linear-gradient(90deg, rgb(148, 95, 118) 0%, rgb(81, 136, 148) 100%);
}

.tag:nth-child(2) {
    background: hsla(136, 100%, 54%, 1);
    background: linear-gradient(90deg, rgb(96, 158, 112) 0%, rgb(26, 129, 131) 100%);
}

.tag:nth-child(3) {
    background: hsla(201, 100%, 54%, 1);
    background: linear-gradient(90deg, rgb(81, 115, 133) 0%, rgb(49, 72, 97) 100%);
}

  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent
}
 
/* Handle */
.cardsContainer:nth-child(odd)::-webkit-scrollbar-thumb {
    background:  linear-gradient(0deg, hsla(334, 34%, 58%, 1) 20%, hsla(191, 63%, 61%, 1) 100%);
    border-radius: 5px;
}

/* Handle */
.cardsContainer:nth-child(even)::-webkit-scrollbar-thumb {
    background:  linear-gradient(0deg, hsla(191, 63%, 61%, 1) 20%, hsla(334, 34%, 58%, 1) 100%);
    border-radius: 5px;
}

</style>

<script setup>
</script>

<template>
    <section id="kanbanContainer">
        <div id="kanban">
            <div class="cardsContainer">
                <div class="tituloCardContainer">Backlog</div>
                <div class="cards">
                    <div class="card">
                        <div class="tituloCard">Titulo 1</div>
                        <div class="descCard">Descrição titulo 1. Teste descrição 1.</div>
                        <div class="tagsCard">
                            <div class="tag tag1">Importante</div>
                            <div class="tag tag2">Hotfix</div>
                            <div class="tag tag3">Versão 1</div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="tituloCard">Titulo 2</div>
                        <div class="descCard">Descrição titulo 2. Teste descrição 2.</div>
                        <div class="tagsCard">
                            <div class="tag tag1">Médio</div>
                            <div class="tag tag2">Improvement</div>
                            <div class="tag tag3">Versão 1.2</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cardsContainer">
                <div class="tituloCardContainer">To Do</div>
                
            </div>
            <div class="cardsContainer">
                <div class="tituloCardContainer">Doing</div>
            </div>
            <div class="cardsContainer">
                <div class="tituloCardContainer">Done</div>
            </div>
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

  #kanbanContainer {
      width: 100vw;
      height: 100vh;
      display: flex;
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
  }

  .cardsContainer {
      width: 23%;
      height: 90%;
      border-radius: 5px;
      background: transparent;
      border: solid 1px hsla(334, 34%, 58%, 1);
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
      width: 18%;
      border-radius: 5px;
  }
  .tag1 {
      background: hsla(26, 89%, 48%, 1);
      background: linear-gradient(90deg, rgb(148, 95, 118) 0%, rgb(81, 136, 148) 100%);
  }

  .tag2 {
      background: hsla(136, 100%, 54%, 1);
      background: linear-gradient(90deg, rgb(96, 158, 112) 0%, rgb(26, 129, 131) 100%);
  }

  .tag3 {
      background: hsla(201, 100%, 54%, 1);
      background: linear-gradient(90deg, rgb(81, 115, 133) 0%, rgb(49, 72, 97) 100%);
  }
</style>

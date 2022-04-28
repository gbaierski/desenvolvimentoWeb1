<script setup>
import CardContainer from './components/CardContainer.vue';
</script>

<template>
    <section id="kanbanContainer">
        <h1>Kanban DevWeb</h1>
        <div id="kanban">
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
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
    font-size: 200%;
    font-weight: bold;
    text-align: center;
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

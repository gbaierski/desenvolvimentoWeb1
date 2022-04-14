<script setup></script>

<template>
  <header>
    <nav>
      <ul>
        <li>HOME</li>
        <li>SOBRE</li>
        <li>LOJA</li>
      </ul>
      <ul>
        <li>LOGIN</li>
      </ul>
    </nav>
  </header>
  <main class="principal">
    <section class="mainContent">
      <div class="content big">Content Big 1</div>
      <div class="content big">Content Big 2</div>
      <div class="content big">Content Big 3</div>
      <div class="content big">Content Big 4</div>
    </section>
    <section class="mainContent">
      <div class="content small">Content Small 1</div>
      <div class="content small">Content Small 2</div>
      <div class="content small">Content Small 3</div>
      <div class="content small">Content Small 4</div>
      <div class="content small">Content Small 5</div>
      <div class="content small">Content Small 6</div>
      <div class="content small">Content Small 7</div>
      <div class="content small">Content Small 8</div>
    </section>
    <section class="mainContent">
      <div class="content extraBig">Content ExtraBig 1</div>
      <div class="content extraBig">Content ExtraBig 2</div>
    </section>
    <section class="mainContent">
      <div class="content superExtraBig">Content SuperExtraBig</div>
    </section>
  </main>
  <footer>
    <div>Gustavo J. Baierski</div>
    <div>2022</div>
  </footer>
</template>

<style lang="css">
body,
header {
  margin: 0;
  padding: 0;
  font-family: 'Muli',sans-serif;
}

nav {
  display: flex;
  justify-content: space-between;
  background-color: rgb(43, 43, 43);
  align-items: center;
  height: 80px;
  max-height: 15vw;
  min-height: 5vw;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  color: white;
}

li:hover {
  transform: translateY(-2px);
  cursor: pointer;
  color: rgb(66, 166, 103);
}

ul li {
  font-size: max(1vw, 1vw);
  margin-left: 10%;
  transition: all .2s cubic-bezier(.22, .61, .36, 1);
}

ul:nth-child(1) {
  flex: 10;
}

ul:nth-child(2) {
  flex: 2;
}

.content {
  background-color: rgb(43, 43, 43);
  display: flex;
  justify-content: center;
  color: white;
  border-radius: max(0.7vw, 0.7px);
  padding-top: 10px;
  font-size: max(0.8vw, 0.8vw);
  transition: all .2s cubic-bezier(.22, .61, .36, 1);
}

.content:hover {
  transform: translateY(-5px);
  background-color: rgb(66, 166, 103);
  cursor: pointer;
}

.mainContent {
  display: flex;
  flex-wrap: wrap;
}

.big {
  width: 23%;
  height: 250px;
  max-height: 20vw;
  margin: 1%;
}

.small {
  width: 10.5%;
  height: 120px;
  max-height: 10vw;
  margin: 1%;
}

.extraBig {
  width: 48%;
  height: 100px;
  max-height: 9vw;
  margin: 1%;
}

.superExtraBig {
  width: 98%;
  height: 200px;
  max-height: 18vw;
  margin: 1%;
}

footer {
  padding: 20px 20px;
  background-color: rgb(87, 95, 95);
  text-align: center;
  color: white;
  font-size: max(1vw, 1vw);
  max-height: 10vw;
  min-height: 3vw;
}

@media only screen and (max-width: 600px) {
  .content {
    font-size: 10px;
  }

  ul li {
    font-size: 12px;
  }
}
</style>

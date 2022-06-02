<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useCategoryStore } from "@/stores/category";

export default {
  data() {
    return {
      currentCategory: {
        id: "",
        description: "",
      },
      editing: false,
    };
  },
  computed: {
    ...mapStores(useCategoryStore),
    ...mapState(useCategoryStore, ["categories"]),
  },
  methods: {
    ...mapActions(useCategoryStore, [
      "getAllCategories",
      "saveCategory",
      "deleteCategory",
    ]),
    async save() {
      try {
        const msg = await this.saveCategory(this.currentCategory);
        alert(msg);
        this.editing = false;
        this.currentCategory = {};
      } catch (e) {
        alert("Ooops! Algo de errado!");
      }
    },
    async deleteItem(item_id) {
      try {
        await this.deleteCategory(item_id);
        alert("Item excluído com sucesso.");
      } catch (e) {
        alert(e);
      }
    },
    async prepareToUpdate(item_id) {
      Object.assign(this.currentCategory, item_id);
      this.editing = true;
    },
  },
  async mounted() {
    try {
      await this.getAllCategories();
    } catch (e) {
      alert(e);
    }
  },
};
</script>

<template>
  <h1>Cadastro de Categorias</h1>
  <div class="category-form">
    <input type="text" v-model="currentCategory.description" placeholder="Categoria" />
    <button class="addButton" @click="save()">
      {{ editing ? "✓" : "+" }}
    </button>
  </div>
  <div class="categories-list">
    <table>
      <thead>
        <tr>
          <th class="categoriaTabela">
            <span><h2>ID</h2></span>
          </th>
          <th class="categoriaTabela">
            <span><h2>Descrição</h2></span>
          </th>
          <th class="categoriaTabela">
            <span><h2>Ações</h2></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category of categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.description }}</td>
          <td id="containerActions">
            <button class="buttonUpdDel" @click="prepareToUpdate(category)">✏️</button>
            <button class="buttonUpdDel" @click="deleteItem(category.id)">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
h1 {
  text-align: center;
}
.category-form {
  margin-top: 30px;
  margin-bottom: 30px;
}

.category-form input {
  width: 70%;
  height: 40px;
  border-radius: 5px;
  border: solid 2px gainsboro;
  margin-left: 15%;
  font-size: 120%;
}

.addButton {
  background-color: rgb(50, 165, 98);
  border: none;
  border-radius: 5px;
  color: white;
  width: 30px;
  height: 30px;
  font-size: 150%;
  font-weight: bold;
  transition: all 0.3s;
  margin-left: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.addButton:hover {
  transform: scale(1.05);
  background-color: rgb(22, 150, 75);
  cursor: pointer;
}

.categories-list {
  width: 100%;
  margin: 0 auto;
}

table {
  width: 70%;
  border-collapse: separate;
  border-spacing: 3px;
  margin: 0 auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 5px;
}

thead {
  color: white;
  background: hsla(272, 26%, 27%, 1);
  background: linear-gradient(
    90deg,
    hsla(272, 26%, 27%, 1) 0%,
    hsla(188, 35%, 45%, 1) 50%,
    hsla(112, 42%, 64%, 1) 100%
  );
}

th {
  text-align: left;
  text-indent: 10px;
}

tr {
  text-indent: 10px;
}

tr:nth-child(even) {
  background-color: gainsboro;
}

#containerActions {
  display: flex;
  justify-content: center;
}

.buttonUpdDel {
  border: solid 1px gainsboro;
  background-color: white;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: all 0.3s;
}

.buttonUpdDel:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.buttonUpdDel:nth-child(1):hover {
  border-color: rgb(50, 165, 98);
}

.buttonUpdDel:nth-child(2):hover {
  border-color: rgb(206, 57, 57);
}
</style>

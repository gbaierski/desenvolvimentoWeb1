<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useProductStore } from "@/stores/product";
import { useCategoryStore } from "@/stores/category";

export default {
  data() {
    return {
      currentProduct: {
        id: "",
        description: "",
        categoryId: 1,
      },
      editing: false,
    };
  },
  computed: {
    ...mapStores(useProductStore),
    ...mapState(useProductStore, ["products"]),
    ...mapState(useCategoryStore, ["categories"]),
  },
  methods: {
    ...mapActions(useProductStore, ["getAllProducts", "saveProduct", "deleteProduct"]),
    ...mapActions(useCategoryStore, ["getAllCategories"]),
    async save() {
      try {
        const msg = await this.saveProduct(this.currentProduct);
        alert(msg);
        this.editing = false;
        this.currentProduct = {};
      } catch (e) {
        alert(e);
      }
    },
    async deleteItem(item_id) {
      try {
        await this.deleteProduct(item_id);
        alert("Item excluído com sucesso.");
      } catch (e) {
        alert(e);
      }
    },
    async prepareToUpdate(item_id) {
      Object.assign(this.currentProduct, item_id);
      this.editing = true;
    },
  },
  async mounted() {
    try {
      await this.getAllProducts();
      await this.getAllCategories();
    } catch (e) {
      alert(e);
    }
  },
};
</script>

<template>
  <h1>Cadastro de Produtos</h1>
  <div class="product-form">
    <div id="containerInputProduct">
      <input
        class="inputProduct"
        type="text"
        v-model="currentProduct.description"
        placeholder="Produto"
      />
      <select class="inputProduct" v-model="currentProduct.categoryId">
        <option v-for="category in categories" :value="category.id" :key="category.id">
          {{ category.description }}
        </option>
      </select>
      <button class="addButton" @click="save()">
        {{ editing ? "✓" : "+" }}
      </button>
    </div>
  </div>
  <div class="products-list">
    <table>
      <thead>
        <tr>
          <th class="produtoTabela">
            <span><h2>ID</h2></span>
          </th>
          <th class="produtoTabela">
            <span><h2>Descrição</h2></span>
          </th>
          <th class="produtoTabela">
            <span><h2>ID Categoria</h2></span>
          </th>
          <th class="produtoTabela">
            <span><h2>Ações</h2></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product of products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.category.description }}</td>
          <td id="containerActions">
            <button class="buttonUpdDel" @click="prepareToUpdate(product)">✏️</button>
            <button class="buttonUpdDel" @click="deleteItem(product.id)">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
.product-form {
  margin-top: 30px;
  margin-bottom: 30px;
}

.inputProduct {
  height: 40px;
  border-radius: 5px;
  border: solid 2px gainsboro;
  font-size: 120%;
  background-color: white;
}
.inputProduct:nth-child(1) {
  width: 62%;
  height: 40px;
  border-radius: 5px;
  border: solid 2px gainsboro;
  margin-left: 15%;
  font-size: 120%;
  margin-right: 0.5%;
}

.inputProduct:nth-child(2) {
  width: 7.5%;
  text-align: center;
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

.products-list {
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

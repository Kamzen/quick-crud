<!-- eslint-disable prettier/prettier -->
<template>
  <div class="container-fluid">
    <button class="btn btn-dark" @click="add">Add Supplier</button>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th v-for="header in headers" :key="header">{{ header }}</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="supplier in suppliers" :key="supplier.id">
          <td>
            {{ supplier.id }}
          </td>
          <td>
            {{ supplier.s_code }}
          </td>
          <td>
            {{ supplier.s_nb }}
          </td>
          <td>
            {{ supplier.s_name }}
          </td>
          <td>
            {{ supplier.s_category }}
          </td>
          <td>
            {{ supplier.s_contact }}
          </td>
          <td>
            {{ supplier.s_email }}
          </td>
          <td>
            {{ supplier.s_phone }}
          </td>
          <td>
            {{ supplier.s_vat }}
          </td>
          <td>
            {{ supplier.s_register }}
          </td>
          <td>
            {{ supplier.s_settlement }}
          </td>
          <td>
            {{ supplier.s_discount }}
          </td>
          <td class="row">
            <button class="btn btn-dark col-md-6" @click="edit(supplier.id)">
              Edit
            </button>
            <button
              class="btn btn-danger col-md-6"
              @click="deleteS(supplier.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "SupplierBuilder",
  data() {
    return {
      headers: [
        "Supplier Code",
        "Supplier NB",
        "Supplier Name",
        "Supplier Category",
        "Supplier Contact",
        "Supplier Email",
        "Supplier Phone",
        "Supplier VAT",
        "Supplier Register",
        "Supplier Settlement",
        "Supplier Discount",
      ],
    };
  },
  computed: {
    ...mapState(["suppliers"]),
  },
  methods: {
    ...mapActions(["getSuppliers", "deleteSupplier"]),
    edit(id) {
      this.$router.push({
        name: "edit",
        params: {
          id: id,
        },
      });
    },
    add() {
      this.$router.push({
        name: "add",
      });
    },
    deleteS(id) {
      this.deleteSupplier(id);
    },
  },
  mounted() {
    this.getSuppliers();
  },
};
</script>

<style scoped>
.container-fluid {
  padding: 20px;
}
</style>

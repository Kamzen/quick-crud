<!-- eslint-disable vue/valid-v-model -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="row edit">
    <div class="col-md-3"></div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <div class="card-title" style="font-weight: bolder; font-size: 25px">
            Edit Supplier Information
          </div>

          <div class="mb-3">
            <label for="s_nb" class="form-label">Code</label>
            <input
              type="text"
              class="form-control"
              id="s_nb"
              v-model="formData.s_code"
              name="s_code"
            />
          </div>

          <div class="mb-3">
            <label for="s_nb" class="form-label">NB</label>
            <input
              type="text"
              class="form-control"
              id="s_nb"
              v-model="formData.s_nb"
              name="s_nb"
            />
          </div>

          <div class="mb-3">
            <label for="s_nb" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="s_nb"
              v-model="formData.s_name"
              name="s_name"
            />
          </div>

          <div class="mb-3">
            <label for="s_nb" class="form-label">Category</label>
            <input
              type="text"
              class="form-control"
              id="s_nb"
              v-model="formData.s_category"
              name="s_category"
            />
          </div>

          <div class="mb-3">
            <label for="s_nb" class="form-label">Contact</label>
            <input
              type="text"
              class="form-control"
              id="s_nb"
              v-model="formData.s_contact"
              name="s_contact"
            />
          </div>

          <div class="mb-3">
            <label for="s_nb" class="form-label">Email</label>
            <input
              type="text"
              class="form-control"
              id="s_nb"
              v-model="formData.s_email"
              name="s_email"
            />
          </div>

          <div class="mb-3">
            <label for="s_nb" class="form-label">Phone</label>
            <input
              type="text"
              class="form-control"
              id="s_nb"
              v-model="formData.s_phone"
              name="s_phone"
            />
          </div>

          <div class="mb-3">
            <label for="s_nb" class="form-label">VAT</label>
            <input
              type="text"
              class="form-control"
              id="s_nb"
              v-model="formData.s_vat"
              name="s_vat"
            />
          </div>

          <div class="mb-3">
            <label for="s_nb" class="form-label">Register</label>
            <input
              type="text"
              class="form-control"
              id="s_nb"
              v-model="formData.s_register"
              name="s_register"
            />
          </div>

          <div class="mb-3">
            <label for="s_nb" class="form-label">Settlement</label>
            <input
              type="text"
              class="form-control"
              id="s_nb"
              v-model="formData.s_settlement"
              name="s_settlement"
            />
          </div>

          <div class="mb-3">
            <label for="s_nb" class="form-label">Discount</label>
            <input
              type="text"
              class="form-control"
              id="s_nb"
              v-model="formData.s_discount"
              name="s_discount"
            />
          </div>
          <button class="btn btn-dark" @click="edit">Update</button>
        </div>
      </div>
    </div>
    <div class="col-md-3"></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "EditSupplierBuilder",
  data() {
    return {};
  },
  computed: {
    ...mapState(["singleSupplier"]),
    formData() {
      return {
        id: this.singleSupplier.id,
        s_code: this.singleSupplier.s_code,
        s_settlement: this.singleSupplier.s_settlement,
        s_discount: this.singleSupplier.s_discount,
        s_register: this.singleSupplier.s_discount,
        s_vat: this.singleSupplier.s_vat,
        s_phone: this.singleSupplier.s_phone,
        s_email: this.singleSupplier.s_email,
        s_contact: this.singleSupplier.s_contact,
        s_category: this.singleSupplier.s_category,
        s_name: this.singleSupplier.s_name,
        s_nb: this.singleSupplier.s_nb,
      };
    },
  },
  methods: {
    ...mapActions(["fetchSingleSupplier", "updateSupplier"]),
    edit() {
      this.updateSupplier(this.formData);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.fetchSingleSupplier(this.$route.params.id);
    });
  },
};
</script>

<style scoped>
.edit {
  padding: 20px;
}
</style>

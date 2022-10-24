import axiosInstance from "@/axiosInstance";
import { createStore } from "vuex";

export default createStore({
  state: {
    suppliers: [],
    singleSupplier: {},
  },
  getters: {},
  mutations: {
    setSuppliers(state, suppliers) {
      state.suppliers = [...suppliers];
    },
    setSingleSupplier(state, supplier) {
      state.singleSupplier = supplier;
    },
  },
  actions: {
    async getSuppliers({ commit }) {
      try {
        const response = await axiosInstance.get("/suppliers");
        commit("setSuppliers", response.data.suppliers);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchSingleSupplier({ commit }, id) {
      try {
        const { data } = await axiosInstance.get(`/suppliers/${id}`);
        commit("setSingleSupplier", data.supplier);
        console.log(data.supplier);
      } catch (err) {
        console.log(err);
      }
    },

    async deleteSupplier({ commit, dispatch }, id) {
      try {
        const { data } = await axiosInstance.delete(`/suppliers/${id}`);
        console.log(data);
        dispatch("getSuppliers");
      } catch (err) {
        console.log(err);
      }
    },

    async updateSupplier({ dispatch }, formData) {
      try {
        const { data } = await axiosInstance.put(
          `/suppliers/${formData.id}`,
          formData
        );
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },

    async addSupplier({ dispatch }, formData) {
      try {
        const { data } = await axiosInstance.post("/suppliers", formData);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  },
});

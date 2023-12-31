import { createStore } from "vuex";

import { products } from '@/constants/products.js';

export default createStore({
  state: {
		products,
		productsListToBuy: [],
		currentCurrency: 'grn'
  },
  getters: {
	  productsListData: ({ products }) => products,
	  productsToBuy: ({productsListToBuy}) => productsListToBuy,
	  currentCurrencyValue: ({ currentCurrency }) => currentCurrency
  },
  mutations: {
	addProductToBuy(state, product){
		state.productsListToBuy.push(product);
	},
	deleteProductFromBasket(state, product){
		state.productsListToBuy = state.productsListToBuy.filter(prod => prod.id !== product.id);
	},
	  updateCurrencyVal(state, newVal){
		  state.currentCurrency = newVal;
	}

  },
  actions: {
	  addProductToBasket({ commit }, product){
		  commit('addProductToBuy', product)
	  },
	  deleteProductFromBasket({ commit }, product){
		commit('deleteProductFromBasket', product)
	  },
	  updateCurrencyVal({ commit }, newVal){
		commit('updateCurrencyVal', newVal)
	  }
  },
  modules: {},
});

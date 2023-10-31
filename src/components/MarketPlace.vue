<template>
	<h1>Вітаємо на нашому сайті!</h1>
	<label for="currency">Виберіть валюту:</label>
	<select id="currency" v-model="currencyValue">
		<option value="grn">Гривня</option>
		<option value="dollar">Долар</option>
	</select>
	
	<products-list/>
	<basket-component/>
	
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import BasketComponent from './BasketComponent.vue';
import ProductsList from './ProductsList.vue';

	export default {
    name: 'MarketPlace',
    components: { ProductsList, BasketComponent },

	 computed: {
		...mapGetters(['currentCurrencyValue']),

		currencyValue:{
			get(){
				return this.currentCurrencyValue
			},
			set(newVal){
				this.updateCurrencyVal(newVal)
			}
		}
	 },
	 methods: {
		...mapActions(['updateCurrencyVal'])
	 },
}
</script>

<style lang="scss">
	h2{
		margin: 30px 0 10px;
	}
	.list-container{
		margin-bottom: 20px;
		border: 2px solid #000;
		max-width: 40vw;
		padding: 15px;
	}
	.item-container{
		display: flex;
		justify-content: space-between;
		padding: 5px 10px;
		cursor: pointer;
		&:hover{
			background-color: rgb(248, 230, 209);
		}
	}
	.product__title{
		flex-basis: 30%;
	}
	.product__price{
		flex-basis: 30%;
	}

</style>
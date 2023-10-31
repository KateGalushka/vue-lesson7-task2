<template>
	<h2>Корзина</h2>
	<div class="list-container">
		<div v-if="isBasketEmpty">Корзина пуста</div>
		<div v-else>
			<div 
				v-for="product in productsToBuy"
				:key="product.id"
				:value="product"
				class="item-container"
			>
				<p class="product__title">{{ product.title }}</p>
				<p v-if="isCurrencyGrn" class="product__price" >{{ product.priceGrn }} грн</p>
				<p v-if="isCurrencyDollar" class="product__price" >$ {{ (product.priceGrn/38).toFixed(2) }} </p>
				<button @click="deleteProductFromBasket(product)">Відмовитись</button>
			</div>
			<div class="total">
				Разом до оплати
				<span v-if="isCurrencyGrn">  {{ totalPrice }} грн </span>
				<span v-if="isCurrencyDollar">$  {{ (totalPrice/38).toFixed(2) }} </span>

				<button style="margin-left: 50px;">Сплатити</button>
			</div>
		</div>
		 
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

	export default {
		name: 'BasketComponent',

		computed: {
			...mapGetters(['productsToBuy', 'currentCurrencyValue']),

			isBasketEmpty(){
				return this.productsToBuy.length == 0
			},
			totalPrice(){
				return this.productsToBuy.reduce((sum, curr)=> sum + curr.priceGrn, 0);
			},
			isCurrencyGrn() {
				return this.currentCurrencyValue == 'grn'
			},
			isCurrencyDollar() {
				return this.currentCurrencyValue == 'dollar'
			},
		
		},
		methods: {
			...mapActions(['deleteProductFromBasket']) 		
		}
	}
</script>

<style lang="scss" scoped>
p{
	margin: 0;
	padding: 0;
}
.total{
	font-weight: 600;
	font-size: 1.1rem;
	margin-top: 50px;
}
</style>
<template>
	<div class="item-container">
		<div class="product__title">
			{{ productCard.title }}
		</div>
		<div v-if="isCurrencyGrn" class="product__price">
			{{ productCard.priceGrn }} грн
		</div>
		<div v-if="isCurrencyDollar" class="product__price">
			$ {{ convertedPrice }}
		</div>
		<button @click="addProductToBasket(productCard)">Купити</button>
	</div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';

	export default {
		name: 'ProductItem',
		props: {
			productCard: {
				type: Object,
				default: ()=>({})
			},
		},
		computed: {
			...mapGetters(['currentCurrencyValue']),

			isCurrencyGrn(){
				return this.currentCurrencyValue == 'grn'
			},
			isCurrencyDollar(){
				return this.currentCurrencyValue == 'dollar'
			},
			convertedPrice(){
				return (this.productCard.priceGrn/38).toFixed(2)
			}
		},
		methods: {
			...mapActions(['addProductToBasket'])
		},
	}
</script>

<style lang="scss" scoped>


</style>
<template>
	<h2>Список товарів</h2>
	<div class="list-container">
		<product-item 
		v-for="product in productsListData"
		:key="product.id"
		:product-card="product"
		/>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductItem from './ProductItem.vue';

	export default {
    name: 'ProductsList',
	 components: { ProductItem },

    computed: {
		...mapGetters(['productsListData']),
	},
}
</script>

<style lang="scss" scoped>


</style>
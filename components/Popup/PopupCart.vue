<template>
    <div class="modal modal-cart" v-if="showCart">
		<div class="modal-dialog">
			<div class="modal-header">
				<h3 class="modal-title">Корзина</h3>
				<button class="close" @click="hideCart">&times;</button>
			</div>
			<!-- /.modal-header -->
			<div class="modal-body">
				<div class="food-row" v-for="item in cart" :key="item.id">
					<span class="food-name">{{ item.name }}</span>
					<strong class="food-price">{{ (item.price * item.quantity).toLocaleString() }} ₽</strong>
					<div class="food-counter">
						<button class="counter-button" @click="decrementQuantity(item)">-</button>
						<span class="counter">{{ item.quantity }}</span>
						<button class="counter-button" @click="incrementQuantity(item)">+</button>
					</div>
                    <button class="close delete-item-cart" @click="deleteItem(item)">&otimes;</button>
				</div>
			</div>
			<!-- /.modal-body -->
			<div class="modal-footer" v-if="cart.length">
				<span class="modal-pricetag">{{cartTotalCost.toLocaleString()}} ₽</span>
				<div class="footer-buttons">
					<button class="button button-primary">Оформить заказ</button>
					<button class="button clear-cart" @click="clearCart()">Отмена</button>
				</div>
			</div>
            <h3 v-if="!cart.length">Ваша корзина пуста</h3>
			<!-- /.modal-footer -->
		</div>
		<!-- /.modal-dialog -->
	</div>
</template>

<script>
export default {
    name: 'PopupCart',
    computed: {
        showCart() {
            return this.$store.getters['cart/showCart'];
        },
        cart() {
            return this.$store.getters['cart/cart'];
        },
        cartTotalCost() {
            let result = [];

            if (this.cart.length) {
                for( let item of this.cart) {
                    result.push(item.price * item.quantity)
                }

                result = result.reduce(function(sum, el) {
                    return sum + el;
                })
                return result;
            } else {
                return 0;
            }
        }
    },
    methods: {
        hideCart() {
            this.$store.dispatch('cart/getShowCart', false);
        },
        
        incrementQuantity(item) {
            this.$store.dispatch('cart/incrementQuantity', item);
        },
        
        decrementQuantity(item) {
            this.$store.dispatch('cart/decrementQuantity', item);
        },

        clearCart() {
            this.$store.dispatch('cart/clearCart');
        },
        
        deleteItem(item) {
            this.$store.dispatch('cart/deleteItem', item);
        }
    },

}
</script>
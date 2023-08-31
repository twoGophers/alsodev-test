<template>
    <div class="card">
        <img :src="require(`~/static/${product.image}`)" :alt="product.image" class="card-image" />
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title card-title-reg">{{ product.name }}</h3>
            </div>
            <div class="card-info">
                <div class="ingredients">
                    {{ product.description }}
                </div>
            </div>
            <div class="card-buttons">
                <button class="button button-primary button-add-cart" :class="{'button-to-cart' : cartButtonText}" @click="toCart(product)">
                    <span class="button-card-text"> {{ cartButtonText ? 'В корзине' : 'В корзину' }}</span>
                    <span class="button-cart-svg"></span>
                </button>
                <strong class="card-price-bold">{{ product.price }} ₽</strong>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Catalogproduct',
    props: { 
        product: Object,
    },
    computed: {
        cart() {
            return this.$store.getters['cart/cart'];
        },
        cartButtonText() {
            return this.cart.some(item => item.id === this.product.id);
        }
    },
    methods: {
        toCart(product) {
            this.$store.dispatch('cart/getCart', product);
        }
    },
}
</script>
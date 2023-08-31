<template>
    <div class="container">
        <header class="header">
            <nuxt-link to="/" class="logo">
                <img src="~/static/img/logo.svg" alt="Logo" />
            </nuxt-link>
            <label class="address">
                <input type="text" class="input input-address" placeholder="Адрес доставки" />
            </label>
            <div class="buttons">
                <span class="user-name"></span>
                <button v-if="!authorization" class="button button-primary button-auth" @click="showAuth()">
                    <span class="button-auth-svg"></span>
                    <span class="button-text">Войти</span>
                </button>
                <button class="button button-cart" id="cart-button" @click="showCart()">
                    <span class="button-cart-svg"></span>
                    <span class="button-text">Корзина</span>
                    <span class="count-cart" v-if="cart.length">{{ cart.length }}</span>
                </button>
                <button v-if="authorization" class="button button-primary button-out" @click="outAuth()">
                    <span class="button-text">Выйти</span>
                    <span class="button-out-svg"></span>
                </button>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header',
    computed: {
        cart() {
            return this.$store.getters['cart/cart'];
        },
        authorization() {
            return this.$store.getters['auth/authorization'];
        },
    },
    methods: {
        showCart() {
            this.$store.dispatch('cart/getShowCart', true);
        },
        showAuth() {
            this.$store.dispatch('auth/getShowModal', true);
        },
        outAuth() {
            this.$store.commit('auth/setAuthorization', false);
        },
    },

    
}
</script>
export const state = () => ({
    showCart : false,
    cart: []
});
  
export const mutations = {

    setCart(state, product) {
        const existingProduct = state.cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            state.cart.push({ ...product, quantity: 1 });
        }
    },

    setShowCart(state, params) {
        state.showCart = params;
    },

    incrementItemQuantity(state, item) {
        const cartItem = state.cart.find(cartItem => cartItem.id === item.id);
        if (cartItem) {
            cartItem.quantity++;
        }
    },

    decrementItemQuantity(state, item) {
        const cartItem = state.cart.find(cartItem => cartItem.id === item.id);
        if (cartItem && cartItem.quantity > 1) {
            cartItem.quantity--;
        }
    },

    clearCart(state) {
        state.cart = [];
    },

    setDeleteItem(state, updatedCart) {
        state.cart = updatedCart;
    }
}
  
  
export const actions = {

    async getCart({ commit }, params) {
        try {
            commit('setCart', params)
        } catch (error) {
            console.error('Error fetching partners:', error);
        }
    },

    async getShowCart({ commit }, params) {
        try {
            commit('setShowCart', params)
        } catch (error) {
            console.error('Error modal cart:', error);
        }
    },

    async incrementQuantity({ commit }, item) {
        try {
            commit('incrementItemQuantity', item);
        } catch (error) {
            console.error('Error incriment:', error);
        }
        
    },

    async decrementQuantity({ commit }, item) {
        try {
            commit('decrementItemQuantity', item);
        } catch (error) {
            console.error('Error decrement:', error);
        }
    },

    async clearCart({ commit }) {
        try {
            commit('clearCart');
        } catch (error) {
            console.error('Error clear cart:', error);
        }
    },

    async deleteItem({ commit, state }, itemToDelete) {
        const updatedCart = state.cart.filter(item => item.id !== itemToDelete.id);
        commit('setDeleteItem', updatedCart);
    }
};



export const getters = {
    showCart: s => s.showCart,
    cart: s => s.cart,
  }
  
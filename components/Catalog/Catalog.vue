<template>
    <div class="container">
        <section class="menu">
            <div class="section-heading">
                <div class="section-heading-catalog">
                    <h2 class="section-title restaurant-title" v-if="product.name">{{ product.name }}</h2>
                    <div class="card-info">
                        <div class="rating" v-if="product.stars">
                            {{ product.stars }}
                        </div>
                        <div class="price" v-if="product.price">От {{ product.price }} ₽</div>
                        <div class="category" v-if="product.kitchen">{{ product.kitchen }}</div>
                    </div>
                </div>
                <div class="section-heading-filter">
                    <button class="button" @click="catalogCheap()">Сначала дорогие</button>
                    <button class="button" @click="catalogExpensive()">Сначала дешевые</button>
                </div>
            </div>
            <div class="cards cards-menu">
                <CatalogItem
                v-for="item in catalog"
                :key="item.id"
                :product="item"
                />
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Catalog',
    data() {
        return {
            cartArr: [],
        }
    },
    computed: {
        catalog() {
            return this.$store.state.catalog;
        },
        product() {
            return this.$store.state.product;
        },
        cart() {
            return this.$store.getters['cart/cart'];
        },
    },

    methods: {
        catalogCheap() {
            this.$store.dispatch('getCheap');
        },
        catalogExpensive() {
            this.$store.dispatch('getExpensive');
        },
    }
}
</script>
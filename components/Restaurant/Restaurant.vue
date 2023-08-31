<template>
    <section class="restaurants">
        <div class="section-heading">
            <h2 class="section-title">Рестораны</h2>
            <label class="search">
                <input type="text" class="input input-search" placeholder="Поиск блюд и ресторанов" />
            </label>
        </div>
        <div class="cards cards-restaurants">
            <RestaurantItem 
                v-for="item in partners"
                :key="item.id"
                :product="item"
            />
        </div>
    </section>
</template>

<script>
export default {
    name: 'Catalog',
    computed: {
        partners() {
            return this.$store.state.partners; 
        },
    },
    methods: {
        loadCatalog(productsFile) {
            this.$store.dispatch('fetchCatalog', productsFile);
            this.$router.push(`/catalog/${productsFile}`);
        },
        async fetchPartners() {
            await this.$store.dispatch('fetchPartners');
        },
    },
    async asyncData({ store }) {
        await store.dispatch('fetchPartners');
    },
    created() {
        this.fetchPartners();
    },
}
</script>
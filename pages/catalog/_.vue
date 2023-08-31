<template>
    <div class="container">
        <Catalog />
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch('fetchCatalog', this.$route.path);
    }
}
</script>
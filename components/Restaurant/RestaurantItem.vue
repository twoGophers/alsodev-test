<template>
    <nuxt-link
        :to="product.url"
        class="card card-restaurant"
        >
        <div>
            <img :src="require(`~/static/${product.image}`)" :alt="product.image" class="card-image">
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title">{{ product.name }}</h3>
                    <span class="card-tag tag">{{ product.time_of_delivery }} мин</span>
                </div>
                <div class="card-info">
                    <div class="rating">
                        {{ product.stars }}
                    </div>
                    <div class="price">От {{ product.price }} ₽</div>
                    <div class="category">{{ product.kitchen }}</div>
                </div>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    name: 'RestaurantItem',
    props: { product: Object},
}
</script>
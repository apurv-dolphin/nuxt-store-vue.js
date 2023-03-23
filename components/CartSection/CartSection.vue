<template>
  <div class="cart-overlay">
    <div class="Header">
      <h3 class="Heading">Shopping Cart</h3>
    </div>
    <div v-if="cartProduct.length !== 0">
      <div
        class="Cart-Items"
        v-for="(product, index) in cartProduct"
        :key="index"
      >
        <div class="image-box">
          <img :src="product.image" style="height: 120px" />
        </div>  
        <div class="about">
          <h1 class="name">{{ product.name }}</h1>
          <h3 class="species">{{ product.species }}</h3>
        </div>
        <div class="about">
          <h1 class="status">{{ product.status }}</h1>
          <h3 class="location">{{ product.location.name }}</h3>
        </div>
        <div class="about">
          <button @click="removeCart(product.id)">Remove</button>
        </div>
      </div>
    </div>
    <div v-else class="empty-cart">Cart is Empty</div>
    <button @click="closeOverlay">close</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import './cartsection.css'

export default {
  props: ['close-overlay'],
  computed: {
    ...mapGetters({
      cartProduct: 'cart/cartProduct',
    }),
  },
  methods: {
    removeCart(id) {
      this.$store.dispatch('cart/remove', id)
    },
  },
}
</script>

<template>
  <main>
    <div class="header">
      <div>
        <NuxtLink to="/"> DashBoard </NuxtLink>
        <NuxtLink to="/about-us"> AboutUs </NuxtLink>
        <NuxtLink to="/gql-product"> Prime Product </NuxtLink>
        <NuxtLink to="/product"> Product </NuxtLink>
        <NuxtLink to="/todo"> TODO </NuxtLink>
      </div>
      <div style="display: flex; align-items: center">
        <div class="cart-icon" @click="openCartOverlay()">
          <p>Cart Item Count: {{ cartItemCount }}</p>
        </div>
        <NuxtLink v-if="!isLoggedIn" to="/login">Login</NuxtLink>
        <button class="logout-btn" v-if="isLoggedIn" @click.prevent="logout">
          Logout
        </button>
      </div>
    </div>
    <div v-if="showModal">
      <CartSection :close-overlay="closeCartOverlay" />
    </div>
  </main>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      showModal: false,
    }
  },
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.auth.isLoggedIn,
    }),
    ...mapGetters({
      cartItemCount: 'cart/cartItemCount',
    }),
  },
  methods: {
    openCartOverlay() {
      this.showModal = true
    },
    closeCartOverlay() {
      this.showModal = false
    },
    ...mapMutations({
      logout: 'auth/logout',
    }),
  },
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #333;
  color: #fff;
  justify-content: space-between;
  z-index: 9;
}
.header a {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  margin: 0 1rem;
}
.cart-icon {
  margin-right: 2.5rem;
}
.logout-btn {
  margin: 10px;
  padding: 10px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
</style>

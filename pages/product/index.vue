<template>
  <div>
    <h1>Product Names:</h1>
    <ul v-for="product in products" :key="product.id">
      <li>{{ product.name }}</li>
      <div class="api-image">
        <div v-if="!imageLoaded" class="skeleton"></div>
        <img :src="product.image" alt="test" @load="onImageLoad" />
      </div>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  middleware: 'auth',
  async asyncData() {
    const api = process.env.AXIOUS_API
    try {
      const response = await axios.get(api)
      return { products: response.data }
    } catch (error) {
      return { error }
    }
  },
  data() {
    return {
      imageLoaded: false,
    }
  },
  methods: {
    onImageLoad() {
      this.imageLoaded = true
    },
  },
}
</script>

<style>
.api-image img {
  height: 100px !important;
  width: 15% !important;
}
.image-loading {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.image-loading.loaded {
  opacity: 1;
}

.skeleton {
  background-color: #ccc;
  height: 100px;
  width: 100px;
}
</style>

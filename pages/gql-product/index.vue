<template>
  <div v-if="!$apollo.queries.characters.loading">
    <ul v-if="characters" class="character-grid">
      <li v-for="character in characters.results" :key="character.id">
        <div class="card-contain">
          <NuxtLink :to="`/gql-product/${character.id}`">
            <div class="image-section">
              <img :src="character.image" />
            </div>
          </NuxtLink>
          <div>
            <div class="card-data">Name : {{ character.name }}</div>
            <div class="card-data">Status : {{ character.status }}</div>
            <div class="card-data">Species : {{ character.species }}</div>
            <div class="card-data">
              Location : {{ character.location.name }}
            </div>
            <div>
              <button @click="addToCart(character)">
                {{ getCartButtonText(character.id) }}
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div v-else class="loading"></div>
</template>

<script>
import { gql as graphqlTag } from 'graphql-tag'
import { mapGetters } from 'vuex'
import './contact.css'

export default {
  middleware: 'auth',
  data() {
    return {
      cart: {}, // object to store cart status by character ID
    }
  },
  methods: {
    addToCart(product) {
      if (this.cart[product.id]) {
        this.$store.dispatch('cart/remove', product.id)
      } else {
        this.$store.dispatch('cart/add', product)
      }
      this.$set(this.cart, product.id, !this.cart[product.id]) // toggle cart status of the clicked character
    },
    getCartButtonText(characterId) {
      return this.cart[characterId] ? 'REMOVE FROM CART' : 'ADD TO CART'
    },
  },
  apollo: {
    characters: graphqlTag`
        query getCharacters {
          characters {
            results {
              name
              image
              status
              id
              species
              location {
                name
              }
            }
          }
        }
      `,
  },
}
</script>

<style scoped>
.loading {
  height: 0;
  width: 0;
  padding: 15px;
  border: 6px solid #ccc;
  border-right-color: #888;
  border-radius: 22px;
  -webkit-animation: rotate 1s infinite linear;
  /* left, top and position just for the demo! */
  position: absolute;
  left: 50%;
  top: 50%;
}

@-webkit-keyframes rotate {
  /* 100% keyframe for  clockwise.
     use 0% instead for anticlockwise */
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>

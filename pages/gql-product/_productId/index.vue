<template>
  <div v-if="!$apollo.queries.character.loading" class="character-contain">
    <div class="card-contain">
      <div class="image-section">
        <img :src="character.image" />
      </div>
      <div>
        <div class="card-data">Name : {{ character.name }}</div>
        <div class="card-data">Status : {{ character.status }}</div>
        <div class="card-data">Species : {{ character.species }}</div>
        <div class="card-data">Location : {{ character.location.name }}</div>
        <!-- <div>
          <button @click="addToCart(character)">ADD TO CART</button>
        </div> -->
      </div>
    </div>
  </div>
  <div v-else class="dotted">
    <li></li>
    <li></li>
    <li></li>
  </div>
</template>

<script>
import { gql as graphqlTag } from 'graphql-tag'

export default {
  // methods: {
  //   addToCart(product) {
  //     this.$store.dispatch('cart/add', product)
  //   },
  // },
  middleware: 'auth',
  apollo: {
    character: {
      query: graphqlTag`
        query getCharacter($id: ID!) {
          character(id: $id) {
            name
            status
            image
            species
            location {
              name
            }
          }
        }
      `,
      variables() {
        return {
          id: this.$route.params.productId,
        }
      },
      skip() {
        return !this.$route.params.productId
      },
    },
  },
}
</script>

<style scoped>
.dotted {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
li {
  display: inline-block;
  list-style: none;
  height: 25px;
  width: 25px;
  background: #06f;
  border-radius: 100%;
  margin: 0 0.2em;
  animation: anm 1s linear infinite alternate;
}

@keyframes anm {
  0% {
    transform: scale(0.1);
    filter: hue-rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(0.4);
  }
  100% {
    transform: scale(1);
    filter: hue-rotate(360deg);
  }
}

li:nth-child(2) {
  animation-delay: 0.4s;
}

li:nth-child(3) {
  animation-delay: 0.8s;
}

@media (max-width: 768px) {
  .character-contain {
    margin: 7rem 2rem;
  }
}
</style>

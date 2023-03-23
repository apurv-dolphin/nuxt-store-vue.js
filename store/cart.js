export const state = () => ({
  addedProduct: []
})

export const mutations = {
  setAddedProduct(state, product) {
    state.addedProduct.push(product)
  },
  removeProduct(state, productId) {
    state.addedProduct = state.addedProduct.filter(product => product.id !== productId)
  }
}

export const actions = {
  add({ commit }, product) {
    commit('setAddedProduct', product)
  },
  remove({ commit }, productId) {
    commit('removeProduct', productId)
  }
}


export const getters = {
  cartItemCount: state => {
    return state.addedProduct.length
  },
  cartProduct: state => {
    return state.addedProduct;
  },
  isInCart: state => productId => {
    return state.cartItems.some(item => item.id === productId)
  }

}
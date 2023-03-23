// store/auth.js

export const state = () => ({
  isLoggedIn: !!localStorage.getItem('token')
})

export const mutations = {
  login(state, token) {
    localStorage.setItem('token', token)
    state.isLoggedIn = true
  },
  logout(state) {
    localStorage.removeItem('token')
    this.$router.push("/login")
    state.isLoggedIn = false
  }
}

<script>
import { mapMutations } from 'vuex'

import './login.css'
export default {
  data() {
    return {
      userData: [],
      token: new Date().getTime(),
      email: '',
      password: '',
    }
  },
  async mounted() {
    await fetch(process.env.REGISTER_API, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        this.userData = data
      })
  },
  methods: {
    ...mapMutations({
      login: 'auth/login',
    }),
    handleLogin() {
      this.userData.filter((e) => {
        if (e.email === this.email && e.password === this.password) {
          this.login(this.token)
          this.$router.push('/')
        } else {
          return false
        }
      })
    }
  },
}
</script>

<template>
  <div id="main" class="main-container">
    <div class="box">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-box">
          <input id="email" type="text" v-model="email" required="" />
          <label>Email</label>
        </div>
        <div class="input-box">
          <input
            id="user-pass"
            type="password"
            v-model="password"
            required=""
          />
          <label>Password</label>
        </div>
        <input id="submit" type="submit" name="" value="Submit" />
      </form>
      <p><a href="#">Lost your password?</a></p>
      <p><NuxtLink to="/register">Register</NuxtLink></p>
    </div>
  </div>
</template>

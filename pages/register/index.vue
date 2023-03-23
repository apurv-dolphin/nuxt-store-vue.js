<script>
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async submit() {
      await fetch(process.env.REGISTER_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
        }),
      })

      await this.$router.push('/login')
    },
  },
}
</script>

<template>
  <div id="main" class="main-container">
    <div class="box">
      <h2>Register</h2>
      <form @submit.prevent="submit">
        <div class="input-box">
          <input id="first-name" type="text" v-model="firstname" required="" />
          <label>First Name</label>
        </div>
        <div class="input-box">
          <input id="last-name" type="text" v-model="lastname" required="" />
          <label>Last Name</label>
        </div>
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
      <p><NuxtLink to="/login">Login</NuxtLink></p>
    </div>
  </div>
</template>

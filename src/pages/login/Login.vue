<template>
  <div class="login-container">
    <div class="login-row">
        <button class="button" @click="onLogin">Connect with your Google Account</button>
    </div>
  </div>
</template>

<script>
  import { login } from '../../domain/services/LoginService'

  export default {
    name: 'Login',
    methods: {
      onLogin: async function () {
        await login();
        this.$router.push({name: "home"});
      }
    }
  }
</script>

<style scoped>
  .login-container {
    display: flex;
    align-items: center;
    justify-items: center;
    height: 100vh;
  }

  .login-row {
    margin: auto;
    margin-top: 100px;
  }

  .login-row > .segment {
    padding: 40px;
  }
</style>

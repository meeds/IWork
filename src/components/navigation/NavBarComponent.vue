<template>
  <nav class="menu fixed stackable">
    <div class="container">
      <a class="menu-item keep active">home</a>
      <a class="menu-item">new</a>
      <a v-on:click="onLogout" class="menu-item keep right">logout</a>
    </div>
  </nav>
</template>

<script>

 import { logout } from '../../domain/services/LoginService';

 export default {
   name: 'NavBarComponent',
   methods: {
     onLogout: async function () {
       await logout();
       this.$router.push({name: "login"});
     }
   }
 }
</script>

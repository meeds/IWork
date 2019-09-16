<template>
  <div>
    <h1>Hi {{fullName}}</h1>
    <p>
      Welcome back to the workspace, we missed you!
    </p>
  </div>
</template>
<script>
  export default {
    name: 'WelcomeComponent',
    computed : {
      fullName: function () {
         return this.$currentUser.profile.displayName;
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../styles/base";
</style>

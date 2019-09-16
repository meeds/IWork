<template>
  <div>
    <h3>{{ project.title }}</h3>
    <p>
      {{ project.description }}
    </p>
  </div>
</template>
<script>
  export default {
    name: 'ProjectSummaryComponent',
    props: {
      project: Object
    }
  }
</script>
<style scoped lang="scss">
    @import "../../styles/base";
</style>

<template>
  <section>
    <h5>Projects</h5>
    <div class="projects-container">
        <slot></slot>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'ProjectsComponent',
  }
</script>

<style scoped lang="scss">
  @import "../../styles/base.scss";
  @import "../../styles/project.scss";
</style>

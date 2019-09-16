<template>
  <div class="project-node">
    <div v-on:click="onProjectSelected" class="project" v-bind:style="stylesObject">
      <p class="project-content">
        {{ smallTitle }}
      </p>
    </div>
    <span>{{ project.title }}</span>
  </div>
</template>
<script>
  export default {
    name: 'ProjectComponent',
    props: {
      project: Object
    },
    methods:  {
      onProjectSelected() {
          this.$emit('onProjectChange',this.project);
      }
    },
    computed: {
      stylesObject: function () {
        return {backgroundColor: this.project.color}
      },
      smallTitle: function () {
        return this.project.title.substring(0,2);
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../styles/base";
  @import "../../styles/project";
</style>

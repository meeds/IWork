<template>
  <div>
    <section v-if="isProjectSelected">
      <header>
        <ProjectSummaryComponent :project="project"/>
      </header>
      <div class="spacer"></div>
      <div class="spacer"></div>
      <TasksComponent :tasks="project.tasks"/>
    </section>
    <section class="project-empty-section" v-if="!isProjectSelected">
        <div class="project-empty">
          <span class="fa fa-braille">&nbsp; no project is selected</span>
        </div>
    </section>
  </div>
</template>
<script>
  import TasksComponent from '../task/TasksComponent'
  import ProjectSummaryComponent from './ProjectSummaryComponent'

  export default {
    name: 'ProjectDetailComponent',
    props: {
      project: Object
    },
    components: {
      ProjectSummaryComponent,
      TasksComponent
    },
    computed: {
      isProjectSelected: function () {
        return this.project !== null && this.project !== undefined;
      }
    }
  }
</script>
<style scoped>

  .project-empty-section{
    height: 100vh;
    display: flex;
  }

  .project-empty {
    flex: 1;
    flex-basis: 50%;
    text-align: center;
    margin: auto;
    width: 50%;
    height: 50%;
  }

  .project-empty span {
    font-size: 60px;
    color: #bbb;
    text-transform: capitalize;
  }
</style>

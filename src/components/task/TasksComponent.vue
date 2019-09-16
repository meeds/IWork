<template>
  <section class="tasks">
    <h5>Tasks</h5>
    <div class="actions aligned-right">
      <button class="button" style="box-shadow: 2px 2px 2px #bbb;"><span class="fa fa-plus"></span></button>
    </div>
    <div class="spacer tiny"></div>
    <TaskComponent v-for="task of tasks" :task="task" :key="task.id"/>
  </section>
</template>
<script>
  import TaskComponent from './TaskComponent'
  export default {
    name: 'TasksComponent',
    components: { TaskComponent },
    props: ['tasks']
  }
</script>
<style lang="scss" scoped>
  @import "../../styles/base";
  @import "../../styles/task";
</style>

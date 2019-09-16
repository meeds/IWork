<template>
  <div class="task">
    <div class="task-content">
      <span class="fa fa-check"></span>
      <p>{{ task.content }}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TaskComponent',
    props: ['task']
  }
</script>
<style scoped lang="scss">
  @import "../../styles/base";
  @import "../../styles/task";
</style>

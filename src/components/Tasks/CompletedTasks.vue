<template>
<div>
  <list-header>Completed </list-header>
  <q-list 
    v-if="Object.keys(tasksCompleted).length"
    separator
    bordered>
    <task
    v-for="(task, key) in tasksCompleted"
      :key="task.id"
      :task="task"
      :id="key"
    ></task>
    </q-list>
</div>
</template>
<script>
export default {
  props: ['tasksCompleted'],
  components: {
    'task' : require('components/Tasks/Task.vue').default,
    'list-header' : require('components/Shared/ListHeader.vue').default
  }
}
</script>
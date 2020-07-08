<template>
  <q-page class="q-pa-md">
    <div class="row q-mb-lg">
      <search/>
      <sort/>
    </div>
    <p v-if="search && !Object.keys(tasksTodo).length && !Object.keys('tasksCompleted')">No search results</p>
    <no-tasks 
    v-if="!Object.keys(tasksTodo).length && !search"/>

    <tasks-todo
    v-if="Object.keys(tasksTodo).length"
    :tasksTodo="tasksTodo"
    />
    
    <tasks-completed
    v-if="Object.keys(tasksCompleted).length"
    :tasksCompleted="tasksCompleted"
    />
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
      @click="showAddTask = true"
      round
      color="primary"
      size="20px"
      icon="add"
    />
    </div>
     <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false"/>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

  export default {
    data() {
      return { 
        showAddTask: false
      }
    },
    computed: {
      ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
      ...mapState('tasks', ['search'])
    },
    components: {
      'add-task' : require('components/Modals/AddTask.vue').default,
      'tasks-todo' : require('components/Tasks/TasksTodo.vue').default,
      'tasks-completed': require('components/Tasks/CompletedTasks.vue').default,
      'no-tasks' : require('components/Tasks/Notasks.vue').default,
      'search' : require('components/Tasks/Tools/Search.vue').default,
      'sort' : require('components/Tasks/Tools/Sort.vue').default
    },
    mounted() {
      this.$root.$on('showAddTask', () => {
        this.showAddTask = true
      })
    }
  }
</script>
<style>

</style>
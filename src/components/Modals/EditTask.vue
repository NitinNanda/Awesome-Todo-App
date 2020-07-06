<template>
  <q-card>
    <modal-header>Edit Task</modal-header>
  <q-form
    @submit.prevent="submitForm">
        <q-card-section class="q-pt-none">
          <modal-task-name 
          ref="modalTaskName"
          :name.sync="taskToSubmit.name"/>
          <div class="row q-mb-sm">
            <q-input 
            outlined  
            v-model="taskToSubmit.dueDate" 
            clearable
            label="Due date">    
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="taskToSubmit.dueDate"  @input="() => $refs.qDateProxy.hide()" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div 
          class="row q-mb-sm">
            <q-input 
            v-if="taskToSubmit.dueDate"
            outlined 
            v-model="taskToSubmit.dueTime" 
            clearable=""
            label="Due time">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.dueTime" />
                </q-popup-proxy>
              </q-icon>
          </template>
          </q-input>
          </div>
          
        </q-card-section>

        <modal-buttons />
    </q-form>
    </q-card>
        
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: ['task', 'id'],
  data(){
    return {
      taskToSubmit: {
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate()
      if(!this.$refs.modalTaskName.$refs.name.hasError){
        this.submitTask()
      }
    },
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })
      this.$emit('close')
    }
  },
  components: {
    'modal-header': require('components/Modals/Shared/ModalHeader.vue').default,
    'modal-task-name': require('components/Modals/Shared/ModalTaskName.vue').default,
    'modal-buttons': require('components/Modals/Shared/ModalButtons.vue').default
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task)
  }
}
</script>
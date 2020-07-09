export default {
  methods: {
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate()
      if(!this.$refs.modalTaskName.$refs.name.hasError){
        this.submitTask()
      }
    }
  },
  components: {
    'modal-header': require('components/Modals/Shared/ModalHeader.vue').default,
    'modal-task-name': require('components/Modals/Shared/ModalTaskName.vue').default,
    'modal-buttons': require('components/Modals/Shared/ModalButtons.vue').default
  }
}
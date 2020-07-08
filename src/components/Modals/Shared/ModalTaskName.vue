<template>
  <div class="row q-mb-sm">
    <q-input 
            outlined 
            clearable
            :value="name" 
            label="Task name" 
            @input="$emit('update:name', $event)"
            autofocus
            class="col"
            ref="name"
            v-select-all
            :rules="[val => !!val || 'Field is required']"
             />
  </div>
</template>
<script>
import { selectAll } from 'src/directives/directive-select-all'

export default {
  props: ['name'],
  directives: {
    selectAll
  }
}
</script>
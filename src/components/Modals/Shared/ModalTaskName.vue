<template>
  <div class="row q-mb-sm">
    <q-input 
            outlined 
            clearable
            :value="name" 
            label="Task name" 
            @input="$emit('update:name', $event)"
            autofocus=""
            class="col"
            ref="name"
            :rules="[val => !!val || 'Field is required']"
             />
  </div>
</template>
<script>
export default {
  props: ['name']
}
</script>
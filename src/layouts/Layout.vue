<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-footer>
      <q-tabs>
        <q-route-tab 
          v-for="nav in essentialLinks"
          :key="nav.title"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
           />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="230"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label
          header
        >
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.label"
          v-bind="link"
        />        
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,     
      essentialLinks: [
        {
          title: 'Todo',
          icon: 'list',
          to: '/'
        },
        {
          title: 'Settings',
          icon: 'settings',
          to: '/settings'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@media screen and (min-width: 768px){
  .q-footer{
    display: none
  }
}
</style>
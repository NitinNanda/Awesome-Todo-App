<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>

        <q-btn 
          v-if="!loggedIn"
          to="/auth"
          flat
          icon-right="account_circle" 
          label="Login" 
          class="absolute-right"/>
        <q-btn 
        @click="logoutUser"
          v-else
          flat
          icon-right="account_circle" 
          label="Logout" 
          class="absolute-right"/>
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
        <q-item 
        v-if="$q.platform.is.electron"
        @click="quitApp"
        class="text-grey-4 absolute-bottom"
        clickable>
          <q-item-section avatar>
            <q-icon name="power_settings_new"/>
          </q-item-section>

          <q-item-section>
            <q-item-label>Quit</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import { mapState, mapActions } from 'vuex';

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
  },
  computed: {
    ...mapState('auth', ['loggedIn'])
  },
  methods:{
    ...mapActions('auth',['logoutUser']),
    quitApp() {
      this.$q.dialog({
          title: 'Confirm',
          message: 'Really quit Awesome Todo?',
          cancel: true,
          persistent: true
        }).onOk(() => {
          if(this.$q.platform.is.electron)
            require('electron').ipcRenderer.send('quit-app')
         })
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
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-if="isMobile"
      temporary
      :mini-variant="drawerMini"
      disable-resize-watcher
      clipped
      fixed
      v-model="drawer"
      app
      floating
      class="left-menu"
    >
      <v-list dense>
        <v-list-tile @click.stop="drawerMini = !drawerMini">
          <v-list-tile-action>
            <v-icon v-if="drawerMini">chevron_right</v-icon>
            <div v-else>
              <v-icon>chevron_left</v-icon>
              collapse
            </div>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile v-for="(item,i) in menuItems" :key="i" router :to="{path: item.path}">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="header-menu" clipped-left dense app color="white">
      <v-toolbar-side-icon v-if="isMobile" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>VueJS</v-toolbar-title>

      <v-toolbar-items>
        <v-tabs
          v-if="!isMobile"
          v-model="active"
          align-with-title
          color="inherit"
          slider-color=""
        >
          <v-tab
            v-for="(item,i) in menuItems"
            :key="i"
            ripple
            router
            :to="{path: item.path}"
          >
            {{item.title}}
          </v-tab>
        </v-tabs>
      </v-toolbar-items>
    </v-toolbar>
    <v-content style="padding: 10px 0">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <div class="spacer" id="spacer"></div>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      isMobile: false,
      active: null,
      drawerMini: false,
      menuItems: [
        {title: 'Home', path: '/', icon: 'home'},
        {title: 'About us', path: '/info', icon: 'info'},
        {title: 'Contact us', path: '/contact', icon: 'contact_mail'}
      ]
    }
  },
  mounted () {
    this.isMobileDevice()
    window.addEventListener('resize', this.isMobileDevice)
  },
  methods: {
    isMobileDevice () {
      this.isMobile = (window.innerWidth < 900) ||
        (typeof window.orientation !== 'undefined') ||
        (navigator.userAgent.indexOf('IEMobile') !== -1)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "assets/_variables.scss";
  .container {
    padding: 0;
    flex: none;
    margin: 0;
    height: 100%;
  }
  .header-menu {
    position: sticky;
    z-index: 11;
    margin-top: 10px !important;
    .toolbar__title,
    .tabs__container .tabs__div{
      color: $primary-color;
    }
  }
  .left-menu {
    padding-top: 10px;
  }
  .spacer {
    height: 500px;
  }
</style>

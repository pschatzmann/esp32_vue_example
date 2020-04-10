<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      clipped-left
      app
    >
      <v-list dense>

        <v-list-item to="/">
            <v-list-item-action>
                <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-item to="/info">
            <v-list-item-action>
                <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Info</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Vue.js on a ESP32</v-toolbar-title>
    </v-app-bar>

    <v-content>
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>


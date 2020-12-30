<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        Top 100 Crypto Currency List
        
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <Crypto/>
    </v-main>
  </v-app>
</template>

<script>
import Crypto from './components/Crypto';

export default {
  name: 'App',

  components: {
    Crypto,
  },

  data: () => ({
    //
  }),

  
};
</script>

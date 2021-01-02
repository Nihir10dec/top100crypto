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
        Real Time Crypto Currency Rates
        
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <v-container>
      <Crypto/>
      </v-container>
    </v-main>
    <v-footer padless
      
      color="primary"
      dark
    >
    <v-col
      class="text-center"
      cols="12"
    >
      Developed by <strong><a href="https://www.linkedin.com/in/nihir-shah/" style="color:white; text-decoration: none;
">Nihir Shah</a></strong> © {{ new Date().getFullYear() }}
    </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Crypto from './components/Crypto';

export default {
  name: 'App',
  mounted(){
    setInterval(() => { 
      this.$store.dispatch("fetchcoins")
    }, 750);
  },
  components: {
    Crypto,
  },

  data: () => ({
    //
  }),

  
};
</script>

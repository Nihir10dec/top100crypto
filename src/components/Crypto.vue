<template>
<v-card>
    <v-card-title>
      Top 100 Crypto Currency
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
  <v-data-table
    :headers="headers"
    :items="coins"
    :items-per-page="5"
    class="elevation-1"
    :search="search"
    :footer-props = "{'items-per-page-options': [10, 25, 50, 75, 100]}"
  >
  <template v-slot:[`item.icon`]="{ item }">
    <img :src="item.icon" style="width: 30px; height: 30px" />    
  </template>
  
  
  </v-data-table>
</v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        
        headers: [
          { text: 'Currency Icon', align: 'start', value: 'icon',},
          { text: 'Currency Name', value: 'name' },
          { text: 'Currency Symbol', value: 'symbol' },
          { text: 'Currency Price ($)', value: 'price' },
          { text: 'Currency Price Change (%)', value: 'price_change' },
          
        ],
      }
    },
  computed: {
      coins(){
      return this.$store.getters.getCoins;
      }
  },
  }
  
</script>
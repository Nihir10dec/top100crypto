<template>
  <v-data-table
    :headers="headers"
    :items="coins"
    :items-per-page="5"
    class="elevation-1"
  >
  <template v-slot:[`item.icon`]="{ item }">
    <img :src="item.icon" style="width: 30px; height: 30px" />    
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Currency Icon',
            align: 'start',
            value: 'icon',
          },
          { text: 'Currency Name', value: 'name' },
          { text: 'Currency Symbol', value: 'symbol' },
          { text: 'Currency Price', value: 'price' },
          { text: 'Currency Price Change ', value: 'price_change' },
          
        ],
        coins: [],
      }
    },
    methods: {
    loadData: async function () {
    let response = await fetch("https://api.coinranking.com/v1/public/coins/?limit=100");
    let obj = await response.json();
    let coins = obj.data.coins;
    this.coins = coins.map(coin => {return { "icon": coin.iconUrl, "name": coin.name , "symbol" : coin.symbol , "price": coin.price , "price_change": coin.change}})
    }
  },
  async mounted () {
    this.loadData();

    setInterval(function () {
      // console.log("every 3 sec")
      this.loadData();
    }.bind(this), 2000); 
  }}
  
</script>
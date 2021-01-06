const state = {
  coins: []
};

const getters = {
  getCoins: state => state.coins
};

const actions = {
  async fetchcoins({ commit }) {
    
    let response = await fetch("https://api.coinranking.com/v1/public/coins/?limit=100");
    let obj = await response.json();
    let coins = obj.data.coins.map(coin => {return { "icon": coin.iconUrl, "name": coin.name , "symbol" : coin.symbol , "price": coin.price , "price_change": coin.change}})
    coins = coins.map(coin => { return {...coin , "price_change" : coin.price_change.toString().replace('-' , '- ') , "symbol": coin.symbol.replace(/[.*+?^${}()|[\]\\]/g , '')}} )
    commit('setCoins', coins);
  },
  
};

const mutations = {
  setCoins: (state, coins) => (state.coins = coins),
};

export default {
  state,
  getters,
  actions,
  mutations
};
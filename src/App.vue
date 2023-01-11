<template>
    <div class="container">
        <Market/>
        <div class="middle">
          <div class="header">
            <h1>{{money.toFixed(0)}}</h1>
          
            <h2>{{mps.toFixed(1)}}/s</h2>
          </div>
          <Maxwell/>
        </div>
        <Upgrades/>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Market from './components/Market.vue'
import Maxwell from './components/Maxwell.vue'
import Upgrades from './components/Upgrades.vue'
import { Store, useStore } from 'vuex';
import { Estado } from '@/store/index'
import { CLICK_FOR_MONEY, MONEY_PER_SECOND, UPDATE_MAIN_MPS } from './store/tipo-mutacoes';
export default defineComponent({
    name: 'App',
    components: {
        Market,
        Maxwell,
        Upgrades
    },
    setup(){
        const store = useStore()
        
        return{
            store,
            money: computed(()=>store.state.player.money),
            mps: computed(()=>store.state.player.mps)
        }
    },
    data(){
      return{

      }
    },
    computed:{

    },
    methods:{
        moneyIncrementOverTime(store: Store<Estado>) {
          setInterval(function (){
            store.commit(MONEY_PER_SECOND)
            store.commit(UPDATE_MAIN_MPS)
          }.bind(store),1000)
        },

    },
    mounted(){
      
      this.moneyIncrementOverTime(this.store)
      
    },
    created(){
      this.store.commit(UPDATE_MAIN_MPS)
    }
    
})
</script>

<style>
*{
  margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	vertical-align: baseline;
}
.middle{
  display: flex;
  flex-direction: column;
  align-items: center;
  width:52vw
}
.header{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
}
#app {

}
.container{
  display: flex;
}
html{
  overflow-y: hidden;
}
</style>

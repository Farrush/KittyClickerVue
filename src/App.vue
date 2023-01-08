<template>
    <div class="container">
        <Market/>
        <div class="middle">
          <div class="header">
            <h1>{{money}}</h1>
          
            <h2>{{mps}}/s</h2>
          </div>
          <img @click="clickForMoney" class="clicker" src="@/assets/maxwell.jpg"/>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Market from './components/Market.vue'

import { Store, useStore } from 'vuex';
import { Estado } from '@/store/index'
import { CLICK_FOR_MONEY, MONEY_PER_SECOND, UPDATE_MAIN_MPS } from './store/tipo-mutacoes';
export default defineComponent({
    name: 'App',
    components: {
        Market,

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
        clickForMoney(){
          this.store.commit(CLICK_FOR_MONEY)
        }
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
.clicker{
  width: 40vw;
  height: auto;
}
.middle{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 76vw;
}
#app {

}
.container{
  display: flex;
}
</style>

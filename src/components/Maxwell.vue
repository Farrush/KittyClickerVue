<template>
    <img @click="clickForMoney" class="clicker" src="@/assets/maxwell.jpg"/>
</template>
<script lang="ts">
import { CLICK_FOR_MONEY } from '@/store/tipo-mutacoes'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    name:'ClickingObject',
    setup() {
        const store = useStore()
        return{
            store
        }
    },
    methods:{
        clickForMoney(){
          this.store.commit(CLICK_FOR_MONEY)
        }
    }
})
</script>
<style scoped>
.clicker{
  width: 40vw;
  height: auto;
}
</style>

<template>
    <Box>
        <h1>Shop</h1>
        <Worker
        @workerPurchaseAttempt="selectWorker"
        @click="buyWorker"
        v-for="worker in workers" :key="worker.name"
        :image="resolve_img_url(worker.image)" 
        :name="worker.name" 
        :price="worker.price.toFixed(0)" 
        :quantity="worker.quantity" 
        :description="worker.description"
        :mps="worker.mps"
        />
    </Box>
</template>
<script lang="ts">
import IWorker from '@/interfaces/IWorker'
import { BUY_WORKER, UPDATE_MAIN_MPS } from '@/store/tipo-mutacoes'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import Worker from './WorkerCard.vue'
import Box from './Box.vue'
export default defineComponent({
    name: 'WorkersMarket',
    components:{
        Worker,
        Box
    },
    setup(){
        const store = useStore()
        return{
            store,
            workers: computed(()=>store.state.workers)
        }
    },
    data(){
        return{
            clickedWorker: null as string | null
        }
    },
    methods:{
        resolve_img_url: function(path: string): string {
            return path
        },
        selectWorker(name: string): void{
            this.clickedWorker = name
        },
        buyWorker(){
            this.store.commit(BUY_WORKER, this.clickedWorker)
            this.store.commit(UPDATE_MAIN_MPS)
            this.clickedWorker = null
        }
    }
})
</script>
<style scoped>

h1{
    font-size: 2rem;
    text-align: center;
}
</style>

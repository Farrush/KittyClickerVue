<template>
    <section class="market" >
        <h1>Shop</h1>
        <Worker
        v-for="worker in workers" :key="worker.name"
        :image="resolve_img_url(worker.image)" 
        :name="worker.name" 
        :price="worker.price" 
        :quantity="worker.quantity" 
        :description="worker.description"
        :mps="worker.mps"
        />
    </section>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import Worker from './WorkerCard.vue'
export default defineComponent({
    name: 'WorkersMarket',
    components:{
        Worker
    },
    setup(){
        const store = useStore()
        return{
            store,
            workers: computed(()=>store.state.workers)
        }
    },
    methods:{
                resolve_img_url: function(path: string): string {
            return path
        }
    }
})
</script>
<style scoped>
section{
    min-width: 17vw;
    max-width: 21vw;
    max-height: 100vh;
    height: 100vh;
    border: solid 1px #000;
}

h1{
    font-size: 2rem;
    text-align: center;
}
</style>

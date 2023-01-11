<template>
    <div class="card" @click="onClickWorker">
        <img :src="image"/>
        <div class="card-body">
            <h1>{{name}}</h1>
            <p>{{description}}</p>
            <h3>Each generates ${{mps}} per second</h3>
            <h3>${{price}}</h3>
        </div>
        <h2>{{quantity}}</h2>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'WorkerCard',
    emits:['workerPurchaseAttempt'],
    props:{
        name:{
            type: String
        },
        price:{
            type: Number
        },
        quantity:{
            type: Number
        },
        description:{
            type: String
        },
        image:{
            type: String        
        },
        mps:{
            type: Number
        }

    },
    methods:{
        onClickWorker(){
            this.$emit("workerPurchaseAttempt", this.name)
        }
    }
})
</script>
<style scoped>
.card{
    display: flex;
    width: 24vw;
    height: 14vh;
    align-items: center;
    padding:10px 0;
    border: solid 1px #000; 
}
p{
    font-size: 0.9rem;
}
h3{
    font-size: 0.85rem;
}
.card-body{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:14vh;
    max-height: 12.5vh;
    width:12vw;
}
img{
    height: 12vh;
    width: auto;
    margin: 5px;
}
h2{
    width: 30px;
    text-align: center;
    font-size: 2.5rem;
}
</style>

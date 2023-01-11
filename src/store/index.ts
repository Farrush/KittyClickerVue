import { createStore, Store, useStore as vuexUseStore } from "vuex";
import IPlayer from "@/interfaces/IPlayer";
import {InjectionKey} from "vue";
import { BUY_WORKER, CLICK_FOR_MONEY, MONEY_PER_SECOND, UPDATE_MAIN_MPS } from "./tipo-mutacoes";
import IWorker from "@/interfaces/IWorker";

export interface Estado {
    player: IPlayer,
    workers: IWorker[]
} 
export const key: InjectionKey<Store<Estado>> = Symbol()
export const store = createStore<Estado>({
    state: {
        player:{
            money: 0,
            mps: 0,
            clickingPower: 1
        },
        workers:[
          {
            name:'Silly',
            description:'Fully lad that makes silly things to earn money???',
            price: 15,
            basePrice: 15,
            quantity: 0,
            image: '../assets/silly.jpg',
            mps: 0.5
          },
          {
            name:'Winston',
            description:'Weird and cute, Winston likes to give you money.',
            price: 100,
            basePrice: 100,
            quantity: 0,
            image: '../assets/winston.png',
            mps: 15
          },
          {
            name:'Ceo of silly cats',
            description:'He has a silly proposal to make!',
            price: 500,
            basePrice: 500,
            quantity: 0,
            image: '../assets/ceo.jpg',
            mps: 55
          }
        ]
    },
  mutations: {
    [MONEY_PER_SECOND](state){
      state.player.money += state.player.mps
    },
    [UPDATE_MAIN_MPS](state){
      let momentMps = 0
      state.workers.forEach(item => {
         momentMps += item.mps * item.quantity
      });
      state.player.mps = momentMps
    },
    [CLICK_FOR_MONEY](state){
      state.player.money += state.player.clickingPower
    },
    [BUY_WORKER](state, selectedWorker: string){
      const index = state.workers.findIndex(worker => worker.name == selectedWorker)
      const buyed = state.workers[index]
      if(state.player.money >= buyed.price){
        state.player.money -= buyed.price
        buyed.quantity += 1
        buyed.price = buyed.basePrice * 1.15 ** buyed.quantity
      }
    }
  }
})

export function useStore(): Store<Estado> {
  return vuexUseStore(key)
}

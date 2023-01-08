import { createStore, Store, useStore as vuexUseStore } from "vuex";
import IPlayer from "@/interfaces/IPlayer";
import {InjectionKey} from "vue";
import { CLICK_FOR_MONEY, MONEY_PER_SECOND, UPDATE_MAIN_MPS } from "./tipo-mutacoes";
import IWorker from "@/interfaces/IWorker";

export interface Estado {
    player: IPlayer,
    workers: IWorker[]
} 
export const key: InjectionKey<Store<Estado>> = Symbol()
export const store = createStore<Estado>({
    state: {
        player:{
            money: 900,
            mps: 0,
            clickingPower: 1
        },
        workers:[
          {
            name:'Silly',
            description:'Fully lad that makes silly things to earn money???',
            price: 10,
            quantity: 0,
            image: '../assets/silly.jpg',
            mps: 1
          },
          {
            name:'Winston',
            description:'Weird and cute, Winston likes to give you money.',
            price: 120,
            quantity: 0,
            image: '../assets/winston.png',
            mps: 25
          },
          {
            name:'Ceo of silly cats',
            description:'He has a silly proposal to make!',
            price: 780,
            quantity: 0,
            image: '../assets/ceo.jpg',
            mps: 90
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
    }
  }
})

export function useStore(): Store<Estado> {
  return vuexUseStore(key)
}

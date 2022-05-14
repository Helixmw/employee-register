<template>
  <div class="div">
      <span class="text-2xl text-blue-400 ml-2">Adjust Pay  <i class="fa-solid fa-user"></i> <font-awesome-icon icon="fa-light fa-arrow-rotate-left" /></span>
      <div class="flex flex-col mt-2 mx-2 space-y-2">
          <div class="input flex flex-col">
              <label for="">Position</label>
              <select class="border-2 border-grey-200 rounded">
                  <option v-for="ps in positions" :key="ps.id">{{ps.position}}</option>
                  </select>
              </div>
          <div class="input flex flex-col">
              <label for="">New Amount</label>
              <input class="border-2 border-grey-200 rounded">
                  
              </div>
              <div class="input flex flex-col">

                  <button class="bg-blue-400 py-2 mt-2  text-white rounded">Set</button>
              </div>
      </div>
  </div>
</template>

<script>
import { collection, query, getDocs } from "firebase/firestore";
import {db} from '../firebase.js'
export default {
    data(){
        return{
            positions:[]
        }
    },
    mounted(){
        this.getPositions();
    },
    methods:{
        async getPositions(){
           const q = query(collection(db, "positions"));
           getDocs(q).then((snapshot) => {
             snapshot.forEach((doc) => {
              let data = {
                'id':doc.id,
                'position':doc.data().position,
                'salary':doc.data().position,
              };
              this.positions.push(data);
             });
           });
           
            }
    }
}
</script>

<style>

</style>
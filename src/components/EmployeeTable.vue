<template>
 <div class="div">
     <div v-for="emp in employees" :key="emp.id" class="border-2 border-indigo-400 w-full flex rounded mt-2 py-4 px-10">
        <div class="thename font-bold flex-1">{{emp.firstname}} {{emp.lastname}}</div>
        <div class="pos text-indigo-400 font-bold flex-1">{{emp.position}}</div>
        <div class="pos text-indigo-400 font-bold flex-1"><font-awesome-icon icon="pen" @click="edit(emp.id)" class="text-lg"/></div>
        <div class="pos text-yellow-500 font-bold flex-1"><font-awesome-icon icon="ban" @click="ban(emp.id)" class="text-lg"/></div>
        <div class="opt flex text-red-500 font-bold flex-2"><font-awesome-icon icon="trash" @click="remove(emp.id)" class="text-lg"/></div>
      </div>
 </div>
</template>
<script>
import { collection, query, getDocs, getDoc, deleteDoc, doc } from "firebase/firestore";
import {db} from '../firebase.js'

export default {
  data(){
    return{
      employees:[]
    }
  },
  mounted(){
    this.getEmployees();
    this.fetchADoc();
  },
  methods:{
    getEmployees(){
      const q = query(collection(db,"employees"));
      getDocs(q).then((snapshot) => {
        snapshot.forEach((doc) => {
          let data = {
            'id':doc.id,
            'firstname':doc.data().firstname,
            'lastname':doc.data().lastname,
            'email':doc.data().email,
            'phone':doc.data().phone,
            'position':doc.data().position
          };
          this.employees.push(data);
        });
      });
    },
    fetchADoc(){
      this.$root.$on('fetchDoc', (val) => {
        let dc = doc(db, "employees", val);
        getDoc(dc).then((docSnap) => {
          let data = {
            'id':docSnap.id,
            'firstname':docSnap.data().firstname,
            'lastname':docSnap.data().lastname,
            'email':docSnap.data().email,
            'phone':docSnap.data().phone,
            'position':docSnap.data().position
          };
          this.employees.push(data);
        });
      });
    },
    remove(id){
      try{
        deleteDoc(doc(db, "employees", id));
        let indexOf = this.employees.findIndex(object => {
          return object.id === id;
        });
        this.employees.splice(indexOf, 1); 
      
      }catch(e){
        console.log("error: "+ e);
      }
    }


  }
}
</script>

<style scoped>



</style>
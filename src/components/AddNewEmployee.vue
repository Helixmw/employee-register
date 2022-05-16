<template>
  <div class="div">
      <span class="text-indigo-500 text-2xl ml-2">Add New Employee</span>
      <div class="form flex flex-wrap justify-center w-full py-2">
          <div class="input flex flex-col px-2">
              <label for="" class="">
                  Firstname
              </label>
                  <input type="text" v-model="fname"  @keyup="fieldCheck()" class="border-2 rounded border-grey-300">
          </div>
          
          <div class="input flex flex-col px-2">
              <label for="" class="">
                  Email
              </label>
                  <input type="text" v-model="email" @keyup="fieldCheck()" class="border-2 rounded border-grey-300">
          </div>
          <div class="input flex flex-col px-2">
              <label for="" class="">
                  Lastname
              </label>
                  <input type="text" v-model="lname"  @keyup="fieldCheck()" class="border-2 rounded border-grey-300">
          </div>
          <div class="input flex flex-col px-2">
              <label for="" class="">
           Phone
              </label>
                  <input type="text" v-model="phone"  @keyup="fieldCheck()" class="border-2 rounded border-grey-300">
          </div>
          <div class="input flex flex-col px-4">
              <label for="" class="">
                  Position
              </label>
                  <select v-model="pos"  class="border-2 rounded border-grey-300 w-44">
                      <option>unassigned</option>
                      <option v-for="ps in positions" :key="ps.id">{{ps.position}}</option>
                  </select>

          </div>
          <div class="input flex flex-row px-2 mt-4 mr-12 space-x-2">
              <button v-if="AddBtn" class="border-2 border-indigo-400  text-indigo-400 rounded px-4" disabled>Add</button>
              <button class="bg-indigo-500 text-white rounded px-4"  @click="add()" v-else>Add</button>
              <button v-if="ClearBtn" class="bg-purple-200 text-white  rounded px-4">Clear</button>
              <button class="bg-purple-300 text-white rounded px-4" @click="clear()" v-else>Clear</button>
            </div>
         <div v-show="PostError" class="msg bg-red-400 rounded w-full h-14 mx-2 my-7 flex justify-center items-center text-white font-bold">Something went wrong. Please try again</div>
         <div v-show="EmailError" class="msg bg-red-400 rounded w-full h-14 mx-2 my-7 flex justify-center items-center text-white font-bold">Valid Email Address is Required</div>
         <div v-show="PostSuccess" class="msg bg-green-400 rounded w-full h-14 mx-2 my-7 flex justify-center items-center text-white font-bold">Added New Employee</div>
      </div>
  </div>
</template>

<script>
import { collection, query, getDocs, addDoc } from "firebase/firestore";
import {db} from '../firebase.js'
export default {
    data(){
        return{
            fname:'',
            lname:'',
            email:'',
            phone:'',
            pos:'',
            positions: [],
            PostError:false,
            EmailError:false,
            PostSuccess:false,
            AddBtn: true,
            ClearBtn: true
        }
    },
    mounted(){
        this.getPositions();
    },
    methods:{
        getPositions(){
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
           
        },
        fieldCheck(){
            if(this.fname.trim()!='' || this.lname.trim()!='' || this.email.trim()!='' || this.phone.trim()!=''){
                this.ClearBtn = false;
                if(this.fname.trim()!='' && this.lname.trim()!='' && this.email.trim()!='' && this.phone.trim()!=''){
                this.AddBtn = false;
                }else{
                this.AddBtn = true;
                }
            }else{
                this.ClearBtn = true;
            }
        },
        clear(){
            this.fname='';
            this.lname='';
            this.email='';
            this.phone='';
            this.pos='';
             this.AddBtn = true;
            this.ClearBtn = true;
        },
        add(){
            let emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(emailFormat.test(this.email) == false){
            this.PostError=false;
            this.EmailError=true;
            this.PostSuccess=false;
            setTimeout(this.clearMessages, 4000);
            }else{
            let data = {
                firstname: this.fname,
                lastname:this.lname,
                email:this.email,
                phone:this.phone,
                position:this.pos
            };
            try{
            addDoc(collection(db, "employees"),data).then((doc) => {
                this.$root.$emit('fetchDoc', doc.id);
            });
            this.PostError=false;
            this.EmailError=false;
            this.PostSuccess=true;
             setTimeout(this.clearMessages, 4000);
            }catch(e){
            this.PostError=true;
            this.EmailError=false;
            this.PostSuccess=false;
             setTimeout(this.clearMessages, 4000);   
            }
            }
        },
        clearMessages(){
            this.PostError=false;
            this.EmailError=false;
            this.PostSuccess=false;
        }
    }
    
}
</script>

<style>

</style>
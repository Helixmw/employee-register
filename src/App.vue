<template>
<div class="back bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
  <div class="frame flex space-x-4 justify-center pt-4">
    <div class="box bg-white w-80 h-72 rounded-lg">
      <AdjustPay/>
      </div>
    <div class="box bg-white w-1/3 h-72 rounded-lg">
      <AddNewEmployee/>
      
    </div>
    <div class="box bg-white w-1/3 h-72 rounded-lg px-2 overflow-y-auto">
      <SuspentionList/>
    </div>
    
    
  </div>
  <div class="flex mt-4 tble">
    <div class="field bg-white rounded-lg flex flex-col px-2 overflow-y-auto">
      <EmployeeTable/>
   </div>
   <div class="">
     <center><img  src="./assets/images/pangol.png" style="height:4rem;margin-left:10rem;margin-top:20rem;"/></center>
   </div>
   
    
  </div>
</div>
  </template>
 

<script>
import AdjustPay from "./components/AdjustPay.vue"
import AddNewEmployee from "./components/AddNewEmployee.vue"
import EmployeeTable from "./components/EmployeeTable.vue"
import SuspentionList from "./components/SuspentionList.vue"
export default {
  name: 'App',
  components: {
   AddNewEmployee, AdjustPay, EmployeeTable ,SuspentionList
  },
  data(){
    return{
      pos:[]
    }
  },
  
}
</script>

<style>
.back{
  height:100vh;
}

.tble{
  margin:5.7rem;
}
 .field{
      width:54.3rem;
      height:27rem;
    }
</style>

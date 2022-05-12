<template>
<div class="back bg-blue-400">
  <div class="frame flex space-x-4 justify-center pt-4">
    <div class="box bg-white w-80 h-72 rounded-lg">
      <AdjustPay/>
      </div>
    <div class="box bg-white w-1/3 h-72 rounded-lg">
      <AddNewEmployee/>
      
    </div>
    <div class="box bg-white w-1/3 h-72 rounded-lg"></div>
    
    
  </div>
</div>
  </template>

<script>
import AdjustPay from "./components/AdjustPay.vue"
import AddNewEmployee from "./components/AddNewEmployee.vue"
export default {
  name: 'App',
  components: {
   AddNewEmployee, AdjustPay
  }
}
</script>

<style>
.back{height:100vh;}


</style>

<template>
  <div class="div">
      <span class="text-2xl text-blue-400 ml-2">Adjust Pay</span>
      <div class="flex flex-col mt-2 mx-2 space-y-2">
          <div class="input flex flex-col">
              <label for="">Position</label>
              <select class="border-2 border-grey-200 rounded">
                  <option value="">fill</option>
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
export default {

}
</script>

<style>

</style>
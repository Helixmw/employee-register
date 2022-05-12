<template>
  <div class="div">
      <span class="text-blue-400 text-2xl ml-2">Add New Employee</span>
      <div class="form flex flex-wrap justify-center w-full py-2">
          <div class="input flex flex-col px-2">
              <label for="" class="">
                  Firstname
              </label>
                  <input type="text" class="border-2 rounded border-grey-300">
          </div>
          
          <div class="input flex flex-col px-2">
              <label for="" class="">
                  Email
              </label>
                  <input type="text" class="border-2 rounded border-grey-300">
          </div>
          <div class="input flex flex-col px-2">
              <label for="" class="">
                  Lastname
              </label>
                  <input type="text" class="border-2 rounded border-grey-300">
          </div>
          <div class="input flex flex-col px-2">
              <label for="" class="">
           Phone
              </label>
                  <input type="text" class="border-2 rounded border-grey-300">
          </div>
          <div class="input flex flex-col px-4">
              <label for="" class="">
                  Position
              </label>
                  <select class="border-2 rounded border-grey-300 w-44">
                      <option>fill</option>
                  </select>

          </div>
          <div class="input flex flex-row px-2 mt-4 mr-12 space-x-2">
              <button class="bg-blue-400 text-white rounded px-4">Add</button>
              <button class="bg-blue-300 text-white rounded px-4">Clear</button>
            </div>
         <div class="msg bg-red-400 rounded w-full h-14 mx-2 my-7 flex justify-center items-center text-white font-bold">Text</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
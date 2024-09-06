<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="p-2 bg-red-500">
    <div class="bg-yellow-100 text-black " style="height: 96vh ;">

      <!-- header  -->
      <div>
        <div class="bg-red-500 text-white py-2 text-center">
          <p>Local Audio Guides</p>
        </div>
        <!-- <div class="mx-3 text-sm py-2 px-3 underline bg-slate-400 mb-5 rounded-b-md text-white">
          <span class=" text-center pl-8">Powered by Sapttrini Software Solution pvt</span>
        </div> -->
      </div>

      <!-- img  -->
      <div>
        <div class="mx-5">
          <img src="../assets/IndexImage/bgimg.jpg" alt="">
        </div>
      </div>
      <br>
      <br>
      <!-- form  -->
      <div class="px-2 bg-yellow-100">

        <div class="flex justify-between pt-4 ">

          <div>
            <p>Audio Guide Language</p>
          </div>
          <!-- <div class="">
            <select name="" id="" style="outline: none; background-color: white;">
              <option value="">Marathi</option>
              <option value="">Hindi</option>
              <option value="">English</option>
            </select>
          </div> -->

        </div>

        <hr>
        <br>
        <form>
          <input type="text" placeholder=" Enter your Name"
            class="w-full bg-white border-b-2 mb-3 outline-none p-2 rounded-full">
          <br>
          <!-- <input type="text" placeholder=" Enter your Mobile No" maxlength="10" class="w-full border-b-2 outline-none"
          onkeyup="val(this)"> -->
          <input placeholder="Enter you Mobile Number"
            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            type="number" maxlength="10" class="w-full border-b-2 mb-3 outline-none bg-white p-2 rounded-full" />
        </form>
      </div>


      <!-- footer  -->
      <div class="text-center bg-yellow-100">
        <div>
          <button class="bg-red-600 text-white text-xl px-4 py-2 rounded-full">
            <i class="fa fa-ticket" style="font-size:20px"></i>
            <NuxtLink to="/secondpage">Enter</NuxtLink>
          </button>
        </div>
        <br>
        <hr>
        <!-- <p class="text-red-500 mb-3"><b>Free Sample Audio</b></p> -->

      </div>
    </div>
  </div>
</template>

<script setup lang="ts" >
definePageMeta({
  layout: false
})
</script>

<style>
select,
option {
  padding-inline: 10px;

}
</style>

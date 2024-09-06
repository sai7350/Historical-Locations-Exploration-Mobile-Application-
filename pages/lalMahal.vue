<template>
    <div class="p-2 bg-red-500">
        <div class="bg-yellow-100 rounded">
            <!--navigate and and info-->

            <div class="bg-red-800 flex p-2 rounded-t justify-between">
                <div class="hover:scale-110 hover:bg-red-600 py-1 px-2 rounded duration-300">
                    <a href="/Map">
                        <img class="h-5" src="../assets/icons8-back-50.png" alt="">
                    </a>
                </div>
                <div class="text-lg text-white px-4">Lal Mahal</div>
                <div></div>
            </div>

            <!--Img-->

            <div class="px-5 py-3 flex items-center">
                <img class="md:w-3/5 w-4/5 items-center mx-auto rounded-lg shadow-lg shadow-neutral-900 "
                    src="../assets/LalMahal/LalMahal.jpg" alt="">

            </div>


            <!--Information-->

            <div class="flex flex-col md:flex-row md:space-x-8 p-4">
                <div class="p-8">
                    <div class="md:w-auto w-3/4 mx-auto text-center rounded-lg shadow-lg shadow-neutral-600 bg-white p-4">
                        <div class="text-2xl p-4 text-black font-semibold">
                            Lal Mahal
                        </div>

                        <!-- <div class="mx-auto md:w-20 w-48 h-1 bg-indigo-500 rounded mt-2 mb-4"></div> -->
                        <div class="space-x-4 p-4 justify-center text-black flex flex-row text-lg">
                            <div>Category:</div>
                            <div>Heritage Walk</div>
                        </div>
                    </div>
                </div>
                <div
                    class="p-8 md:border-l c-border border-black text-xl m-auto md:text-left text-center font-quick text-black">
                    In the year 1630 AD, Shivaji Maharaj's Father Shahaji Raje Bhosale, established the Lal Mahal for his
                    wife
                    Jijabai and son. Shivaji Maharaj stayed here for several years until he captured his first fort. The
                    current
                    Lal Mahal is a reconstruction of the original and located in the center of the Pune city. The original
                    Lal
                    Mahal was built with the idea of rejuvenating the recently razed city of Pune when Shahaji Raje entered
                    the
                    city along with Shivaji and his mother, Maasaheb Jijabai. Young Shivaji Maharaj grew up here, and stayed
                    in
                    the Lal Mahal till he captured the Torna fort in 1645. Chhatrapati Shivaji Maharaj's marriage with his
                    first
                    wife, Saibai took place in Lal Mahal on 16 May 1640
                </div>
            </div>
            <div class="sticky bottom-5 pb-10">
                <div class="mx-auto bg-black rounded-full md:w-3/4 ">
                    <audio controls class="mx-auto w-full">
                        <source src="../assets/LalMahal/Audio.mp3">
                    </audio>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style>
@media (max-width: 768px) {
    .c-border {
        border-top-width: 1px;
    }
}</style>

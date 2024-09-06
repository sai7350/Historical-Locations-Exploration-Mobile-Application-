<template>
    <div class="bg-red-500 p-2">
        <div class="bg-yellow-100 rounded">
            <!--navigate and and info-->

            <div class="bg-red-800 flex p-2 rounded-t justify-between">
                <div class="hover:scale-110 hover:bg-red-600 py-1 px-2 rounded duration-300">
                    <a href="/Map">
                        <img class="h-5" src="../assets/icons8-back-50.png" alt="">
                    </a>
                </div>
                <div class="text-lg text-white px-4">Mahatma Phule Mandai</div>
                <div></div>
            </div>

            <!--Img-->

            <div class="px-5 py-3 flex items-center">
                <img class="md:w-3/5 w-4/5 items-center mx-auto rounded-lg shadow-lg shadow-neutral-900 "
                    src="../assets/MahatmaPhuleImages/Mahatma_Phule_Mandal.jpg" alt="">

            </div>


            <!--Information-->

            <div class="flex flex-col md:flex-row md:space-x-8 p-4">
                <div class="p-8">
                    <div class="md:w-auto w-3/4 mx-auto text-center rounded-lg shadow-lg shadow-neutral-600 bg-white p-4">
                        <div class="text-2xl p-4 text-black font-semibold">
                            Mahatma Phule Mandai
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
                    In the early years of the British rule an open air vegetable market used to be held outside the Shaniwar
                    Wada. This shifted to an indoor place built by the Poona Municipality. The construction of the Gothic
                    style
                    building started in 1882 and took 4 years for completion. It was designed and built by Walter Ducat and
                    Vasudeo Kanitkar with significant input from engineer Narso Ramchandra Godbole.[1] The Market at opening
                    was
                    named after the then Governor of Bombay, Lord Reay, and served as a retail and wholesale market in
                    addition
                    to being the Municipal office. There was also an older market district called Tulshi Baug close to the
                    vegetable market that sold a variety of household items.[2] [3] The wholesale market was moved to the
                    outskirts of the city in the late 1970s to the newly built Shri Chhatrapati Shivaji Market Yard at
                    Gultekdi.
                    The Municipal offices moved to a purpose built new building in the Shivajinagar area of the city many
                    decades ag
                </div>
            </div>
            <div class="sticky bottom-5 pb-10">
                <div class="mx-auto bg-black rounded-full md:w-3/4 ">
                    <audio controls class="mx-auto w-full">
                        <source src="../assets/MahatmaPhuleImages/Audio.mp3">
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

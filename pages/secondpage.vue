<template>
    <div class="p-2 bg-red-500">

        <div class="bg bg-yellow-100 bg-no-repeat">
            <div class="h-full ">
                <div
                    class="hidden md:block space-y-17 h-full bg-gradient-to-r from-yellow-100/5 via-yellow-200/60 to-yellow-300/50 text-black">
                    <div class="lg:w-3/4 ml-auto">
                        <div class="md:text-6xl text-3xl text-right py-10 px-10">
                            Welcome
                        </div>
                        <div class=" text-2xl w-2/3 ml-auto px-10 text-right">
                            <div>Shaniwar Wada is a historical fortification in the city of Pune, India.
                                Built in 1732, it was the great seat of the Peshwas of the Maratha Empire until 1818.
                                Following the rise
                                of the Maratha Empire, the palace became the center of Indian politics in the 18th century.
                                The fort itself was largely destroyed in 1828 by an unexplained fire, but the surviving
                                structures are now
                                maintained as a tourist site.
                            </div>
                        </div>
                    </div>
                    <div class="md:flex hidden">
                        <button
                            class="bg-red-500 hover:bg-red-400 hover:scale-110 duration-300 text-white rounded mx-auto p-3 m-4">
                            <a href="/Map">
                                Start Tour
                            </a>
                        </button>
                    </div>
                </div>

            </div>


        </div>
        <div class="block md:hidden py-4 bg-gradient-to-r  from-yellow-100 via-yellow-200 to-yellow-100 text-black">
            <div class="text-4xl font-bold font-quick text-center py-10 px-10">
                Welcome
            </div>
            <div class="font-quick text-2xl ml-auto px-10 text-center">
                <div>Shaniwar Wada is a historical fortification in the city of Pune, India.
                    Built in 1732, it was the great seat of the Peshwas of the Maratha Empire until 1818. Following the rise
                    of the Maratha Empire, the palace became the center of Indian politics in the 18th century.
                    The fort itself was largely destroyed in 1828 by an unexplained fire, but the surviving structures are
                    now
                    maintained as a tourist site.
                </div>
            </div>
        </div>



        <div class="flex md:hidden bg-yellow-100 py-4 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100">
            <button class="bg-red-500 hover:bg-red-400 hover:scale-110 duration-300 text-white rounded mx-auto p-3 m-4">
                <a href="/Map">
                    Start Tour
                </a>
            </button>
        </div>






    </div>
</template>
  
<script setup lang="ts">
</script>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

.font-quick {
    font-family: 'Quicksand', sans-serif;
}

@media (max-width: 768px) {
    .bg {

        background-image: url(../assets/IndexImage/bgimg.jpg);
        height: 45vh;
        width: 96vw;
        background-size: 100% 100%;
        background-position: initial;
    }
}

@media (min-width: 768px) {
    .bg {

        background-image: url(../assets/IndexImage/bgimg.jpg);
        height: 100vh;
        width: 97vw;
        background-position: center;
    }
}
</style>

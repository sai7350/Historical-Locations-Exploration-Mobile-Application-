<template>
    <div>
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="flex flex-col drawer-content ">
                <div class="sticky top-0 w-full navbar md:justify-between bg-red-500 text-white">
                    <div class="p-2">
                        <label for="my-drawer-3" class="hover:bg-red-300 p-1 rounded hover:scale-110 duration-500">
                            <img class="h-8 drawer-content" src="../assets/icons8-menu-90.png" alt="">
                        </label>
                    </div>
                    <div class="md:text-xl p-2"> Pune Audio Guides </div>
                    <div class="md:flex hidden"></div>

                </div>
                <div>
                    <slot></slot>
                </div>
                <div class="sticky bottom-0 flex p-3 bg-cyan-800">
                    <div class="flex w-1/2 border-r mx-auto">
                        <div class="flex mx-auto space-x-2 items-center">
                            <a href="/" class="space-x-2 flex">
                                <img src="../assets/icons8-home-48.png" class="h-8" alt="Home">
                                <span class="md:flex hidden font-sans text-white text-lg">Home</span>
                            </a>
                        </div>
                    </div>
                    <div class="w-1/2 flex border-l mx-auto">
                        <div class="flex mx-auto items-center">
                            <a href="/Map" class="space-x-2 flex">
                                <img src="../assets/icons8-map-64.png" class="h-8" alt="Map">
                                <span class="md:flex hidden font-sans text-white text-lg">Map</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <div class="p-4 menu bg-black font-bold text-white  w-1/2">
                    <div class="flex flex-col items-center space-y-8 md:text-2xl pt-14 font-sans">
                        <a class="hover:text-gray-200 hover:scale-110 duration-300" href="/">Home</a>
                        <a class="hover:text-gray-200 hover:scale-110 duration-300" href="#">Settings</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
</script>
<template>
    <main>
        <div class="header">Travel and Camping in Chiang Mai</div>
        <div class="content"> ลานกางเต็นท์ เชียงใหม่ เที่ยวหน้าหนาว แคมป์ปิ้งกลางธรรมชาติ.</div>
        <div class="search-box">
            <input type="text" placeholder="Search...">
            <svg class="search-icon " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
        </div>
        <!-- card 1-->
        <div class="flex justify-center items-center flex-wrap gap-4">
            <div
                class="w-60 p-2 bg-[#e7eee985] rounded-xl transform transition-all hover:translate-y-2 mt-12 duration-300 shadow-lg hover:shadow-2xl font-josefin">
                <img class="h-40 mt-3 object-cover rounded-xl" src="../../assets/news1.jpg" alt="">
                <div class="p-2">
                    <h2 class="text-lg font-bold">ดอยอินทนนท์</h2>
                    <p class="text-sm">ดอยอินทนนท์ ยอดเขาที่สูงที่สุดในประเทศไทย...</p>
                </div>
                <div class="m-2">
                    <span class="flex h-7">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <span class="text-sm ml-2">25k reviews</span>
                    </span>
                </div>
                <div class="m-2 flex h-7">
                    <a role="button" href="#"
                        class="text-sm text-white bg-[#162938] hover:bg-[#162938]/80 px-3 py-1 rounded-md">Read More</a>
                    <button
                        class="ml-3 w-16 h-7 flex justify-center items-center bg-gray-300/60 hover:bg-red-600/80 transition rounded-md"><span
                            class="pt-2.5"><ion-icon name="heart"></ion-icon></span></button>
                </div>
            </div>
            <!-- card 2 -->
            <div
                class="w-60 p-2 bg-[#e7eee985] rounded-xl transform transition-all hover:translate-y-2 mt-12 duration-300 shadow-lg hover:shadow-2xl font-josefin">
                <img class="h-40 mt-3 object-cover rounded-xl" src="../../assets/news2.png" alt="">
                <div class="p-2">
                    <h2 class="text-lg font-bold">ดอยหลวงเชียงดาว</h2>
                    <p class="text-sm">ดอยหลวงเชียงดาว เป็นยอดเขาที่ความสูงกว่า 2225 เมตร....</p>
                </div>
                <div class="m-2">
                    <span class="flex h-7">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <span class="text-sm ml-2">18k reviews</span>
                    </span>
                </div>
                <div class="m-2 flex h-7">
                    <a role="button" href="#"
                        class="text-sm text-white bg-[#162938] hover:bg-[#162938]/80 px-3 py-1 rounded-md">Read More</a>
                    <button
                        class="ml-3 w-16 h-7 flex justify-center items-center bg-gray-300/60 hover:bg-red-600/80 transition rounded-md"><span
                            class="pt-2.5"><ion-icon name="heart"></ion-icon></span></button>
                </div>
            </div>
            <!-- card 3 -->
            <div
                class="w-60 p-2 bg-[#e7eee985] rounded-xl transform transition-all hover:translate-y-2 mt-12 duration-300 shadow-lg hover:shadow-2xl font-josefin">
                <img class="h-40 mt-3 object-cover rounded-xl" src="../../assets/news3.jpg" alt="">
                <div class="p-2">
                    <h2 class="text-lg font-bold">อุทยานแห่งชาติห้วยน้ำดัง</h2>
                    <p class="text-sm">อุทยานแห่งชาติห้วยน้ำดังเมีวิวทิวทัศน์สวยงาม มีจุดกางเต็นท์...</p>
                </div>
                <div class="m-2">
                    <span class="flex h-7">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <span class="text-sm ml-2">17k reviews</span>
                    </span>
                </div>
                <div class="m-2 flex h-7">
                    <a role="button" href="#"
                        class="text-sm text-white bg-[#162938] hover:bg-[#162938]/80 px-3 py-1 rounded-md">Read More</a>
                    <button
                        class="ml-3 w-16 h-7 flex justify-center items-center bg-gray-300/60 hover:bg-red-600/80 transition rounded-md"><span
                            class="pt-2.5"><ion-icon name="heart"></ion-icon></span></button>
                </div>
            </div>
            <!-- card 4  -->
            <div
                class="w-60 p-2 bg-[#e7eee985] rounded-xl transform transition-all hover:translate-y-2 mt-12 duration-300 shadow-lg hover:shadow-2xl font-josefin">
                <img class="h-40 mt-3 object-cover rounded-xl" src="../../assets/news4.jpg" alt="">
                <div class="p-2">
                    <h2 class="text-lg font-bold">ดอยผ้าห่มปก</h2>
                    <p class="text-sm">ยอดดอยผ้าห่มปก จ.เชียงใหม่ คืออีกหนึ่งจุดมุ่งหมายของนักเดินป่า...</p>
                </div>
                <div class="m-2">
                    <span class="flex h-7">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <span class="text-sm ml-2">19k reviews</span>
                    </span>
                </div>
                <div class="m-2 flex h-7">
                    <a role="button" href="#"
                        class="text-sm text-white bg-[#162938] hover:bg-[#162938]/80 px-3 py-1 rounded-md">Read More</a>
                    <button
                        class="ml-3 w-16 h-7 flex justify-center items-center bg-gray-300/60 hover:bg-red-600/80 transition rounded-md"><span
                            class="pt-2.5"><ion-icon name="heart"></ion-icon></span></button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "homepage",
}
</script>

<style scoped>
.header {
    @apply w-[100%] h-[60px] text-[#162938] text-[3em] flex flex-col justify-center items-center mt-10 font-josefin font-bold;
}

.content {
    @apply w-[100%] h-[50px] text-[#162938] text-[1.5em] flex flex-col justify-center items-center font-josefin;
}

.search-box {
    @apply mt-4 relative flex justify-center items-center font-josefin;
}

.search-box input {
    @apply w-[350px] text-[18px] py-2.5 px-5 rounded-[25px] border-0 shadow-md;
}

.search-box input:focus {
    @apply w-[400px] relative border-2;
}

.search-icon {
    @apply relative right-[45px] top-0 w-[40px] h-[20px] text-[#162938] cursor-pointer;
}

</style>
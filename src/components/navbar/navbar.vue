<template>
    <nav class="bg-white shadow-lg flex-row flex justify-start">
        <div class="w-[100%] list-none flex justify-between items-center">
            <div class="flex">
                <li class="h-[50px]">
                    <a href="#" class="h-[100%] p-[20px] no-underline flex items-center">
                        <!-- //FIXME: logo -->
                        <svg class="w-10 h-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>Burton</title>
                            <path
                                d="M11.9852 1.5427a.2544.2544 0 00-.2098.1167l-.9744 1.5088a.624.624 0 01-.3532.2618l-.5747.1643a.7493.7493 0 00-.4524.362L6.9551 8.4735a.7424.7424 0 01-.48.3695c-.1543.036-.3882.0866-.6213.132a.5525.5525 0 00-.4013.3226c-.2956.6863-.8678 2.0149-1.1562 2.6826a1.0018 1.0018 0 01-.5097.5162l-.4244.1906a1.0061 1.0061 0 00-.5425.6013s-.6473 1.6657-1.1468 3.1669c-.4515 1.3568-1.6317 5.445-1.6317 5.445a.4273.4273 0 00.0904.4915.32.32 0 00.466-.1066s1.5767-3.3727 2.1518-4.473a.3106.3106 0 01.4612-.093c.2536.165.3786.6073.6632.8644a.2578.2578 0 00.4215-.1034c.206-.5042.6888-2.0741.8511-2.7236.1356-.5411.5956-.5898.858-.1938l.1896.2345a2.2525 2.2525 0 00.7133.592l.3496.1853a.5006.5006 0 01.2283.2446l.3828.8973a.7493.7493 0 00.6609.455l.119.0046a.7503.7503 0 01.633.3978c.176.3314.4613.9323.7038 1.326a.2593.2593 0 00.4735-.0595 15.4276 15.4276 0 00.5997-2.0607c.1408-.7166.5788-.625.7299-.431.0551.07.245.3576.2966.4163a.252.252 0 00.4586-.0972 12.312 12.312 0 00.4033-1.9043c.0386-.2912.358-.3281.5106-.0793.1629.2657.4287.741.5734 1.0232a2.5873 2.5873 0 01.2358.6163l.211.9516a2.1773 2.1773 0 00.6662 1.1276 3.3829 3.3829 0 00.4768.4219.2676.2676 0 00.4091-.1054c.111-.2548.2517-.6868.335-.9354a.2534.2534 0 01.1925-.1675c.1073-.0211.1794-.0303.333-.0712a.8444.8444 0 00.564-.4918l.207-.4995a.257.257 0 01.4663-.012c.0751.1353.2088.4168.2716.572a1.975 1.975 0 01.089.2462l.1647.6362a2.248 2.248 0 00.2894.659l.0752.1167a2.1315 2.1315 0 00.7848.7217.2476.2476 0 00.3496-.1217c.2348-.5461.3253-1.3597.4332-1.8837a.285.285 0 01.5162-.0924c.6114 1.0018 2.3264 3.921 2.3264 3.921a.3122.3122 0 00.5409-.3096c-.0432-.0988-1.5061-3.7875-2.912-7.0531-1.2846-2.9848-2.5247-5.5752-2.5247-5.5752a.4576.4576 0 00-.5568-.2469c-.3762.1119-.7863.357-1.071.4557a.5375.5375 0 01-.6466-.2528c-.3467-.6362-1.1121-2.2981-1.8152-3.6137-.7611-1.4239-1.7256-3.3197-2.2431-4.069a.2544.2544 0 00-.2134-.1096z" />
                        </svg></a>
                </li>
            </div>
            <ul class="flex">
                <li class="h-[50px]"><router-link to="/" class="nav-item">Home</router-link></li>
                <li class="h-[50px]"><a href="#" class="nav-item">Product</a></li>
                <li class="h-[50px]"><a href="#" class="nav-item">About</a></li>
                <li class="h-[50px]"><a href="#" class="nav-item">Contact</a></li>
                <li class="h-[50px]"><router-link to="/login" class="nav-item">Login</router-link></li>
                <button @click="Toggle()" class="group relative inline-block w-[44px] p-[5px] h-[45px] pb-[26px]">
                    <span
                        class="mx-[auto] my-[0] relative top-[12px] w-[30px] h-[6px] bg-[#000] block [transition-property:margin,_width] group-hover:w-[20px] duration-200 after:absolute after:content-[''] after:mt-[12px] after:w-[30px] after:h-[6px] after:bg-[#000] after:block after:left-[0] after:[transition-property:margin,_left] after:duration-200 group-hover:after:mt-[6px] group-hover:after:-left-[5px] before:absolute before:content-[''] before:-mt-[12px] before:w-[30px] before:h-[6px] before:bg-[#000] before:block before:left-[0] before:[transition-property:margin,_width,_left] before:duration-200 group-hover:before:-mt-[6px] group-hover:before:w-[10px] group-hover:before:left-[5px]"></span>
                </button>
            </ul>
        </div>
        <!-- FIXME: sidebar -->
        <ul class="sidebar">
            <button @click="hideSidebar()"
                class="group flex items-center justify-center relative z-10 [transition:all_0.9s_ease] rounded-[0.375rem] p-[5px] cursor-pointer border border-[#999] outline-none focus-visible:outline-0">
                <svg fill="currentColor" stroke="none" stroke-width="0" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-7 h-7 overflow-visible [transition:transform_.35s_ease] group-hover:[transition-delay:.25s] [&amp;_path]:[transition:transform_.35s_ease] group-hover:rotate-45">
                    <path class="group-hover:[transform:rotate(112.5deg)_translate(-27.2%,-80.2%)]"
                        d="m3.45,8.83c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L14.71,2.08c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L3.84,8.75c-.13.05-.25.08-.38.08Z">
                    </path>
                    <path class="group-hover:[transform:rotate(22.5deg)_translate(15.5%,-23%)]"
                        d="m2.02,17.13c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31L21.6,6.94c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31L2.4,17.06c-.13.05-.25.08-.38.08Z">
                    </path>
                    <path class="group-hover:[transform:rotate(112.5deg)_translate(-15%,-149.5%)]"
                        d="m8.91,21.99c-.39,0-.76-.23-.92-.62-.21-.51.03-1.1.54-1.31l11.64-4.82c.51-.21,1.1.03,1.31.54.21.51-.03,1.1-.54,1.31l-11.64,4.82c-.13.05-.25.08-.38.08Z">
                    </path>
                </svg>
            </button>
            <li class="w-[100%]"><router-link to="/" class="nav-item w-[100%]">Home</router-link></li>
            <li class="w-[100%]">
                <a href="#" class="nav-item w-[100%]">Product</a>
            </li>
            <li class="w-[100%]">
                <a href="#" class="nav-item w-[100%]">About</a>
            </li>
            <li class="w-[100%]">
                <a href="#" class="nav-item w-[100%]">Contact</a>
            </li>
            <li class="w-[100%]">
                <router-link to="/login" class="nav-item w-[100%]">Login</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "navbar",
    data() {
        return {
            sidebar: false,
        }
    },
    methods: {
        Toggle() {
            const sidebar = document.querySelector(".sidebar");
            sidebar.style.display = "flex";
        },
        hideSidebar() {
            const sidebar = document.querySelector(".sidebar");
            sidebar.style.display = "none";
        },
    }
}
</script>

<style scoped>
.nav-item {
    @apply h-[100%] p-[20px] no-underline flex items-center text-black font-josefin hover:bg-[#f0f0f0];
}

.sidebar {
    @apply fixed top-0 right-0 h-[100vh] w-[250px] bg-[#2a2e343b] backdrop-blur-[12px] shadow-md list-none flex-col justify-start items-end hidden;
}
</style>
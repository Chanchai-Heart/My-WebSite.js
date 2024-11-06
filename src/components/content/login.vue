<template>
    <!-- //TODO: add login form -->
    <div class="flex justify-center items-center pt-[100px]">
        <div :class="['wrapper', { 'active': !isLoginActive }, { 'active-popup': !isPopupActive }]">
            <router-link to="/" class="icon-close"><ion-icon name="close-outline"></ion-icon></router-link>
            <div v-if="isLoginActive" class="form-box login">
                <p class="font-bold font-josefin text-3xl text-center">Login</p>
                <form class="flex flex-col " @submit.prevent="login">
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail"></ion-icon></span>
                        <input name="email" id="email" type="text" required />
                        <label for="email" class="mail-pass">Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input name="password" id="password" type="password" required />
                        <label for="password" class="mail-pass">Password</label>
                    </div>
                    <div class="remember-forget">
                        <label for=""><input class="checkbox" type="checkbox" /> Remember Me</label>
                        <a class="decoration-none" href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" class="btn">Login</button>
                    <div class="login-register">
                        <p>
                            Don't have an account?
                            <a href="#" @click.prevent="toggleForm">Register</a>
                        </p>
                    </div>
                </form>
            </div>
            <!-- //TODO: add register form -->
            <div v-else class="form-box register">
                <p class="font-bold font-josefin text-3xl text-center">Register</p>
                <form class="flex flex-col " @submit.prevent="register" action="#">
                    <div class="input-box">
                        <span class="icon"><ion-icon name="person"></ion-icon></span>
                        <input name="user" id="user" type="text" required />
                        <label for="user" class="mail-pass">Username</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail"></ion-icon></span>
                        <input name="email" id="email" type="text" required />
                        <label for="email" class="mail-pass">Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input name="password" id="password" type="password" required />
                        <label for="password" class="mail-pass">Password</label>
                    </div>
                    <div class="remember-forget">
                        <label for=""><input class="checkbox" type="checkbox" /> agree terms & conditions</label>
                    </div>
                    <button type="submit" class="btn">Register</button>
                    <div class="login-register">
                        <p>
                            Already have an account?
                            <a href="#" @click.prevent="toggleForm">Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
const wrapper = document.querySelector(".wrapper");
export default {
    name: "login",
    data() {
        return {
            isLoginActive: true,
        };
    },
    methods: {
        toggleForm() {
            this.isLoginActive = !this.isLoginActive;
        },
        login() {
            this.isLoginActive = true;
        },
        register() {
            this.isLoginActive = false;
        },
    },
};
</script>

<style scoped>
.wrapper {
    @apply relative w-[400px] h-[440px] bg-transparent border-2 border-white/50 rounded-[20px] font-josefin backdrop-blur-[20px] shadow-md flex justify-center items-center

    ;
    transform: scale(0);
    transition: transform 0.5s ease, height 0.3s ease;
}

.wrapper.active {
    @apply h-[520px];
}

.wrapper.active-popup {
    @apply scale-[1];
}

.icon-close {
    @apply absolute top-[0] right-[0] w-[45px] h-[45px] bg-[#162938] text-[#fff] text-[2em] flex justify-center items-center cursor-pointer rounded-bl-[20px] z-[1];
}

.form-box {
    @apply w-[100%] p-[40px];
}

.input-box {
    @apply relative w-[100%] h-[50px] border-b-2 border-b-[#162938] my-[15px];
}

.icon {
    @apply absolute leading-[55px] right-[8px] text-[1.2rem];
}

.input-box input {
    @apply w-[100%] h-[100%] bg-transparent border-none outline-none pt-0 pr-[35px] pb-0 pl-[5px];
}

.input-box label {
    @apply absolute top-[50%] left-[5px] translate-y-[-50%] text-sm pointer-events-none font-medium;
}

.input-box input:focus~.mail-pass,
.input-box input:valid~.mail-pass {
    @apply top-[-5px] font-medium;
}

.remember-forget {
    @apply text-[.9em] font-medium mt-[10px] mb-[15px] mx-0 flex justify-between text-slate-300;
}

.check-box {
    @apply mr-[3px];
}

.remember-forget a:hover {
    @apply underline;
}

.btn {
    @apply w-[100%] h-[45px] bg-[#162938] rounded-[10px] text-white font-medium border-none outline-none cursor-pointer;
}

.login-register {
    @apply text-[.9em] font-medium mt-[25px] mb-[10px] mx-0 flex justify-center text-slate-300;
}

.login-register p a:hover {
    @apply underline;
}

.login-register p a {
    @apply text-slate-300 font-medium decoration-auto;
}
</style>
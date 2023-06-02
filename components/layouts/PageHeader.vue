<template>
    <div class="flex flex-row justify-between items-center pt-1" id="header-container">
        <div id="logo-container">
            <div class="logo font-bold">
                <NuxtLink to="/">The World <span class="text-primary-orange">Today</span></NuxtLink>
                
            </div>
        </div>
        <div id="menu-container" class="">
            <NuxtLink to="/category/news">ព័ត៌មានថ្មីៗ</NuxtLink>
            <NuxtLink to="/category/technology">បច្ចេកវិទ្យា</NuxtLink>
            <NuxtLink to="/category/science">វិទ្យាសាស្ត្រ</NuxtLink>
            <NuxtLink to="/category/society">សង្គម</NuxtLink>
            <NuxtLink to="/category/sport">កីឡា</NuxtLink>
            <NuxtLink to="/category/other">ផ្សេងទៀត</NuxtLink>
        </div>
        <div id="content-right" class="flex items-center gap-6">
            <div class="icon-items relative">
                <input id="search_text_box" type="text" :class="`p-3 border bg-slate-200 text-xs text-gray-800 rounded outline-none absolute right-7 top-1/2 -translate-y-1/2`" placeholder="Search..." />
                <Icon icon="ri:search-line" class="text-gray-400 cursor-pointer icon-item" width="20px" height="20px" @click="setBoxSearchWidth"/>
            </div>
            <div v-if="windowWidth < 1024">
                <div class="icon-item">
                    <Icon icon="ri:play-list-2-line" width="20px" height="20px" class="menu-collapse text-gray-500 cursor-pointer" @click="setShowerMenuMobile"/>
                </div>
                <div id="menu-sm">
                    <ul :class="isShowMenuMobile? 'show-menu-mobile' : ''">
                        <li><NuxtLink to="/category/news">ព័ត៌មានថ្មីៗ</NuxtLink></li>
                        <li><NuxtLink to="/category/technology">បច្ចេកវិទ្យា</NuxtLink></li>
                        <li><NuxtLink to="/category/science">វិទ្យាសាស្ត្រ</NuxtLink></li>
                        <li><NuxtLink to="/category/society">សង្គម</NuxtLink></li>
                        <li><NuxtLink to="/category/sport">កីឡា</NuxtLink></li>
                        <li><NuxtLink to="/category/other">ផ្សេងទៀត</NuxtLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Icon } from '@iconify/vue';
const isShowMenuMobile=ref(false);
const windowWidth=ref(0);
const isShowBoxSearch=ref(false);

onMounted(()=>{
    window.addEventListener('resize',()=>{
        const wWidth= document.documentElement.clientWidth;
        windowWidth.value=wWidth;
        if(windowWidth.value<1024) isShowMenuMobile.value=false;
    })
})

const setShowerMenuMobile=()=>{
    isShowMenuMobile.value=!isShowMenuMobile.value;
}

const setBoxSearchWidth=()=>{
    const input=<any>document.getElementById('search_text_box');
    isShowBoxSearch.value = !isShowBoxSearch.value;
    if(!input) return;
    if(isShowBoxSearch.value){
         input?.focus();
         input.style.width='13rem';
         input.style.opacity='1';
         input.style.pointerEvents='auto';
    }else if(input.value==''){
        input.blur();
        input.style.transition='0.3s';
        input.style.width = '0rem';
        input.style.opacity = '0';
        input.style.pointerEvents = 'none';
    }
}
</script>
<style scoped>
.icon-item{
    border-radius: 50%;
    transition: all .2s;
}
.icon-item:hover{
    background: #00000008;
    box-shadow: 0 0 0 9px #f7f7f7;
}
#header-container{
    @apply max-w-7xl m-auto;
}
#menu-container{
    @apply lg:flex lg:flex-row gap-8 font-bold text-xs mt-1 hidden;
}
#menu-sm{
    @apply text-xs font-bold flex flex-col gap-1 relative;
}
#menu-sm>ul{
    @apply bg-white pt-3 pb-3 w-40 rounded-md absolute right-0 top-4 -z-10 opacity-0 select-none pointer-events-none;
    box-shadow: 0 0 10px 0px #00000017;
    transform: translate(-10px,-10px);
}
#menu-sm>ul>li>a{
    transform:all .3s;
    @apply flex items-center p-4 h-9 hover:cursor-pointer hover:bg-black hover:bg-opacity-5;
}
.logo{
    font-family: 'kodchasan-bold';
    @apply uppercase;
}
.content-search{
    @apply border border-gray-200 rounded-md text-sm overflow-hidden;
}
.content-search>input{
    @apply p-2 rounded-md outline-none;
}
.search-icon{
    display: none;
}
#menu-sm>ul.show-menu-mobile{
@apply opacity-100 z-10 select-auto pointer-events-auto;
transform: translate(0,0);
/* transition: opacity .1s,tranform .3s; */
}
.menu-collapse{ 
    @apply hidden;
}
.icon-items>input{
    opacity: 0;
    pointer-events: none;
    width: 0;
    transition: width .3s;
}
@media only screen and (max-width:1024px){
    .menu-collapse{
        @apply flex;
    }
}
@media only screen and (max-width:460px){
    .search-icon{
        display: flex;
    }
    .content-search{
        display: none;
    }
}
</style>
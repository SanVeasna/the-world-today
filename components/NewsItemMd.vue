<template>
    <div id="news_items_card" data-aos="fade-in" 
    data-aos-duration="200"
    data-aos-easing="ease-in-out-cubic" @click="onClickCard">
        <div class="image_section">
            <div class="image">
                <img :src="`/assets/image/${imagePath}`"/>
            </div>
        </div>
        <div class="card-content p-3">
            <div class="">
                <div class="date-publish"><Icon icon="mdi:calendar-month" style="margin-bottom: 2px;" width="14px" height="14px"/><span>{{ datePublish }}</span></div>
                <div class="card-title">{{ title }}</div>
                <div class="card-status">
                    <div class="publish-by flex gap-1 items-center"><Icon class="mb-1" icon="mdi-light:account" width="16px" height="16px"/>By<span class="text-primary-orange"> The World Tody</span></div>
                    <div class="view"><Icon icon="mdi:eye-outline" width="14px" height="14px"/><span>{{ view }}K</span></div>
                </div>
            </div>
            <!-- <div class="card-desc">
                {{ description }}
            </div> -->
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Icon } from '@iconify/vue';
defineProps({
    imagePath:{
        type:String,
        required:true,
        default:''
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    datePublish:{
        type:String,
        required:true
    },
    view:{
        type:String,
        required:true
    }
});
const emit=defineEmits(['handleClick']);

const onClickCard=()=>{
    emit('handleClick',{});
}
</script>
<style scoped>
#news_items_card{
    @apply flex flex-col;
    border: 1px solid lightgray;
    border-radius: 7px;
    overflow: hidden;
    transition: all .3s;
}
.card-content{
    @apply h-full;
}
.card-title{
    @apply pb-1 font-bold text-ellipsis line-clamp-2;
    font-size: 14px
}
.card-desc{
    @apply text-xs text-gray-500 text-ellipsis line-clamp-4;
    line-height: 1.2rem;
}
.card-status{
    @apply flex text-xs flex-row text-gray-400 gap-6 items-center mt-4;
    
}
.view{
    @apply text-gray-500 font-bold flex items-center gap-1
}
.image{
    @apply w-full h-36 overflow-hidden;
}
.image>img{
    @apply w-full h-full object-cover;
    transition: all .5s;
}
.date-publish{
    @apply flex items-center gap-1 text-gray-400 text-xs mb-2;
}
#news_items_card:hover{
    cursor: pointer;
    transform: scale(1.05);
}
#news_items_card:hover img{
    transform: scale(1.1);
}
</style>
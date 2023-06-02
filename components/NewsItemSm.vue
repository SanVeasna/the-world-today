<template>
    <div class="page-item">
        <div class="image">
            <img :src="`/_nuxt/assets/image/${imagePath}`">
        </div>
        <div class="content">
            <div>
                <div class="title">{{ title }}</div>
                <div class="additional-info">
                    <div class="flex gap-1"><Icon icon="mdi:calendar-month" style="margin-bottom: 2px;" width="14px" height="14px"/><span>{{ datePublish }}</span></div>
                    <div class="flex gap-1 font-bold text-gray-600"><Icon icon="mdi:eye-outline" width="14px" height="14px"/><span>{{ view }}K</span></div>
                </div>
            </div>
            <div class="description">
                {{ description }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {Icon} from '@iconify/vue'
defineProps({
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
    },
    imagePath:{
        type:String,
        required:true
    }
})
</script>
<style scoped>

.page-item {
    @apply flex items-center gap-4;
}

.image {
    @apply w-36 h-24 overflow-hidden flex-grow-0 flex-shrink-0;
    border-radius: 5px;
}

.image>img {
    @apply w-full h-full object-cover;
}

.title {
    @apply text-sm font-bold
}

.additional-info {
    @apply flex items-center gap-4 mt-1 text-xs mb-3;
}

.additional-info>div:nth-child(1){
    color: #118dff;
}

.description {
    @apply text-xs text-gray-500;
    line-height: 1.2rem;
}
</style>
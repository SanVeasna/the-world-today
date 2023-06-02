<template>
    <div class="flex justify-between items-center mb-4 ">
        <div class="menu-title">{{ title }}</div>
        <div class="more-content text-sm"><span>view all </span> <Icon icon="mdi:chevron-double-right"/></div>
    </div>
</template>
<script lang="ts" setup>
import {Icon} from '@iconify/vue';
defineProps({
    title:{
        type:String,
        required:true
    }
})
</script>
<style scoped>
.menu-title{
    @apply w-fit pt-2 pb-2 pl-6 pr-6 border-primary-orange border text-primary-orange text-sm;
    border-radius: 3px;
}
.more-content{
    @apply flex items-center gap-1 text-primary-orange;
}
</style>
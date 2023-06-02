<template>
    <div id="container">
        <div class="item">
            <div class="image rounded-sm overflow-hidden">
                <img :src="`/the-world-today/_nuxt/${imagePath}`"/>
            </div>
            <div class="item-content">
                <div class="published_date">{{ publishedDate }}</div>
                <div class="card_title text-ellipsis line-clamp-2">{{ title }}</div>
                <div class="status">
                    <div class="published_by">By <span class="text-primary-orange">{{ publishedBy }}</span></div>
                    <div class="published_time">{{ time }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
defineProps({
    imagePath:{
        type:String,
        required:true
    },
    publishedDate:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    publishedBy:{
        type:String,
        required:true
    }
})
</script>
<style scoped>
.item{
    border-bottom: 1px solid lightgray;
    padding-bottom: 16px;
    height: 100%;
}
.published_date {
    margin: 12px 0;
    margin-bottom: 8px;
    font-size: 12px;
    color: gray;
}
.card_title {
    font-size: 16px;
    font-weight: bold;
}
.status {
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    margin-top: 16px;
}
.image{
    width: 100%;
    height: 170px;
}
.image>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    @apply hover:scale-150 cursor-pointer;
    transition: all .3s;
}
</style>
<template>
    <div id="hero_section" class="max-w-7xl m-auto">
        <div id="hero_left">
            <div class="mb-9 w-fit relative">
                <h1 class="page-title font-bold mb-4">Most <span class="text-primary-orange">News Read of the</span></h1>
                <h1 class="page-title font-bold relative">Week<div class="border-title"></div></h1>
            </div>
            <div class="flex flex-col gap-4">
                <div class="slide-item h-full">
                    <div class="slide-image rounded-sm overflow-hidden">
                        <img src="~/assets/image/iphone15-banner.webp">
                    </div>
                    <div class="slide-content">
                        <div class="text-bg">
                            <h1 class="title">IPhone 15</h1>
                            <p class="description">
                                Apple in September 2022 released the iPhone 14 and iPhone 14 and 14 Pro 
                                models, but we've been hearing rumors about the iPhone 15 since well before
                                the latest iPhones became available for purchase
                            </p>
                        </div>
                    </div>
                </div>
                <div class="slide-item h-auto flex-grow-0 flex-shrink-0 lmd:h-40">
                    <div class="slide-image rounded-sm overflow-hidden">
                        <img src="~/assets/image/boxing.jpg">
                    </div>
                    <div class="slide-content">
                        <div class="text-bg">
                            <h1 class="title">Samsung Galaxy S24 Ultra —everything 
                            we know so far</h1>
                            <p class="description">With that in mind, we'd expect to see the Galaxy S24 Ultra 
                                debut alongside the rest of the S24 lineup in February 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="hero_right" class="">
            <div class="flex justify-between items-center mb-6">
                <h1 class="title text-5xl font-bold">Latest News</h1>
                <div class="more-content text-sm flex items-center gap-1 text-primary-orange"><span>view all </span> <Icon icon="mdi:chevron-double-right"/></div>
            </div>
            <div class="card-news">
                <HeroItem
                    title="Samsung Galaxy S24 Ultra — everything we know so far"
                    published-by="The World Today"
                    published-date="16 May,2023"
                    time="25 minutes ago"
                    image-path="s24.jpg"
                    />
                <HeroItem
                    title="The productivity of artificial intelligence 
                    may boost our workplaces"
                    published-by="The World Today"
                    published-date="16 May,2023"
                    time="25 minutes ago"
                    image-path="ai.jpg"
                    />
                <HeroItem
                    title="5G is the 5th generation mobile network"
                    published-by="The World Today"
                    published-date="16 May,2023"
                    time="25 minutes ago"
                    image-path="5g.jpg"
                    />
                <HeroItem
                    title="Samsung Galaxy S24 Ultra — everything we know so far"
                    published-by="The World Today"
                    published-date="16 May,2023"
                    time="25 minutes ago"
                    image-path="s24.jpg"
                    />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import {Icon} from '@iconify/vue';
</script>
<style scoped>
.page-title{
    @apply lg:text-4xl text-5xl xl:text-5xl;
}
#hero_section{
    @apply grid lg:grid-cols-2 mt-11;
}

#hero_left{
    @apply lg:pr-3;
}
#hero_right{
    @apply lg:pl-3 lg:border-l border-gray-300 mt-8;
}
.slide-item{
    position: relative;
}
.slide-content{
    position: absolute;
    color: #fff;
    top: 0;
    height: 100%;
    display: flex;
    width: 100%;
    background: #00000069;
}
.title{
    font-size: 20px;
    font-weight: bold;
}
.description{
    font-size: 14px;
    line-height: 30px;
    @apply text-ellipsis line-clamp-3;
}
.text-bg{
    @apply absolute p-6;
    bottom: 5%;
}
.slide-image{
    width: 100%;
    height: 320px;
}
.slide-image>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.border-title::before{
    @apply bg-primary-orange;
    content: '';
    position: absolute;
    width: calc(100% - 140px);
    height: 2px;
    left: 140px;
    bottom: 10px;
}
.card-news{
    @apply grid gap-4 sm:grid-cols-2;
}
.description{
    @apply text-gray-300 mt-2;
}
.slide-image{
    @apply 2sm:h-full;
}
.slide-item:hover .slide-content{
    background: #00000039;
    transition: all .3s;
    cursor: pointer;
}
</style>
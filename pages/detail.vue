<template>
    <div>Hi</div>
    <ins data-revive-zoneid="174" data-revive-id="4ff484e57e8020025aee8261064e4569"></ins>
    <component is="script" async src="//ads1.damrei.digital/www/delivery/asyncjs.php"></component>
    <div id="page_container">
        <div id="content_page">
            <div class="gategory-title">Technology</div>
            <div class="content">
                <h1>{{ title }}</h1>
            </div>
        </div>
        <div id="advertise_section">
            <!-- <div class="flex flex-col gap-6">
                <div id="ads_item">160 x 480</div>
                <div id="ads_item">160 x 480</div>
            </div> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
const title=ref();
const route=useRoute();

onMounted(()=>{
    title.value=route.query['title']??'No title';
    if (window.reviveAsync) window.reviveAsync["4ff484e57e8020025aee8261064e4569"].apply(window.reviveAsync["4ff484e57e8020025aee8261064e4569"].detect())
})

</script>

<style scoped>
#page_container{
    @apply max-w-7xl m-auto flex-row gap-8 block;
}
#content_page{
    @apply w-full h-full;
}
#advertise_section{
    @apply w-40 flex-shrink-0 flex-grow-0;
}
#ads_item{
    @apply w-40 flex items-center justify-center;
    height: 480px;
    border-radius: 7px;
    background: lightgray;
}
@media only screen and (min-width: 1200px){
    #page_container{
        @apply flex;
    }
}
</style>
<template>
    <div>
        <div class="slide-title-image mb-8">
            <div class="image w-full" style="height: 500px;">
                <img src="./../../assets/image/ai_vs_bard.jpg" class="w-full h-full object-cover"/>
            </div>
        </div>
        <div id="page_container" class="">
            <div id="content_page">
                <div id="technology-section">
                    <MenuTitle :title="title"></MenuTitle>
                    <SubPagesTechnology></SubPagesTechnology>
                </div>
            </div>
            <div id="advertise_section">
                <div class="flex flex-col gap-6">
                    <div id="ads_item">160 x 480</div>
                    <div id="ads_item">160 x 480</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const title=ref();
const router=useRoute();

onMounted(()=>{
    title.value=router.params.title??'';
})

</script>

<style scoped>
    #page_container{
        @apply max-w-7xl m-auto flex-row gap-8 block;
    }
    #content_page{
        @apply w-full h-full flex flex-col gap-14;
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
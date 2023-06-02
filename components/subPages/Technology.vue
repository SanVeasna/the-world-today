<template>
    <div id="technology_page">
        <!-- sdfsdfsd -->
        <NewsItemMd
            image-path="ai_vs_bard.jpg"
            title="ChatGPT vs. Bard: An AI Competition but, Which Is Better?"
            description="Blockchain is a method of recording information that makes 
            it impossible or difficult for the system to be change"
            date-publish="15 May,2023"
            view="23"
            @handle-click="()=>onCardClick({'title':'Technology'})"
            />
        <!-- <NewsItemMd
            image-path="printing.jpg"
            title="3D Printing"
            description="technology is 3D printing which is used to formulate prototypes"
            date-publish="15 May,2023"
            view="23"
            />
        <NewsItemMd
            image-path="digital-trust.webp"
            title="Digital Trust"
            description="With people being accommodated and tangled with devices and technologies"
            date-publish="15 May,2023"
            view="23"
            />
        <NewsItemMd
            image-path="geonomic.jpg"
            title="Geonomic"
            description="Imagine a technology that can study your DNA and use it to improve your health"
            date-publish="15 May,2023"
            view="23"
            /> -->
        </div>
</template>
<script lang="ts" setup>
const route=useRouter();
const onCardClick=(cardData:any)=>{
    route.push(`/detail?title=${cardData['title']}`)
}
</script>  
<style scoped>
@media only screen and (min-width:500px){
    #technology_page{
        @apply grid-cols-1;
    }
}
#technology_page {
    @apply grid sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4;
}
</style>
<template>
    <div id="science_page">
            <NewsItemMd
            image-path="nasa.jpg"
            title="NASA Selects 12 Companies to Collaborate on Key Technology Development"
            description="NASA has selected 16 proposals from 12 companies under the 2022
                        Announcement of Collaboration Opportunity (ACO) to advance
                        capabilities and technologies"
            date-publish="15 May,2023"
            view="50"
            />
            <NewsItemMd
            image-path="nasa.jpg"
            title="NASA Selects 12 Companies to Collaborate on Key Technology Development"
            description="NASA has selected 16 proposals from 12 companies under the 2022
                    Announcement of Collaboration Opportunity (ACO) to advance
                    capabilities and technologies"
            date-publish="15 May,2023"
            view="50"
            />
            <NewsItemMd
            image-path="nasa.jpg"
            title="NASA Selects 12 Companies to Collaborate on Key Technology Development"
            description="NASA has selected 16 proposals from 12 companies under the 2022
                    Announcement of Collaboration Opportunity (ACO) to advance
                    capabilities and technologies"
            date-publish="15 May,2023"
            view="50"
            />
            <NewsItemMd
                image-path="nasa.jpg"
                title="NASA Selects 12 Companies to Collaborate on Key Technology Development"
                description="NASA has selected 16 proposals from 12 companies under the 2022
                    Announcement of Collaboration Opportunity (ACO) to advance
                    capabilities and technologies"
                date-publish="15 May,2023"
                view="50"
                />
    </div>
</template>
<script setup>

</script>
<style scoped>
@media only screen and (min-width:500px){
    #science_page{
        @apply grid-cols-1;
    }
}
#science_page {
    @apply grid sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4;
}
</style>
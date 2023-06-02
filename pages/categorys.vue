<template>
    <div>
        <div id="page_container">
            <div id="content_page">
                <div id="technology-section">
                    <MenuTitle title="Technology"></MenuTitle>
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
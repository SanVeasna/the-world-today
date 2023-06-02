<template>
    <div id="sport_page">
        <NewsItemMd 
        title="CAMSOC and the National Sports Federation Push Forward to Prepare for SEA..."
        description="PHNOM PENH: The Stadium Committee of the National Committee of the 32nd 
        Southeast Asian Games in 2023 (CAMSOC) and the National Sports Federation held..."
        image-path="sea_game.jpg"
        date-publish="15 May,2023"
        view="25"
        />
        <NewsItemMd 
        title="Blades seal return to top flight for 2023/24 season after Wednesday's victory..."
        description="Sheffield United have sealed promotion to the Premier League for the 2023/24 season, 
        securing an automatic return after a two-year absence"
        image-path="footer.webp"
        date-publish="15 May,2023"
        view="25"
        />
        <NewsItemMd 
        title="Thailand pushes spat with Cambodia over Kick Boxing for SEA GAMES by banning..."
        description="Following an argument over the origin of kickboxing between Thailand and Cambodia, 
        the World Muaythai Organisation (WMO) has banned Brazilian boxer Thiago Teixeira..."
        image-path="boxing.jpg"
        date-publish="15 May,2023"
        view="25"
        />
        <NewsItemMd 
            title="Thailand pushes spat with Cambodia over Kick Boxing for SEA GAMES by banning..."
            description="Following an argument over the origin of kickboxing between Thailand and Cambodia, 
            the World Muaythai Organisation (WMO) has banned Brazilian boxer Thiago Teixeira..."
            image-path="boxing.jpg"
            date-publish="15 May,2023"
            view="25"
            />
    </div>
</template>
<style scoped>
@media only screen and (min-width:500px){
    #sport_page{
        @apply grid-cols-1;
    }
}
#sport_page {
    @apply grid sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4;
}
</style>
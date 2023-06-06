<template>
    <div class="flex flex-col gap-6">
        <div>
            <HeroSection></HeroSection>
        </div>
        <div id="page_container">
            <!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/0exUCAp1ZRmUjHlqR5hGRw?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> -->
            <!-- <audio controls autoplay>
                <source src="http://139.162.44.201:8055/assets/fb5229da-92f9-40ce-bef0-00f6070ddcab.mp3" type="audio/mp3">
                <source src="https://p.scdn.co/mp3-preview/2726a9595503bf33fdf44d0e85ae8abc7d876d44?cid=774b29d4f13844c495f206cafdad9c86" type="audio/mpeg"/>
            </audio> -->
            <div id="content_page">
                <!-- <div id="technology-section">
                    <MenuTitle title="Technology"></MenuTitle>
                    <SubPagesTechnology></SubPagesTechnology>
                </div>
                <div id="science-section">
                    <MenuTitle title="Science"></MenuTitle>
                    <SubPagesScience></SubPagesScience>
                </div>
                <div id="sport-section">
                    <MenuTitle title="Sport"></MenuTitle>
                    <SubPagesSport></SubPagesSport>
                </div> -->
                <template v-for="value,key in articles">
                    <div class="section">
                        <MenuTitle :title="articles[key][0]['categoryName']"></MenuTitle>
                        <div class="item-content">
                            <template v-for="dd in articles[key]">
                                <NewsItemMd :article="{...dd,imagePath:`http://127.0.0.1:8056/assets/${dd.thumbnail_thumbnail}`}" />
                            </template>
                        </div>
                    </div>
                </template>
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
import axios from 'axios'

const articles=ref();
const articleGroups=ref();
// const axios:any=useNuxtApp().$axios;

const getArticles=async()=>{
    const res=axios.get("http://127.0.0.1:8056/items/articles");
    return (await res).data;
}
const getUsers=async()=>{
    const res=axios.get("http://127.0.0.1:8056/users");
    return (await res).data;
}
const getCategories=async()=>{
    const res= axios.get("http://127.0.0.1:8056/items/categories");
    return (await res).data;
}
const data=await getArticles();
const users=await getUsers();
const categories=await getCategories();
const groupArticles=()=>{
    let dd=data['data'];
    let userList=users['data'];
    let categoryList=categories['data'];
    let groups:any={};
    dd.map((v:any,i:number)=>{
        let user=userList.find((u:any)=>u.id==v.user_created);
        let category=categoryList.find((c:any)=>c.value==v.category);
        if(!groups[v.category]){
            groups[v.category]=[{...v,user_created:user.last_name+" "+user.first_name,categoryName:category['name']}];
        }
        else{
            groups[v.category]=[...groups[v.category], { ...v, user_created: user.last_name+" "+user.first_name, categoryName: category['name'] }];
        }
    })
    return groups;
}

onMounted(async()=>{
    articles.value=groupArticles();
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
    @media only screen and (min-width:500px){
        .item-content{
            @apply grid-cols-1;
        }
    }
    .item-content {
        @apply grid sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4;
    }
    @media only screen and (min-width: 1200px){
        #page_container{
            @apply flex;
        }
    }
</style>
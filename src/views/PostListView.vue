<template>    
        <img alt="Vue logo" src="../assets/logo.png">
            <h1>Posts List</h1>

        <div class="postList">             
            <div v-for="post in posts" :key="post.id" class="container">
                <router-link :to="{name:'postdetail', params:{id: post.id }}">{{ post.title }}</router-link>  
            </div>

        </div>
    
</template>

<script lang="ts" setup>
import PostService from '@/services/PostService';
import { onMounted } from 'vue';

const service = new PostService();
const posts = service.getPosts()

onMounted(async () =>{
await service.fetchAll()
})

</script> 

<style scoped>
.postList{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  width: 100%;
}

.container{
    border: 2px solid cornflowerblue;   
    padding: 20px;
    width: 80vw;
    
}
.container a {
    text-decoration: none;
    cursor: pointer;
    color: #2c3e50;
    font-weight: 600;
    text-transform: uppercase;
}

.container a:hover{
    color:#41B883 ;
}

</style>
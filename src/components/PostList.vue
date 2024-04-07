<template>
    <div>
        <div class="postList">
            <div v-for="post in posts" :key="post.id" class="container">
            <h3 class="title">{{ post.title }}</h3>
            <p class="content">{{ post.body}}</p>
        </div>
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
</style>
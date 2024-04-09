<template>
    <div>
        <h1>Post Detail</h1>
        <div class="postContainer">
<div class="card">

    <h3>{{ data.title}}</h3>
    <p>{{ data.body}}</p>
<div class="back">
    <router-link :to="{name: 'postlist'}">Back</router-link>
</div>
  
</div>
        </div>
    </div>

</template>

<script setup>
import PostService from '../services/PostService';
import {onMounted} from 'vue'
import {useRoute} from 'vue-router'

const service = new PostService();
const data = service.getPost()

onMounted(
    async () =>{
        const route = useRoute()

        let post = route.params.id

        await service.fetchId(post)
    }
)
</script> 

<style scoped>
.postContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
}
.card{
    width: 350px;
    height: auto;
    border: 5px solid #41B883;
    padding: 20px;
}

.back {
    display: inline-block; 
    padding: 5px;
    text-align: center;
    border-radius: 15px;
    border: 2px solid #2c3e50;
    width: 150px;
    margin-top: 1.5rem;
}

.back a{
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
    color: #41B883;
    font-weight: 600;
    display: block; 
    padding: 5px;
  
}

</style>
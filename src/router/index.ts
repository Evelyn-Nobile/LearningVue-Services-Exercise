import PostListView from "../views/PostListView.vue"
import PostDetailView from "../views/PostDetailView.vue"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"



const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect:  {name: 'postlist'},
    },
    {
     path: '/post',
     name: 'postlist',
     component: PostListView
    },

    {
        path: '/post/:id',
        name: 'postdetail',
        component: PostDetailView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
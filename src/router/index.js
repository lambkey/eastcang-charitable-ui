// src/router/index.js

import {createRouter,createWebHistory} from 'vue-router';
import Home from '@/view/home/Home';
import ApplyHelp from '@/view/applyhelp/ApplyHelp.vue';
import OnlineRaise from '@/view/onlineraise/OnlineRaise.vue';
import SourcesActive from "@/view/sourcesactive/SourcesActive";
import NewList from "@/components/news/NewList";
import NewDetail from "@/components/news/NewDetail";
import {ElMessage} from "element-plus";
import Sidebar from "@/view/personal/Sidebar";
// import Personal from "@/view/personal/Personal";
// import Info from "@/components/personal/Info";



const routes = [
    { path: '/', component: Home },
    { path: '/applyhelp', component: ApplyHelp },
    { path: '/onlineraise', component: OnlineRaise },
    {
        path: '/news',
        name:'NewList',
        component: NewList
    },
    {
        path: '/news/detail',
        name: 'NewDetail',
        component: NewDetail,
        // meta: {
        //     requireLogin: true
        // }
    },
    { path: '/sourceactive', component: SourcesActive },

    {
      path: '/personal/:id',
      name: 'Sidebar',
      component: Sidebar,
      meta: {
            requireLogin: true
      },
      // children:[
      //     {
      //         path: '/personal/info/:id',
      //         name: 'Info',
      //         component: Info
      //     }
      // ]
    }


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 路由守护
router.beforeEach((to, from, next) => {
    if (to.meta.requireLogin) {
        // 检查用户是否已登录
        if (userLoggedIn()) {
            // 用户已登录，允许访问受保护的路由
            next();
        } else {
            // 用户未登录，重定向到登录页面或其他处理方式
            ElMessage('请登录再试')
            next();
        }
    } else {
        // 不需要登录认证的路由，直接放行
        next();
    }
});

// 检查用户是否已登录的示例函数
function userLoggedIn() {
    // 在这里执行你的用户登录状态检查逻辑
    // 可能是检查本地存储中的登录凭证、发送请求到服务器验证等
    // 返回true表示用户已登录，返回false表示用户未登录
    return true;
}
export default router;
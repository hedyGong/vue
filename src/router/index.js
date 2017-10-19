import Vue from 'vue';
import Router from 'vue-router';
import home from '../components/home.vue';
//首先先引入你的组件到这里
import head from '../components/head.vue'; //路径要对
import menu from '../components/menu.vue';
Vue.use(Router);
// 这个是路由
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home' //redirect这个的意思就是当你打开页面的时候默认显示这个组件，假设你把这个改成head，就会默认显示这个组件，试试
        }, 
        {
            path: '/home',
            component: home,
            children:[
            {
            path: '/',
            redirect: '/head' //redirect这个的意思就是当你打开页面的时候默认显示这个组件，假设你把这个改成head，就会默认显示这个组件，试试
            },
            {
                path: '/head',
                component: head
            },
             {
                path: '/menu',
                component: menu
            },
             ]
        }, 

    ]
})
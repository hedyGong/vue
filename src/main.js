import Vue from 'vue';
import App from './App.vue';
window.$ = require('jquery'); //这个是jq，引入到mian.js的所有东西都是全局的，所以你在任何组件里都可以使用jq。
import router from './router'; //这个是路由，一样是全局引入的
import http from 'vue-resource'; //这个是ajax也就是老师讲过的$http
import '../static/css/common.css'; //这个是公共的CSS
import cookie from 'vue-cookie'; //这个是cookie，这个插件呢，在你开发的时候做登录页面的时候是经常使用到的，因为每个登录页面都要拿到token，使用这个插件很方便
import vuex from 'vuex';
Vue.use(http); //“记住”，你每次import http from 'vue-resource'，像这样引入了，你就得Vue.use（这里写对应的名称）
Vue.use(cookie);
Vue.use(vuex);
const store = new vuex.Store({ //这个就是vuex，也是属于全局使用的，比如我做案例
    state: {
        a: "123",//就是这里。
        // 获取url里的参数
        callback: function GetQueryString(name, str) {
                var QueryStr = str;
                var reg = new RegExp(name + '[=]{1,1}([a-zA-Z0-9_-]+)');
                if (reg.test(QueryStr)) {
                    return reg.exec(QueryStr)[1];
                };
                return null;
            }
    },
    mutations: {
        increment(state) {},
    }
})
// const store = new vueX.Store({
//     state: {
//         token: "",
//         // domain:"http://wxopen.easydh.cn",
//         domain: "http://yinziqiang.imwork.net",
//         user_id: "",
//         nick_name: "",
//         fun: "",
//         // dizhi:"http://wxopen.easydh.cn/OpenPlatform/SSO_Login",
//         dizhi: "http://yinziqiang.imwork.net/OpenPlatform/SSO_Login",
//         callback: function(res) {
//             var a = document.cookie

//             function GetQueryString(name, str) {
//                 var QueryStr = str;
//                 var reg = new RegExp(name + '[=]{1,1}([a-zA-Z0-9_-]+)');
//                 if (reg.test(QueryStr)) {
//                     return reg.exec(QueryStr)[1];
//                 };
//                 return null;
//             }
//             var c = GetQueryString("token", a)
//             this.token = c
//             if (!this.token || res.body.code == "10002" || !res.body.code) {
//                 location.href = this.dizhi
//             }
//         }
//     },
//     mutations: {
//         increment(state) {
//             sessionStorage.setItem('token', token);
//             store.commit('increment')
//         },
//     }
// })
new Vue({
    router,
    render: h => h(App),
    store: store, //记住，你引入vuex的时候，必须要在这里挂载，挂载方式就是这样的。如果不挂载会报错的
}).$mount('#app');
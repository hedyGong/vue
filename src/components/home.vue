<template>
    <div class="home">
      <!--   这里是写HTML的
        你的所有的HTML文件都是写在这里的，**记住一定时用template  template包住的** -->
        <p @click="ceshi1()">点我试试</p>
        这是组件1
            <router-link :to="{path:'head',query:{id:this.ceshi}}">
                <button>
                    点我跳转
                </button>
            </router-link>
             <router-link :to="{path:'menu',query:{id:this.ceshi}}">
                <button>
                    点我跳转
                </button>
            </router-link>
             <div class="slide1">
        <router-view></router-view>
            </div>
    </div>
</template>
<script>
    export default { 
        created(){
           
                //这里是钩子函数，页面加载完成就执行的
                // alert("我执行了，页面加载完执行了")
                var a = location.href;
                alert(this.$store.state.callback("token",a))
        },
        data(){
            return{
                ceshi:"123"
            }
        },
        methods:{//这里是写所有的方法的地方
            ceshi1(){
                // alert("我触发了")
            }
        }
    }

</script>
<style scoped lang="less">
    @import 'home.less';
</style>

<!--这个组件跳入那个组件是靠路由跳转-->
<!-- 记住这个是基本的组件格式 -->
<!-- <template>  这里是写HTML
    <div class="home">
        
    </div>
</template>

<script>
    export default {这里是写你的JS文件的

    }
</script>

<style scoped lang="less">
这里是css，我这边的是使用了less。如果你没有使用less或者sass，格式就是这种<style>这里写css</style>
    @import 'home.less';
</style> -->
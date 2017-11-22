<template>
    <div class="container"> <!-- 最外层容器 -->
        <div class="menu">  <!-- 左边容器 -->
            <menus></menus>
        </div>
        <div class="content-container">
            <todo></todo>
        </div>       
    </div>
</template>

<script>
    import menus from './menus.vue';  //导入menus组件
    import todo from './todo.vue'; //导入todo组件
    export default {
        components:{  //注册menus组件，让其可以在 template 调用
            menus,
            todo
        }        
    };
</script>
<style lang="less"> 
    @import '../common/style/layouts.less';
</style>

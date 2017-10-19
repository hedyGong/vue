<template>
    <div class="head">
        <p @click="a">这是组件3</p>
        
    </div>
</template>
<script>
    export default {
        created(){
            
        },
        data(){
             return{
               
            } 
        },
        methods:{
            a(){
                //this.$store.state这种就是你获取或者保存到你全局变量vuex里的某个值的地方。
                alert(this.$store.state.a)//这里就会拿到你赋值的值
            }
        }
    }

</script>
<style scoped lang="less">
    @import 'home.less';
</style>

<template>
    <div class="head">
        <p @click="ceshi()">触发事件</p>
        
    </div>
</template>
<script>
    export default { 
        created(){

        },
        data(){
            return{
                ceshikankan:""
            }    
        },
        methods:{
            ceshi(){
               
                this.ceshikankan = "ceshichulail"//看这里，我这段代码是，当你触发这个事件的时候，就给this.ceshikankan赋值。然后在赋值给this.$store.state.a，我在mian。js里是有定义一个a的变量的
                this.$store.state.a = this.ceshikankan
            }
        }
    }

</script>
<style scoped lang="less">

</style>

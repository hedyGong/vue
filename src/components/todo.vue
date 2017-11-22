<template>
    <div class="page lists-show"> <!-- 最外层容器 -->
        <nav> <!-- 容器上半部分 -->
            <div class="nav-group">  <!-- 移动端的菜单图标 -->
                <a href="#" class="nav-item">
                    <span class="icon-list-unordered">
                        
                    </span>
                </a>                
            </div>

            <h1 class="title-page position">
                <span class="title-wrapper">{{todo.title}}</span> <!-- 标题 -->
                <span class="count-list">{{todo.count}}</span> <!-- 数目 -->               
            </h1>

            <div class="nav-group right">  <!-- 右边的删除，锁定图标容器 -->
                <div class="options-web">
                    <a href="#" class="nav-item"> <!-- 锁定图标 -->
                        <span class="icon-lock" v-if="todo.locked"></span>
                        <span class="icon-unlock" v-else></span>
                    </a>
                    <a href="#" class="nav-item"> <!-- 删除图标 -->
                        <span class="icon-trash">
                        </span>
                    </a>
                </div>     
            </div> 

            <div class="form todo-new input-symbol">
                <input type="text" v-model="text" placeholder="请输入" @keyup.enter='onAdd' :disable='todo.locked'>
                <span class="icon-add"></span>                
            </div>
        </nav> 
        <div class="content-scrollable list-items"> <!-- 容器的下半部分 -->
            <div v-for='item in items'>
                <item :item='item'></item>  
            </div>          
        </div>  

    </div>    
</template>

<script>
    import item from './item';
    export default{
        data(){
            return{
                todo:{ //详情内容
                    title:'星期一',
                    count:12,
                    locked:true,
                },
                items:[//代办项列表
                    {checked:false,text:'新的一天',isDelete:false},
                    {checked:false,text:'快乐的一天',isDelete:false},
                    {checked:false,text:'享受的一天',isDelete:false}
                ],
                text:'' //新增代办项绑定的值 
            }
        },
        methods:{
            onAdd(){
                this.items.push({
                    checked:false,text:this.text,isDelete:false
                }); //当用户点击回车时，给items新增一个对象，this.text即是绑定input输入框的值
                this.text="";
            }

        },
        components:{
            item
        }
    }
    
</script>

<style lang='less'>
    @import '../common/style/nav.less';
    @import '../common/style/form.less';
    @import '../common/style/todo.less';    
</style>
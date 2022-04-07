<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord" />&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Search",
        data() {
            return {
                keyWord: ''
            }
        },
        methods: {
            searchUsers() {
                if(this.keyWord==='') return alert("请输入查询所需关键字")
                this.$bus.$emit("userInfo",{isLoading:true,errMsg:'',userList:[],isFirst:false})
                axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    response => {
                        // this.$bus.$emit("userInfo",response.data.items)
                        this.$bus.$emit("userInfo",{isLoading:false,errMsg:'',userList:response.data.items})
                    },
                    error => {
                       console.log("查询失败");
                       this.$bus.$emit("userInfo",{isLoading:false,errMsg:error.message,userList:[]})
                    }
                )
            }
        }
    }
</script>
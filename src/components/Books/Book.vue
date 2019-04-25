<template>
   <div class="card " v-on:click="moreInfo" style="">
       <div class="card-body">
           <img src="https://via.placeholder.com/150/#f2f1ef" width="100%" height="100%" class="card-img">
           <p>Book example</p>
           <p class="badge badge-info">23$</p>
       </div>

   </div>

</template>

<script>
    export default {
        name: "Book",
        methods:{
            moreInfo(){
                console.log('book')
                this.$router.push('/home/3/book');
            }
        }
    }
</script>

<style scoped>

    .card:hover{
        background-color: whitesmoke;
        cursor: pointer;
    }

</style>
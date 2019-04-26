<template>

<div>

    <div class="row m-1">

        <div class="col-md-4">

            <div class="card">
                <div class="card-body">
                    <img src="https://via.placeholder.com/150/#f2f1ef" width="100%" height="100%" class="card-img">
                </div>
            </div>

        </div>

        <div class="col-md-8">

            <div class="card">
                <div class="card-body">

                    <p>Book example</p>
                    <p class="badge badge-info">23$</p>


                    <div class="table-wrapper-scroll-y my-custom-scrollbar">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">Book Provider</th>
                                <th scope="col">Category</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Mohammed Elamin</td>
                                <td class="badge badge-warning text-white">Kids</td>
                                <td >{{quantity}}</td>
                                <td>$-105</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <hr>
                <div style="display: block" class=" text-center ">
                    <button class="btn btn-primary m-1" v-on:click="increaseQuantity()"><i class="fa fa-plus"></i></button>
                    <p class="badge badge-light m-1">{{quantity}}</p>
                    <button class="btn btn-primary m-1" v-on:click="decreaseQuantity()"><i class="fa fa-minus"></i></button>
                </div>

                <button class="m-5 btn btn-outline-info bg-block">Add to cart <i class="fa fa-shopping-cart"></i></button>
            </div>
        </div>

    </div>




    <div class="row m-1">
        <div class="col-md-4">

        </div>
        <div class="col-md-8">

                <div class="card">
                    <div class="card-body">

                        <p>Rating</p>
                        <star-rating v-model="rating" star-size="25"></star-rating>


                        <div class="needs-validation">
                            <form @submit.prevent="submit" class="needs-validation" novalidate>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Your Review</label>
                                    <input  class="form-control" placeholder="Your Review" id="exampleInputEmail1"
                                            name="review" type="text" required>


                                </div>

                                <button type="submit" class="btn btn-outline-info btn-block  text-center">
                                    Review
                                </button>


                            </form>
                        </div>
                    </div>
                </div>

        </div>
    </div>

    <div class="row m-1">


        <div class="col-md-4">

        </div>

        <div class="col-md-8 ">

            <div class="card" >
                <div class="card-body">
                    <div class="row m-1" >
                        <div class="col-3 col-md-2">
                            <img src="https://via.placeholder.com/600/#e8ecf1"  style="max-width: 100%; height: auto"
                                 class="img-fluid   rounded-circle m-2" alt="...">
                        </div>
                        <div class="col-9 col-md-10" id="comment">
                            <div class="row">
                                <div class="col-8">
                                    <p style="color: gray">@Mohammed Elamin</p>
                                </div>
                                <div class="col-4">
                                    <p class="text-right"
                                       style="font-size: xx-small; color: gray; ">10 min ago</p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <p style="font-size: large; color: gray; ">asdasdas asdsd</p>
                                    <div class="row justify-content-between">
                                        <button  class="text-sm btn btn-link">
                                            <i class="fa fa-reply"></i>4
                                        </button>

                                    </div>

                                </div>

                            </div>

                            <div class="ml-1">


                                <div >
                                    <div class="row m-1" >
                                        <div class="col-2" >
                                            <img src="https://via.placeholder.com/600/#e8ecf1" width="100%" height="100%"
                                                 class="img-fluid   rounded-circle m-2" alt="...">
                                        </div>
                                        <div  class="col-10"
                                             style="background-color: #eeeeee; border-radius: 20px">
                                            <div class="row">
                                                <div class="col-6">
                                                    <p style="color: gray">@Mohammed Elamin</p>
                                                </div>
                                                <div class="col-6">
                                                    <p class="text-right"
                                                       style="font-size: xx-small; color: gray; ">10 min ago</p>
                                                </div>
                                            </div>
                                            <p style="font-size: small; color: gray">replay</p>
                                        </div>
                                    </div>
                                </div>


                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</div>
</template>

<script>
    import StarRating from "vue-star-rating/src/star-rating";
    export default {
        name: "BookDetails",
        components: {StarRating},
        data(){
            return{
                quantity:0,
                rating: 0,
                size:30
            }
        },
        methods:{
            increaseQuantity(){
                if (this.quantity>=0)
                {
                    this.quantity+=1;
                }

            },
            decreaseQuantity(){
                if (this.quantity>0)
                {
                    this.quantity-=1;
                }
            }

        }
    }
</script>
<style scoped>
    .my-custom-scrollbar {
        position: relative;
        height: 200px;
        overflow: auto;
    }
    .table-wrapper-scroll-y {
        display: block;
    }
</style>
<template>


    <div>
        <div class="row m-1">

            <div class="col-md-3">

                <div class="card">
                    <div class="card-body">
                        <div class="table-wrapper-scroll-y my-custom-scrollbar">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th scope="col">Total Price</th>
                                    <th scope="col">Tax</th>


                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>$250</td>
                                    <td>$5</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                         <button class="btn btn-outline-info btn-block">Purchases</button>
                    </div>

                </div>

            </div>

            <div class="col-md-9">
                <CartItem></CartItem>
                <CartItem></CartItem>
                <CartItem></CartItem>
                <CartItem></CartItem>


            </div>

        </div>
    </div>

</template>

<script>
    import CartItem from "./CartItem";
    export default {
        name: "MainPage",
        components: {CartItem}
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
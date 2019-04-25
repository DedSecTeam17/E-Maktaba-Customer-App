<template>


    <div class="card mt-1">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img src="https://via.placeholder.com/150/#f2f1ef" width="100%" height="100%" class="card-img">
                </div>
                <div class="col-9">
                    <p>Product name</p>
                    <p>$50</p>
                    <div class="row ">
                        <button class="btn btn-outline-info btn-sm m-1"><i class="fa fa-plus"></i></button>
                        <p class=" m-1">10</p>
                        <button class="btn btn-outline-info btn-sm  m-1"><i class="fa fa-minus"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "CartItem"
    }
</script>

<style scoped>

    .card:hover {
        background-color: whitesmoke;
    }

</style>
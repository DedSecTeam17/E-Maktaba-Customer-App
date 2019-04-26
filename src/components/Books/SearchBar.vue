<template>
    <div class="card mt-2">
        <div class="card-body">
            <form >

                <div class="row">
                    <div class="col-8">
                        <div class="input-group input-focus">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white"><i class="fa fa-search"></i></span>
                            </div>
                            <input type="search" placeholder="Search" class="form-control border-left-0">
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>Category</option>
                                <option>Category</option>
                            </select>
                        </div>
                    </div>

                </div>

            </form>
        </div>
    </div>
</template>



<script>
    export default {
        name: "SearchBar"
    }
</script>

<style scoped>

</style>
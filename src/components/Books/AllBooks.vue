<template>

    <div class="row mt-1">


        <div class="col-md-3 mt-1">
            <Book></Book>
        </div>
        <div class="col-md-3 mt-1">
            <Book></Book>
        </div>
        <div class="col-md-3 mt-1">
            <Book></Book>
        </div>
        <div class="col-md-3 mt-1">
            <Book></Book>
        </div>
        <div class="col-md-3 mt-1">
            <Book></Book>
        </div>
    </div>


</template>

<script>
    import Book from "./Book";

    export default {
        name: "AllBooks",
        components: {Book}
    }
</script>

<style scoped>

</style>
<template>


    <div>
        <SearchBar></SearchBar>
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
    </div>




</template>

<script>
    import Book from "./Book";
    import SearchBar from "./SearchBar";

    export default {
        name: "AllBooks",
        components: {SearchBar, Book}
    }
</script>

<style scoped>

</style>
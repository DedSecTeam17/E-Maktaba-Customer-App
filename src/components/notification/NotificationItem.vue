<template>
    <div>

        <div class="card m-1">
            <div class="card-body">
                <div class="row m-1">
                    <div class="col-3">
                        <img src="https://via.placeholder.com/150/#f2f1ef" style="max-width: 100%; height: auto"
                             class="rounded-circle  img-fluid">
                    </div>

                    <div class="col-9">
                        <p>Hi there customer want chat with you</p>
                        <p>10 min ago</p>

                        <div class="row justify-content-between">
                            <router-link to="/notifications/chat/3" class="btn btn-outline-info btn-sm">
                                Chat
                            </router-link>
                            <button class="btn btn-outline-info btn-sm">
                                Clear
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>

</template>

<script>
    export default {
        name: "NotificationItem"
    }
</script>

<style scoped>

</style>
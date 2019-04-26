<template>

    <div>
       <div class="row">
           <div class="col-12">
               <NotificationItem></NotificationItem>
           </div>
           <div class="col-12">
               <NotificationItem></NotificationItem>
           </div>
           <div class="col-12">
               <NotificationItem></NotificationItem>
           </div>
           <div class="col-12">
               <NotificationItem></NotificationItem>
           </div>
       </div>


    </div>

</template>

<script>
    import NotificationItem from "./NotificationItem";
    export default {
        name: "AllNotifications",
        components: {NotificationItem}
    }
</script>

<style scoped>

</style>
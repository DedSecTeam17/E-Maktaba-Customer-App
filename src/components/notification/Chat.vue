<template>


    <div class="row m-1">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12" style="height: 400px; overflow-y: scroll">
                            <ReciverMessage></ReciverMessage>
                            <SenderMessage></SenderMessage>
                            <ReciverMessage></ReciverMessage>
                            <SenderMessage></SenderMessage>
                            <ReciverMessage></ReciverMessage>
                            <SenderMessage></SenderMessage>
                            <ReciverMessage></ReciverMessage>
                            <SenderMessage></SenderMessage>
                        </div>

                    </div>

                    <div class="row m-1">
                        <div class="col-12">

                            <form>
                                <div class="row ">
                                    <div class="col-md-10">
                                        <div class="form-group">
                                            <input class="form-control" placeholder="Your message" id="message"
                                                   name="Message" type="text">
                                        </div>
                                    </div>
                                    <div class="col-md-2">

                                        <button type="submit" class="btn btn-primary     text-center">
                                            <i class="far fa-paper-plane"></i>
                                        </button>
                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>

</template>

<script>
    import ReciverMessage from "./ReciverMessage";
    import SenderMessage from "./SenderMessage";

    export default {
        name: "Chat",
        components: {SenderMessage, ReciverMessage}
    }
</script>

<style scoped>

</style>
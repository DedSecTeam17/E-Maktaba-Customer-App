<template>

    <div>
        <GmapMap ref="mapRef"
                :center="{lat:10, lng:10}"
                :zoom="7"
                map-type-id="terrain"
                 @click="message(position)"
                style="width: 500px; height: 300px"
        >
            <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
            />
        </GmapMap>
    </div>
</template>

<script>
    export default {
        name: "UserLocation",
        data() {
            return {
                markers: [],
                place: null,
            }
        },
        mounted () {
            // At this point, the child GmapMap has been mounted, but
            // its map has not been initialized.
            // Therefore we need to write mapRef.$mapPromise.then(() => ...)

            this.$refs.mapRef.$mapPromise.then((map) => {
                map.panTo({lat: 0.38, lng: 44.80})

            })


        },
        description: 'Autocomplete Example (#164)',
        methods: {
            message(){
              console.log(position)
            },
            setDescription(description) {
                this.description = description;
            },
            setPlace(place) {
                this.place = place
            },
            usePlace(place) {
                if (this.place) {
                    this.markers.push({
                        position: {
                            lat: this.place.geometry.location.lat(),
                            lng: this.place.geometry.location.lng(),
                        }
                    })
                    this.place = null;
                }
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="movie-cast-section">

        <div class="movie-cast mt-2">
            <div class="row mb-3">
                <div class="col-md-6"><h5>Full Cast</h5></div>
                <div class="col-md-6 text-right">
                    <b-btn v-b-modal.addCastModal variant="primary" class="btn btn-xs">
                        Add <fa icon="plus"/>
                    </b-btn>
                </div>
            </div>

            <figure class="figure">
                <img src="http://placehold.it/50x50" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
                <figcaption class="figure-caption">
                    <b>Jack Daniels</b> <br>
                    <small>as</small> "The Skemberdo"
                </figcaption>
            </figure>

            <figure class="figure">
                <img src="http://placehold.it/50x50" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
                <figcaption class="figure-caption">
                    <b>Jack Daniels</b> <br>
                    <small>as</small> "The Skemberdo"
                </figcaption>
            </figure>

            <figure class="figure">
                <img src="http://placehold.it/50x50" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
                <figcaption class="figure-caption">
                    <b>Jack Daniels</b> <br>
                    <small>as</small> "The Skemberdo"
                </figcaption>
            </figure>

            <figure class="figure">
                <img src="http://placehold.it/50x50" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
                <figcaption class="figure-caption">
                    <b>Jack Daniels</b> <br>
                    <small>as</small> "The Skemberdo"
                </figcaption>
            </figure>


            <div class="cast-total">
                <small>10 Total</small>
            </div>
        </div>


        <!-- Modal -->
        <b-modal id="addCastModal" 
                centered
                title="Adding New Cast"
                ref="addCastModal"
                hide-footer="true">
            <b-form class="mb-3" ref="addActorForm" @submit="handleSubmit">
                <b-form-group 
                    id="grpActorName"
                    label="Actor's Name: "
                    label-for="actor-name"
                    description="Enter the name of the actor that belong to this movie.">
                    <b-form-input id="actor-name"
                                type="text"
                                required
                                placeholder="Enter Name" />
                </b-form-group>
                <b-form-group 
                    id="grpActorRole"
                    label="Actor's Role: "
                    label-for="actor-role"
                    description="Enter the role of the actor in this movie.">
                    <b-form-input id="actor-role"
                                type="text"
                                required
                                placeholder="Enter Role" />
                </b-form-group>

                <b-button size="sm" type="submit" variant="primary">Submit</b-button>
                <b-btn size="sm" @click="onHideModal">Cancel</b-btn>
            </b-form>
        </b-modal>
                
    </div>
</template>

<script>
export default {
    methods: {
        onHideModal() {
            this.$refs.addCastModal.hide()
        },

        onSubmit(evt) {
            evt.preventDefault()
            this.$refs.addActorForm.submit()
        },

        handleSubmit(e) {
            e.preventDefault()
            alert("testing this")
        }
    }
}
</script>


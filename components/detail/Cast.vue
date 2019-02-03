<template>
    <div class="movie-cast-section">

        <div class="movie-cast mt-2">
            <div class="row mb-3">
                <div class="col-md-6"><h5>Full Cast</h5></div>
                <div class="col-md-6 text-right">
                    <b-btn variant="primary" class="btn btn-xs" @click="onAddActor">
                        Add <fa icon="plus"/>
                    </b-btn>
                </div>
            </div>

            <!-- https://en.wikipedia.org/w/api.php?action=query&titles=Tobey%20Maguire&prop=pageimages&format=json&pithumbsize=100 -->
            <figure v-for="actor, index in cast"
                    v-bind:key="index"
                    class="figure">
                <img src="http://placehold.it/50x50" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
                <figcaption class="figure-caption">
                    <b>{{ actor.name }}</b> <br>
                    <small>as</small> "{{ actor.role }}"
                </figcaption>
                <div class="actor-actions">
                    <span class="actor-remove" @click="onRemoveActor(index)"><fa icon="times" /></span>
                    <span class="actor-edit" @click="onEditActor(index)"><fa icon="edit" /></span>
                </div>
            </figure>


            <div class="cast-total">
                <small>{{ cast.length }} Total</small>
            </div>
        </div>


        <!-- Modal -->
        <b-modal id="removeCastModal" 
                centered
                title="Removing Cast"
                ref="removeCastModal">
            <h5>Are you sure you want to remove {{ actorToDelete ? '"' + actorToDelete.name + '"' : '' }} from the cast?</h5>
            <div slot="modal-footer" class="w-100">
             <b-btn size="sm" class="float-right ml-1" @click="onHideModal">
               No
             </b-btn>
             <b-btn size="sm" class="float-right" variant="primary" @click="onRemoveConfirm">
               Yes
             </b-btn>
           </div>
        </b-modal>

        <!-- Modal -->
        <b-modal id="addCastModal" 
                centered
                title="Adding New Cast"
                ref="addCastModal"
                :hide-footer="true"
                @shown="onShownModal">
            <b-form class="mb-3" ref="addActorForm" @submit="handleSubmit">
                <b-form-group 
                    id="grpActorName"
                    label="Actor's Name: "
                    label-for="actor-name"
                    description="Enter the name of the actor that belong to this movie.">
                    <b-form-input id="actor-name"
                                ref="actorName"
                                type="text"
                                required
                                placeholder="Enter Name"
                                v-model="actorName" />
                </b-form-group>
                <b-form-group 
                    id="grpActorRole"
                    label="Actor's Role: "
                    label-for="actor-role"
                    description="Enter the role of the actor in this movie.">
                    <b-form-input id="actor-role"
                                ref="actorRole"
                                type="text"
                                required
                                placeholder="Enter Role"
                                v-model="actorRole" />
                </b-form-group>

                <b-button size="sm" type="submit" variant="primary">Submit</b-button>
                <b-btn size="sm" @click="onHideModal">Cancel</b-btn>
            </b-form>
        </b-modal>
                
    </div>
</template>

<script>

export default {
    props: {
        cast: { type: Array, default: Object },
        movieId: { type: String, default: '' }
    },

    data: () => {
        return {
            actorName: null,
            actorRole: null,
            actorToDelete: null,
            castIndex: null
        }
    },
    created() {
        this.actorName = null
        this.actorRole = null
    },

    methods: {
        onShownModal() {
            this.$refs.actorName.focus()
        },
        onHideModal() {
            this.$refs.addCastModal.hide()
            this.$refs.removeCastModal.hide()
        },

        onSubmit(evt) {
            evt.preventDefault()
            this.$refs.addActorForm.submit()
        },

        onAddActor() {
            this.resetForm()
            this.$refs.addCastModal.show()
        },

        onEditActor(id) {
            this.castIndex = id
            this.actorName = this.cast[id].name
            this.actorRole = this.cast[id].role
            this.$refs.addCastModal.show()
        },

        onRemoveActor(id) {
            this.actorToDelete = this.cast[id]
            this.actorToDelete.id = id
            this.$refs.removeCastModal.show()
        },

        resetForm() {
            this.actorName = null
            this.actorRole = null
            this.castIndex = null
        },

        handleSubmit(e) {
            e.preventDefault()

            let url = process.env.baseUrl + '/api/cast'
            let data = {
                movie_id: this.movieId,
                actor_name: this.actorName,
                actor_role: this.actorRole,
            }

            let response = (res) => {
                if (res.status) {

                    let castInfo = {
                        name: this.actorName,
                        role: this.actorRole
                    }
                    if (this.castIndex) {
                        this.cast[this.castIndex] = castInfo
                    } else {
                        this.cast.push(castInfo)
                    }

                    this.resetForm()
                    this.onHideModal()
                }
            }

            if (this.castIndex) {
                data.cast_id = this.castIndex
                this.$axios.$put(url, data).then(response)
            } else {
                this.$axios.$post(url, data).then(response)
            }
        },

        onRemoveConfirm() {
            this.$refs.removeCastModal.hide()
            let url = process.env.baseUrl + '/api/cast'
            let data = {
                movie_id: this.movieId,
                cast_id: this.actorToDelete.id
            }
            self = this
            this.$axios.$delete(url, {data: data}).then( res => {
                if (res.status) {
                    self.$emit('removeCast', this.actorToDelete.id);
                    this.actorToDelete = null
                }
            })
        }
    }
}
</script>


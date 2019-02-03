<template>
    <div class="container-fluid bg-dark pb-5">
        <div class="row">

            <!-- <div class="movie-screen bg-dark" style="background-image: url('//picsum.photos/2200/1200')"></div> -->

            <div class="col-lg-12">

                <!-- Movie Content -->
                <div class="movie-content mt-5">
                    <div class="container">
                        <div class="row">

                            <!-- Title and Photo of the movie -->
                            <div class="col-md-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h2>{{ movie.title }}</h2>
                                    </div>
                                    <div class="card-block">
                                        <img class="movie-image" :src="movie.image" alt="">
                                    </div>
                                </div>
                                <div class="movie-rating">
                                    <fa icon="star" class="active" />
                                    <fa icon="star" />
                                    <fa icon="star" />
                                    <fa icon="star" />
                                    <fa icon="star-half" />
                                </div>
                            </div>

                            <!-- Detail Information -->
                            <div class="col-md-8">

                                <div class="card">

                                    <div class="card-header">
                                        <h2>Movie <span class="primary-color">Informations</span></h2>
                                    </div>

                                    <div class="card-block">
                                        <div class="container mt-5 mb-2">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <!-- summary -->
                                                    <p class="mb-5">{{ movie.summary }}</p>

                                                    <!-- tags -->
                                                    <Genres :genres="movie.genres" class="mb-3" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card-footer">
                                        <!-- movie cast -->
                                        <Cast :cast="movie.cast" :movieId="movie._id" @removeCast="removeCast" />
                                    </div>

                                </div>
                            </div>
                            <!-- End of Detail Information -->

                        </div>
                    </div>
                </div>
                <!-- End of Movie Content -->

            </div>
        </div>
    </div>
</template>


<script>
import Cast from "@/components/detail/Cast"
import Genres from "@/components/detail/Genres"

export default {
    asyncData ({app, params}) {
        return app.$axios
                .$get(process.env.baseUrl + '/api/movies/' + params.slug)
                .then(({ data }) => {
                    return {
                        movie: data
                    }
                })
    },
    validate ({ params }) {
        // Must contain a slug atleast
        return params.slug
    },
    components: {
        Cast,
        Genres
    },

    methods: {
        removeCast(id) {
            this.movie.cast.splice(id, 1)
        }
    }
}
</script>

<style lang="scss">


</style>

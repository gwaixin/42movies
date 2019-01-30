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
                                        <h2>Title Here Title here and Here</h2>
                                    </div>
                                    <div class="card-block">
                                        <img class="movie-image" src="//picsum.photos/300/500" alt="">
                                        
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
                                                    <Summary class="mb-5" />

                                                    <!-- tags -->
                                                    <Genres class="mb-3" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card-footer">
                                        <!-- movie cast -->
                                        <Cast />
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
import Summary from "@/components/detail/Summary"

export default {
    validate ({ params }) {
        // Must contain a slug atleast
        return params.slug
    },
    components: {
        Cast,
        Genres,
        Summary
    }
}
</script>

<style lang="scss">

.movie-content {
    width: 100%;
    .card {

        background-color: rgba(55, 55, 55, 0.5);
        color: #fff;

        .movie-image {
            width: 100%;
        }
    }

    .movie-rating {
        margin-top: 10px;
        .active { color: lighten(gold, 20%); }
    }

    .movie-cast {
        figure {
            margin-right: 20px;
            img { float: left; margin-right: 10px; }
            figcaption.figure-caption { display: inline-block; }
        }
    }
}

.movie-screen {
    position: absolute;
    min-height: 800px;
    width: 100%;
    z-index: -1;
}
</style>

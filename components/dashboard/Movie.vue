<template>
    <div class="card flex-md-row mb-4 box-shadow h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
            <strong v-if="movie.is_featured" class="d-inline-block mb-2 text-primary">Featured</strong>
            <h3 class="mb-0">
                <router-link :to="'/detail/' + movie.slug" class="text-dark" >{{ movie.title }}</router-link>
            </h3>
            <small v-if="movie.year">({{ movie.year }})</small>
            <div class="mt-2 mb-1 text-muted">
                <Genres :genres="movie.genres.slice(0, 3)" />
            </div>
            <p class="card-text mb-1 mb-auto">{{ movie.summary | limitized }}</p>
            <div class="">
                <small>{{ movie.cast | firstthree }}</small>
            </div>
        </div>
        <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style="width: 200px; height: 250px;" :src="movie.image" data-holder-rendered="true">
    </div>
</template>

<script>
import Genres from '@/components/detail/Genres'

export default {
    components: {
        Genres
    },
    filters: {
        limitized(str) { 
            return str.substr(0, 100) + '...'
        },

        firstthree(cast) {
            return cast.slice(0, 3).map(i => i.name).join(', ')
        }
    },
    props: {
        movie: { type: Object, default: () => {} }
    }
}
</script>

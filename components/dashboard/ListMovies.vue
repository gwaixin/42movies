<template>
  <div>
    <div class="row">
      <div v-if="movies.length == 0" class="col-md-12">
        No movie found
      </div>
      <div 
          v-for="(movie, index) in movies"
          :key="'movie-' + index" 
          class="col-md-12" :class="movie.is_featured ? 'col-lg-12' : 'col-lg-6'">
          <Movie :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import Movie from '~/components/dashboard/Movie'

export default {
  components: {
    Movie
  },
  props: {
    movies: { type: Array, default: () => {} }
  }
}
</script>
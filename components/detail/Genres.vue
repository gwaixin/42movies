<template>
    <div class="movie-categories">
        <span v-for="genre, key in genres"
            v-bind:key="'genre-' + key"
            class="badge badge-pill badge-secondary mr-1">
            {{ genre.name }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        genres: { type: Array, default: () => {} }
    }
}
</script>
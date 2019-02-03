<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <h2><fa icon="home" /> Dashboard</h2>
            </div>
        </div>

        <div class="row mt-3 mb-3">
            <div class="col-md-6">
                <Search :startSearch="onSearch" />
            </div>
            <div class="col-md-6">
                <div class="sticky-top filter-section pt-1">
                    <no-ssr>
                        <v-select id=""
                            :options="filterOptions"
                            placeholder="Filter by category"
                            v-model="genre" />
                    </no-ssr>
                </div>
            </div>
        </div>

        <ListMovies :movies="movies" />
    </div>
</template>

<script>
import Search from '~/components/dashboard/Search'
import ListMovies from '~/components/dashboard/ListMovies'


export default {
    asyncData ({ app }) {
        return app.$axios.$get(process.env.baseUrl + '/api/movies')
                .then(({ data }) => {

                  return {
                    movies: data
                  }
                })
    },
    data: () => {
        return {
            filterOptions: [],
            genre: null,
            keyword: '',
            genreId: ''
        }
    },
    created() {
        this.$axios
            .$get(process.env.baseUrl + '/api/genres')
            .then(res => {
                if (res.status) {
                    this.filterOptions = res.data.map(item => ({key: item._id, label: item.name}))
                }
            })
    },
    watch: {
        genre: function(val, oldVal) {
            if (val == null || val == oldVal) { return }
            this.genreId = val.key
            this.getMovies()
        }
    }, 
    components: {
        Search,
        ListMovies
    },
    methods: {

        onSearch(keyword) {
            this.keyword = keyword
            this.getMovies()
        },

        getMovies() {
            var url = process.env.baseUrl + '/api/movies'
            let params = []

            if (this.keyword) {
                params.push('search=' + this.keyword)
            }

            if (this.genreId) {
                params.push('genre=' + this.genreId)
            }

            url += params.length > 0 ? '?' + params.join('&') : ''

            this.$axios
                .$get(url)
                .then(res => {
                    this.movies = res.data
                })
        }
    }
}
</script>





<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <h2><fa icon="home" /> Dashboard</h2>
            </div>
        </div>

        <div class="row mt-3 mb-3">
            <div class="col-md-6">
                <Search />
            </div>
            <div class="col-md-6">
                <div class="sticky-top filter-section pt-1">
                    <no-ssr>
                        <v-select id="" :options="['foo','bar']"  placeholder="Filter by category"></v-select>
                    </no-ssr>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6 col-md-12"><ListItem /></div>
            <div class="col-lg-6 col-md-12"><ListItem /></div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-12"><ListItem /></div>
            <div class="col-lg-6 col-md-12"><ListItem /></div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-12"><ListItem /></div>
            <div class="col-lg-6 col-md-12"><ListItem /></div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12"><ListItem /></div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-12"><ListItem /></div>
            <div class="col-lg-6 col-md-12"><ListItem /></div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-12"><ListItem /></div>
            <div class="col-lg-6 col-md-12"><ListItem /></div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-12"><ListItem /></div>
            <div class="col-lg-6 col-md-12"><ListItem /></div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-12"><ListItem /></div>
            <div class="col-lg-6 col-md-12"><ListItem /></div>
        </div>
    </div>
</template>

<script>
import Search from '~/components/dashboard/Search'
import ListItem from '~/components/dashboard/ListItem'


export default {
    components: {
        Search,
        ListItem
    },
}
</script>

<style lang="scss">
    
</style>





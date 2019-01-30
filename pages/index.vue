<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2><fa icon="home" /> Dashboard</h2>
            </div>
        </div>

        <div class="row">
            <div class="col-md-8">
                <Search />

                <div class="mt-2">
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
            </div>
            <div class="col-md-4">
                <div class="sticky-top filter-section">
                    <h5 class="text-right mb-4 mt-3">Filter by Category</h5>
                    <no-ssr>
                        <v-select id="" :options="['foo','bar']"  placeholder="No Filter"></v-select>
                    </no-ssr>
                </div>
            </div>
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
    .filter-section {

        .dropdown-toggle::after {
            content: none!important;
            
        }
    }
</style>





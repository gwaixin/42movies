<template>
    <div class="card flex-md-row mb-4 box-shadow h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
            <strong class="d-inline-block mb-2 text-primary">New</strong>
            <h3 class="mb-0">
            <router-link to="/detail/test" class="text-dark" >Featured post</router-link>
            </h3>
            <div class="mb-1 text-muted">
                <span class="badge badge-pill badge-secondary">Horror</span>
                <span class="badge badge-pill badge-secondary">Thrill</span>
                <span class="badge badge-pill badge-secondary">Suspense</span>
            </div>
            <p class="card-text mb-1">This is a wider card with supporting text below as a natural lead-in to additional content...</p>
            <div class="mb-auto">
                <small>Ely Buendia, Rico Blanco, Chito Miranda</small>
            </div>
            <a href="#">View details</a>
        </div>
        <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style="width: 200px; height: 250px;" src="https://picsum.photos/200/250" data-holder-rendered="true">
    </div>
</template>

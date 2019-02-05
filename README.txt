# Movies42

> 42race practice test

## Requirements
1. Node version latest or v10.15.0
2. Mongo version latest or v4.0.5
3. NPM version latest or 6.4.1


## Build Setup

``` bash
# install dependencies
$ npm install
```

``` bash
# run mongod
$ mongod
```
> After mongod you should be able to see this [Screenshot](https://gyazo.com/94d5f48297d6a871f0251357ed19a8b1)
<br>

``` bash
# serve with hot reload at localhost:3000
$ npm run dev
```


``` bash
# seeds movie data by opening your browser then enter this url
[GET] localhost:3000/api/seed-movies
```
> After you should be able to see this results [Screenshot](https://gyazo.com/ed1c127403e6987e9107bb9a1e456eb3)

> These should be in order, if everything went well you can visit this project in ``` localhost:3000```

<br>

``` bash
# [Optional] you can also remove all data by entering this url
[GET] localhost:3000/api/unseed-movies
```
> After you should be able to see this result [Screenshot](https://gyazo.com/1bb48b793a14236d38219a20e9d93ae8)
<br>



## API


``` bash
# Fetch all movies
[GET] /api/movies
```

``` bash
# Fetch all movies filter by keywords title
[GET] /api/movies?search=war
```

``` bash
# Fetch all movies filter by genre
# @params.genre -> id of the genre
[GET] /api/movies?genre=5c593998def33732c4022453
```

``` bash
# Fetch a specific movie by slug
[GET] /api/movies/pet-sematary
```


``` bash
# Insert a movie
# test data types
let data = {
    title: String,
    summary: String,
    image: String,
    cast: Array[{Objects}],
    slug: String,
    ratings: Integer,
    is_featured: Boolean,
    year: Integer,
}
[POST] /api/movies
```


``` bash
# Update a movie
# test data types
let data = {
    title: String,
    summary: String,
    image: String,
    cast: Array[{Objects}],
    slug: String,
    ratings: Integer,
    is_featured: Boolean,
    year: Integer,
}
[PUT] /api/movies          # requires specific @data.id
[PUT] /api/movies/:slug    # requires specific @slug
```


``` bash
# Delete a movie
[DELETE] /api/movies/:slug # requires specific @slug

```


## Configurations
> Optional

### A. Incase you want to use another port

open this file :
``` /nuxt.config.js ```

Then edit line # 6 and change ```http://localhost:3000``` to ```http://localhost:4000``` or any port you want.

### B. You want to separate server port

open this file:
``` /server/index.js ```

Then edit line # 17 and change ```http://localhost:3000``` to ```http://localhost:4000``` or any port you want.

### C. You can also create .env file

create .env file and place this codes

``` bash
HOST=127.0.0.1
PORT=3001
DB_SCHEMA=mongodb
DB_HOST=localhost
DB_NAME=db_42movies
```



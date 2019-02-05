import { resolve } from 'path'
import { Nuxt, Builder } from 'nuxt'
import { JSDOM } from 'jsdom'
import test from 'ava'
import axios from 'axios'

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null

// Init Nuxt.js and start listening on localhost:4000
test.before('Init Nuxt.js', async t => {
  const rootDir = resolve(__dirname, '..')
  let config = {}
  try { config = require(resolve(rootDir, 'nuxt.config.js')) } catch (e) {}
  config.rootDir = rootDir // project folder
  config.dev = false // production build
  config.mode = 'universal' // Isomorphic application
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  nuxt.listen(4000, 'localhost')

  axios.defaults.baseURL = config.env.baseUrl
  axios.defaults.headers.common['Accept'] = 'application/json'
})

// Example of testing only generated html
test('Client: Verify project title as "42 Movies"', async t => {
  let context = {}
  const { html } = await nuxt.renderRoute('/', context)
  t.true(html.includes('<h1><span class="primary-color">42</span> MOVIES</h1>'))
})

test('API: Fetch All Movies -> get /api/movies ', async t => {
  let params = {}
  const res = await axios.get('/api/movies', params)
  // it should be ok
  t.true(res.status == 200)
  // it should be not empty
  t.true(res.data.data.length > 0)
})

test('API: Insert Movie -> post /api/movies', async t => {
  // test data insert
  let data = {
    title: "Test Movie",
    summary: "This is only a test movie",
    image: "https://picsum.photos/250/400/?random",
    slug: "test-movie"
  }
  const res = await axios.post('/api/movies', data)
  // it should be okay
  t.true(res.status && res.data.status)

})

test('API: Update Movie by slug -> put /api/movies/:slug', async t => {
  // new slug to update
  let data = {
    slug: "test-movie-updated"
  }
  const res = await axios.put('/api/movies/test-movie', data)
  // it should be okay
  t.true(res.status && res.data.status)
})


test('API: Fetch Movie by slug -> get /api/movies/:slug', async t => {
  
  // try to fetch with unknown slug
  let res1 = await axios.get('/api/movies/unknown-slug')
  // it should be ok but no data
  t.true(res1.status == 200 && !res1.data.data)


  // try to fetch with existing slug
  let res2 = await axios.get('/api/movies/test-movie-updated')
  // it should be okay
  t.true(res2.status == 200 && typeof res2.data.data === 'object')

})

test('API: Delete Movie -> del /api/movies/:slug', async t => {
  // try to delete with existing slug
  const res = await axios.delete('/api/movies/test-movie-updated')
  // it should be okay
  t.true(res.status && res.data.status)
})

test('API: Unseeding Movies -> /api/unseed-movies', async t => {
  const res = await axios.get('/api/unseed-movies')
  // it should be okay
  t.true(res.status && res.data.status)
})

test('API: Seeding Movies -> /api/seed-movies', async t => {
  const res = await axios.get('/api/seed-movies')
  t.true(res.status && res.data.status)
})

// Close the Nuxt server
test.after('Closing server', t => {
  nuxt.close()
})
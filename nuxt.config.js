import pkg from './package'
import seasons from './content/envivo/seasons.json'

async function generateRoutes () {
  const routes = []

  for (let season of seasons) {
    const posts = await import(`./content/envivo/${season.slug}/posts.json`)
    for (let post of posts.default) {
      routes.push({
        route: `/envivo/${season.slug}/${post.slug}`,
        payload: post
      })
    }
  }

  return routes
}

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Julián Duque - Developer and Educator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      class: 'has-navbar-fixed-top'
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/markdownit'
  ],

  /*
  ** Generate
  */
  generate: {
    routes: generateRoutes
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

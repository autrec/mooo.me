import axios from 'axios'
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: 'https://hm.baidu.com/hm.js?409a7a374fbcec1acc64716522171ae2'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  //loading: '~/components/loading.vue',
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
    '~/plugins/axios',
    '~/plugins/baiduGa'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    publicPath: 'https://cdn.mooo.autre.cn',
    extend (config, ctx) {
    }
  },
  generate: {
    dir: 'dist',
    routes () {
      return axios.get('https://zycao.com/wp-json/wp/v2/posts?per_page=100')
        .then((res) => {
          var num = 0, blockchain_num = 0
          var routes = res.data.map((post) => {
            num++
            if(post.categories.indexOf(1621)>-1){
              blockchain_num++
            }
            return {
              route: '/post/' + post.id,
              payload: post
            }
          })
          routes.push('/')
          //分页
          for(var i=2;i<parseInt(num/10)+2;i++){
            routes.push(`/page/${i}`)
          }
          //分类分页
          routes.push('/blockchain')
          for(var i=2;i<parseInt(blockchain_num/10)+2;i++){
            routes.push(`/blockchain/${i}`)
          }
          return routes
        })
    }
  },
  validate({ params, query }) {
    //return /^d+$/.test(params.id) // must be number
  }
}

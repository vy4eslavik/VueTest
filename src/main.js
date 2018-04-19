// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { Carousel, CarouselItem } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../node_modules/vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: '#ff8000',
    accent: '#ff8000'
  }
})
Vue.use(Carousel)
Vue.use(CarouselItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

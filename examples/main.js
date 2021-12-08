import Vue from 'vue'
import App from './App.vue'

import upfile from '../packages/index'

Vue.use(upfile)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

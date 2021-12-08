import upfile from './src/index.vue'

upfile.install = function (Vue) {
  Vue.component(upfile.name, upfile)
}

export default upfile

<template>
  <div id="app">
    <up-file @upfile="upfile"></up-file>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: { },
  methods: {
    upfile (formdata) {
      console.log(formdata.get('file'))
    }
  }
}
</script>

<style lang="less"></style>

<template>
  <div
    :class="{ 'up-file': styleSwitch }"
    :style="{ backgroundColor: backgroundColor, color: color }"
    @click.self="proposal"
  >
    <span>{{ text }}</span>
    <input
      type="file"
      :name="fileName"
      class="file"
      id="file"
      ref="file"
      @change="upfile"
    />
  </div>
</template>

<script>
export default {
  name: 'UpFile',
  props: {
    fileName: {
      type: String,
      default: 'file'
    },
    text: {
      type: String,
      default: '选择文件'
    },
    backgroundColor: {
      type: String,
      default: '#0096fa'
    },
    color: {
      type: String,
      default: '#f5f5f5'
    },
    styleSwitch: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    proposal () {
      this.$refs.file.click()
    },
    upfile () {
      const formdata = new FormData()
      formdata.append(this.$props.fileName, this.$refs.file.files[0])
      this.$emit('upfile', formdata)
    }
  }
}
</script>

<style lang="less" scoped>
.up-file {
  width: 232px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 80px;
  line-height: 1;
  font-size: 18px;
  font-weight: 700;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  .file {
    display: none;
  }
}
</style>

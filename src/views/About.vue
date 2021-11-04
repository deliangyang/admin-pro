<template>
  <div class="about">
    <h1>This is an about page 1</h1>
    <a-button type="primary">Primary Button</a-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {}
})
export default class About extends Vue {}
</script>

<style lang="less" scoped>
h1 {
  color: red;
}
</style>

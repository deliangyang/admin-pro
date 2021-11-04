<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App 12"/>
    <template>
      <a-button type="primary">Primary Button</a-button>
      <a-button>Default Button</a-button>
      <a-button type="dashed">Dashed Button</a-button>
      <a-button type="text">Text Button</a-button>
      <a-button type="link">Link Button</a-button>
    </template>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { Button } from 'ant-design-vue'

@Options({
  components: {
    HelloWorld,
    Button
  }
})
export default class Home extends Vue {}
</script>

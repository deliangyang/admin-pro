import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';
import vue from '@vitejs/plugin-vue'

const path = require('path')

function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}

export default {
  resolve: {
    alias: {
      '@': _resolve('src'),
      '@components': path.resolve(__dirname, 'src/components')
    },
  },
  plugins: [
    vue(),
    /* ... */
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
  ],
};
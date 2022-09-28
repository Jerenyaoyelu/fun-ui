import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve('./src'),
      },
    ],
  },
  base: './',
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       charset: false,
  //       additionalData: `@import "${path.resolve(__dirname, './src/global.less')}"`,
  //     },
  //   },
  // },
});

import { defineConfig } from 'vite';
import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import StylelintPlugin from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [StylelintPlugin({fix: true}),vue() as PluginOption, VueSetupExtend()],
  server: {
    host:'0.0.0.0'
  }
});


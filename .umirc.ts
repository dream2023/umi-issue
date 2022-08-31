import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  chainWebpack: function (config, { webpack }) {
    config.optimization.splitChunks({
      maxSize: 1000 * 1024,
    });
  },
});

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { importAssets } from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    importAssets({
      sources: (defaultSources) => [
        ...defaultSources,
        {
          tag: 'img',
          srcAttributes: ['data-src'],
          srcsetAttributes: ['data-srcset'],
        },
        {
          tag: 'a',
          srcAttributes: ['href'],
          filter({ attributes }) {
            return (
              attributes.href.startsWith('$assets/') ||
              attributes.href.startsWith('nihua/') ||
              attributes.href.startsWith('qifeng/') ||
              attributes.href.startsWith('yindeng/')
            );
          },
        },
      ],
    }),
  ],
  kit: {
    adapter: adapter(),
    alias: {
      $assets: 'src/assets',
      banners: 'src/images/banners',
      nihua: 'src/images/nihua',
      qifeng: 'src/images/qifeng',
      yindeng: 'src/images/yindeng',
    },
  },
};

export default config;

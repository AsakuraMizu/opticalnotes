import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

import unocss from '@unocss/vite';
import { sveltekit } from '@sveltejs/kit/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [unocss(), sveltekit(), imagetools()],
});

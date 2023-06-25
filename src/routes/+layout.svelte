<script lang="ts">
  import '@unocss/reset/tailwind.css';
  import 'uno.css';
  import 'photoswipe/style.css';
  import './app.css';

  import '@fontsource/noto-sans-sc/400.css';
  import '@fontsource/noto-sans-sc/700.css';

  import { fade } from 'svelte/transition';
  import { Toasts } from 'svoast';

  import { page } from '$app/stores';
  import Header from './Header.svelte';

  $: ({ pathname } = $page.url);
</script>

<div z="100">
  <Toasts />
</div>

<div
  flex="~ col"
  items="center"
  h="full"
  min-h="screen"
  w="full"
  resize="x"
  bg="#181818"
  text="base #777777 center"
  font="normal synthesis-none antialiased"
  class="scroll-smooth"
>
  <Header />
  {#key pathname}
    <main h="full" min-h="[calc(100vh-72px-64px)] md:[calc(100vh-120px-64px)]" w="full" in:fade>
      <slot />
    </main>
  {/key}

  <div w="full" h="16" z="30" p="2" bg="black" text="#939393">
    <div>
      &copy; 2022-2023 光学笔记
      <a href="https://beian.miit.gov.cn" target="_blank" rel="noreferrer noopener">
        京ICP备2023010919号
      </a>
    </div>
    <a
      target="_blank"
      href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802041979"
      display="inline-flex"
      p="1"
    >
      <img src="$assets/beian.png" alt="beian" />
      <p m="l-5px">
        京公网安备 11010802041979号
      </p>
    </a>
  </div>
</div>

<style>
  :root {
    font-family: 'Noto Sans SC' !important;
  }
</style>

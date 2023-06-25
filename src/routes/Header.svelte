<script lang="ts">
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';

  $: ({ pathname } = $page.url);

  const links = [
    ['/', '首页'],
    ['/#works', '作品展示'],
    ['/#contact', '联系方式'],
    // ['/members', '成员'],
    // ['/services', '服务'],
  ];

  let show = false;

  const open = () => (show = true);
  const close = () => (show = false);

  let scrollY: number;
  let innerHeight: number;
</script>

<svelte:window bind:scrollY bind:innerHeight />

<!-- desktop -->
<header
  pos="sticky top-0"
  display="none md:flex"
  h="30"
  w="full"
  p="x-5 b-3 lg:x-20"
  z="30"
  transition="~ 500"
  bg="black {pathname !== '/' ? 'op-0' : scrollY > innerHeight - 120 ? 'op-100' : 'op-30'}"
  items="end"
  justify="between"
>
  <a href="/">
    <img src="$assets/logo.png" alt="logo" w="300px" />
  </a>
  <nav flex="~" gap="5" text="white">
    {#each links as link}
      <a
        href={link[0]}
        p="3"
        transition="~"
        text={pathname === link[0] ? '#d9d9d9' : '#606060 hover:#d9d9d9'}
      >
        {link[1]}
      </a>
    {/each}
  </nav>
</header>

<!-- mobile -->
<header
  pos="sticky top-0"
  display="flex md:none"
  h="18"
  w="full"
  z="30"
  items="center"
  transition="~ 500"
  bg="black {scrollY > innerHeight * 0.85 - 72 || pathname !== '/' ? 'op-100' : 'op-30'}"
  text="white"
>
  <div flex="1">
    <div
      class="i-carbon:menu"
      m="3"
      h="8"
      w="8"
      cursor="pointer"
      on:click={open}
      on:keypress={open}
    />
  </div>
  <a href="/" justify="self-center">
    <img src="$assets/logo.png" alt="logo" h="10" />
  </a>
  <div flex="1" />
</header>
<div
  pos="fixed top-0 left--100"
  w="50"
  h="full"
  z="50"
  bg="#181818"
  transition="all-400"
  flex="~ col"
  class:left-0={show}
>
  {#each links as link}
    <a
      href={link[0]}
      p="3"
      text="white"
      class={pathname === link[0] ? 'font-900' : ''}
      on:click={close}
    >
      {link[1]}
    </a>
  {/each}
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if show}
  <div
    pos="fixed top-0 left-0"
    w="full"
    h="full"
    z="40"
    bg="black"
    op="20"
    on:click={close}
    transition:fade={{ duration: 400 }}
  />
{/if}

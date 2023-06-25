<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let idx = 0;
  const count = __IMGBOX_COUNT__;

  onMount(() => {
    const timer = setInterval(() => (idx = (idx + 1) % count), 5000);
    return () => clearInterval(timer);
  });
</script>

<div hidden>
  <!-- preload -->
</div>

<div pos="fixed top-0" z="0">
  <div pos="relative" h="80vh md:screen" w="screen">
    <!-- content -->
  </div>
</div>

<div
  pos="fixed top-0"
  flex="~"
  justify="center"
  items="center"
  h="80vh md:screen"
  w="screen"
  bg="black/60"
  text="2xl"
>
  攀巅寻极 无惧妄想
</div>

<script lang="ts">
  import { onMount } from 'svelte';
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import PhotoSwipe from 'photoswipe';
  import { browser } from '$app/environment';

  let lightbox: PhotoSwipeLightbox;

  onMount(() => {
    if (browser) {
      lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery',
        children: 'a',
        pswpModule: PhotoSwipe,
        wheelToZoom: true,
      });
      lightbox.init();
    }
  });
</script>

<!-- prettier-ignore -->
<div id="gallery" class="pswp-gallery">
  <div flex="~ col" m="y-5" bg="#111111">
    <div flex="~ col" items="center" p="b-10">
      <img src="$assets/qifeng.png?webp" w="200px md:300px" alt="启封" />
      <h2 text="4xl yellow-100">重 构 空 间</h2>
    </div>
    <div flex="~ wrap" gap="x-10 lg:x-20 y-5 lg:y-10" justify="center" p="y-5 xl:x-20">
      <!-- qifeng -->
    </div>
  </div>
  <div flex="~ col" m="y-5" bg="#111111">
    <div flex="~ col" items="center" p="b-10">
      <img src="$assets/yindeng.png?webp" w="200px md:300px" alt="引灯" />
      <h2 text="4xl yellow-100">触 碰 想 象</h2>
    </div>
    <div flex="~ wrap" gap="x-10 lg:x-20 y-5 lg:y-10" justify="center" p="y-5 xl:x-20">
      <!-- yindeng -->
    </div>
  </div>
  <div flex="~ col" m="y-5" bg="#111111">
    <div flex="~ col" items="center" p="b-10">
      <img src="$assets/nihua.png?webp" w="200px md:300px" alt="拟画" />
      <h2 text="4xl yellow-100">奇 迹 再 临</h2>
    </div>
    <div flex="~ wrap" gap="x-10 lg:x-20 y-5 lg:y-10" justify="center" p="y-5 xl:x-20">
      <!-- nihua -->
    </div>
  </div>
</div>

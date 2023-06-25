<script lang="ts">
  import { clipboard } from '$lib/utils';
  import Gallery from './Gallery.svelte';
  import ImgBox from './ImgBox.svelte';
</script>

<svelte:head>
  <title>首页 | 光学笔记</title>
</svelte:head>

<ImgBox />

<div h="[calc(80vh-4.5rem)] md:[calc(100vh-7.5rem)]" />

<div pos="relative" z="10" bg="#181818" border="t-2 #4d4d4d">
  <div flex="~ col" items="center" p="x-5 y-5 lg:y-20">
    <img src="$assets/door.png?webp" h="30" m="y-10" alt="door" />
    <h1 text="3xl lg:8xl" font="bold" flex="~" justify="center" gap="2 lg:5">
      <span text="white">光学笔记</span>
      <span text="yellow-100">跨次元摄影</span>
    </h1>
    <h2 m="3" text="2xl lg:4xl">WHITE CHICKEN</h2>
    <div max-w="6xl" flex="~ col" gap="3">
      <p>光学笔记是活跃于长春地区，主营二次元角色扮演相关影像拍摄的新兴摄影团队。</p>
      <p>
        基于专业且全面的人员配备，光学笔记可提供包含服装租借、纯色影棚使用、拍摄、妆容造型、后期处理、模型搭建在内的全套服务。
      </p>
      <p>
        我们已与多个优秀的相关团队建立合作，使服务内容能够覆盖到更加广泛的爱好者与客户群体，并享有一定知名度。往后的故事，我们期待您的一同见证。
      </p>
    </div>
  </div>

  <h1 id="works" p="5" text="2xl white" bg="black">作品展示</h1>

  <Gallery />

  <h1 id="contact" p="5" text="2xl white" bg="black">联系我们</h1>

  <div p="5" grid="~" m="x-auto" max-w="6xl" items="center" gap="5" style="grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );">
    <div flex="~ col" items="center" cursor="pointer" use:clipboard={'baiji741050015'}>
      <div class="i-ri:wechat-line" h="32" w="32" />
      微信: baiji741050015<br />(点击复制)
    </div>
    <a
      href="https://jq.qq.com/?_wv=1027&k=NlJS6qw5"
      target="_blank"
      rel="noreferer noopener"
      flex="~ col"
      items="center"
    >
      <div class="i-ri:qq-line" h="32" w="32" />
      QQ 群聊: 913061245<br />(点击加入)
    </a>
    <div flex="~ col" items="center" cursor="pointer" use:clipboard={'13844106058'}>
      <div class="i-ri:phone-line" h="32" w="32" />
      联系电话: +86 13844106058<br />(点击复制)
    </div>
    <a href="mailto:baijimyz@foxmail.com" flex="~ col" items="center">
      <div class="i-ri:mail-line" h="32" w="32" />
      电子邮件: baijimyz@foxmail.com
    </a>
  </div>
</div>

<!-- <img src="$assets/poster.jpg?webp" loading="lazy" alt="poster" w="full" /> -->

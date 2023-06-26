import { glob } from 'glob';
import { loadImage } from 'vite-imagetools';
import { readFile, writeFile } from 'node:fs/promises';
import { join, basename } from 'node:path';

const updateGallery = async () => {
  const gallery = join(__dirname, 'routes', 'Gallery.svelte');
  let src = await readFile(gallery, { encoding: 'utf-8' });

  const updateType = async (type: string) => {
    let result: string[] = [];
    const files = (await glob(join(__dirname, 'images', type, '*.jpg'))).sort((a, b) =>
      b.localeCompare(a, undefined, { numeric: true })
    );
    for (let path of files) {
      const base = basename(path, '.jpg');
      const image = loadImage(path);
      const metadata = await image.metadata();
      result.push(`      <a href="${type}/${base}.jpg?webp" data-pswp-width="${metadata.width}" data-pswp-height="${metadata.height}" pos="relative">
        <img border="1" object="cover" w="600px" max-w="full" src="${type}/${base}.jpg?webp&quality=50&height=500" alt="${base}" />
        <div pos="absolute top-0" transition="~ 500" w="full" h="full" bg="white" op="0 hover:50" />
      </a>`);
    }
    src = src.replace(`      <!-- ${type} -->`, result.join('\n'));
  };

  await Promise.all([updateType('qifeng'), updateType('yindeng'), updateType('nihua')]);
  await writeFile(gallery, src);
};

const updateImgBox = async () => {
  const imgbox = join(__dirname, 'routes', 'ImgBox.svelte');
  let src = await readFile(imgbox, { encoding: 'utf-8' });

  const files = (await glob(join(__dirname, 'images', 'banners', '*.jpg')))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((path) => basename(path, '.jpg'));

  src = src
    .replace('__IMGBOX_COUNT__', files.length.toString())
    .replace(
      '  <!-- preload -->',
      files.map((name) => `  <img src="banners/${name}.jpg?webp" alt="" />`).join('\n')
    )
    .replace(
      '    <!-- content -->',
      files
        .map(
          (name, index) => `    {#if idx === ${index}}
      <img
        src="banners/${name}.jpg?webp"
        alt=""
        h="full"
        w="full"
        pos="absolute top-0"
        object="cover"
        transition:fade={{ duration: 1000 }}
      />
    {/if}`
        )
        .join('\n')
    );

  await writeFile(imgbox, src);
};

const main = async () => {
  await Promise.all([updateGallery(), updateImgBox()]);
};

main();

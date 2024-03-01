#!/bin/bash
mkdir src/images/{qifeng,yindeng,nihua,banners}
for f in opticalnotes-images/启封/*; do cp $f src/images/qifeng/${f:29}; done
for f in opticalnotes-images/引灯/*; do cp $f src/images/yindeng/${f:29}; done
for f in opticalnotes-images/拟画/*; do cp $f src/images/nihua/${f:29}; done
for f in opticalnotes-images/头图/*; do cp $f src/images/banners/${f:23}; done
pnpm svelte-kit sync
pnpm tsx src/update.cts
pnpm build:site
mv build/404/index.html build/error.html
rm build/404 -r

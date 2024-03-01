pnpm svelte-kit sync
pnpm tsx src/update.cts
pnpm build:site
mv build/404/index.html build/error.html
rm build/404 -r

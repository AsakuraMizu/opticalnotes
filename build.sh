# generate .svelte-kit
pnpm dev &
command_pid=$!
sleep 3
kill "$command_pid"

pnpm tsx src/update.cts
pnpm build:site
mv build/404/index.html build/error.html
rm build/404 -r

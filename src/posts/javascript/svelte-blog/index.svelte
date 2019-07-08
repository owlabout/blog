<script context="module">
  export const meta = {
    title: "How I implemented this blog using svelte",
    author: "Lukas",
  };
</script>

<h1>{meta.title}</h1>

```js
/**
 * in routes/server.js
 * to enable import of .svelte files
 */
require("svelte/register");
```

`[year][month][slug].js`

index.svelte

posts directory

<script context="module">
  import { posts } from "posts";

  export async function preload(page, session) {
    const { year, month, slug } = page.params;
    return { post: posts[`post_${year}_${month}_${slug}`] };
  }
</script>

<script>
  export let post;
</script>

<svelte:component this={post} />

<script>
  import { meta } from "posts";
</script>

<style>
  .header {
    border-top: 4px solid var(--color-lightred);
    padding: 1rem 0;
    background: var(--color-background);
    box-shadow: 0 0 5px 0 var(--color-lightgrey);
  }
  .logo-link {
    display: inline-block;
  }
  .logo {
    max-height: 48px;
  }
</style>

<svelte:head>
  <title>OwlAbout Blog</title>
</svelte:head>

<header class="header">
  <div class="container">
    <a class="logo-link" href="/">
      <img class="logo" src="/app/logo-blog.svg" alt="OwlAbout Blog Logo" />
    </a>
  </div>
</header>

{#each meta as post}
  <a href={post.link}>{post.title}</a>
{/each}

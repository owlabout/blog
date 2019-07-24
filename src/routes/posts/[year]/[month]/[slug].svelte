<script context="module">
  export async function preload({ params, query }) {
    const { year, month, slug } = params;
    const res = await this.fetch(`posts/${year}/${month}/${slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { onMount } from "svelte";
  import Hero from "../../../../components/Hero.svelte";
  import { lang } from "../../../_layout.svelte";

  export let post;

  $: sticky = post.html.indexOf("sticky__container") > 0;

  onMount(() => {
    lang.set(post.metadata.lang);
  });
</script>

<style>
  :global(.layout__posts .container) {
    padding: 0 2rem;
    max-width: 140rem;
    margin: 0 auto;
  }
  :global(.sticky__container) {
    max-width: 140rem;
  }
  .post {
    display: flex;
    flex-direction: column;
    max-width: 68rem;
    margin: 0 auto;
    position: relative;
  }

  .post :global(a) {
    color: var(--color-lightred);
  }
  .post :global(a:hover) {
    color: var(--color-primary);
  }

  .post :global(ul) {
    line-height: 1.5;
  }
  .post :global(li) {
    margin: 0 0 0.5em 0;
  }

  :global(.sticky) {
    line-height: 1;
    text-align: center;
    color: var(--color-lightgrey);
  }

  @media screen and (min-width: 1060px) {
    .has-sticky {
      margin-right: 0;
    }
    :global(.sticky__container) {
      align-self: flex-end;
      padding: 0 2rem;
      margin: 0 -2rem;
      width: 100vw;
      display: grid;
      grid-column-gap: 4rem;
      grid-template-rows: auto;
      grid-template-columns: minmax(0, 680px) 680px;
    }
    :global(.sticky) {
      position: sticky;
      top: 10rem;
    }
  }
</style>

<svelte:head>
  <title>{post.title}</title>
  {#if post.metadata.description}
    <meta name="Description" content={post.metadata.description} />
  {/if}
</svelte:head>

<div class="container">
  <div class="post" class:has-sticky={sticky}>
    {@html post.html}
  </div>
</div>

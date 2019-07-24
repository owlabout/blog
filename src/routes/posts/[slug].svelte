<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`posts/${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;

  $: sticky = post.html.indexOf("sticky__container") > 0;
</script>

<style>
  :global(.container) {
    padding: 0 2rem;
    max-width: 136rem;
    margin: 0 auto;
  }
  :global(.sticky__container) {
    max-width: 136rem;
  }
  .post {
    display: flex;
    flex-direction: column;
    max-width: 68rem;
    margin: 0 auto;
    position: relative;
  }

  .post :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }
  .post :global(ul) {
    line-height: 1.5;
  }
  .post :global(li) {
    margin: 0 0 0.5em 0;
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
</svelte:head>

<div class="container">
  <div class="post" class:has-sticky={sticky}>
    {@html post.html}
  </div>
</div>

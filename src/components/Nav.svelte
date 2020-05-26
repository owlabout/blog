<style>
  .container {
    display: flex;
    align-items: center;
  }
  header {
    position: sticky;
    top: 0;
    z-index: 10;
    border-top: 4px solid var(--color-lightred);
    padding: 1rem 0;
    background: var(--color-background);
    box-shadow: 0 0 5px 0 var(--color-lightgrey);
  }
  a {
    display: inline-block;
  }
  img {
    max-height: 48px;
  }
  .title {
    padding-top: 1.8rem;
    padding-left: 2rem;
    font-family: "VT323", monospace;
    font-size: 2rem;
    color: var(--color-primary);
  }

  @media (max-width: 740px) {
    header {
      padding: 1rem 0 0 0;
    }
    img {
      max-height: 30px;
    }
    .title {
      font-size: inherit;
      padding-top: 0;
      max-width: calc(100% - 102px);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
</style>

<script>
let windowPositionY;
export let title;
</script>

<svelte:window bind:scrollY={windowPositionY}/>

<header>
  <div class="container">
    <a href="/">
      <img src="/app/logo-blog.svg" alt="OwlAbout Blog Logo" />
    </a>
    {#if windowPositionY > 500}
      <div class="title">{title}</div>
    {/if}
  </div>
</header>

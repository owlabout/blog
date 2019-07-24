<script>
  export let src;
  export let alt;
  export let color;

  let style = color ? `--color-hero: ${color}` : "";
</script>

<style>
  :global(.hero__container) {
    --color-hero: var(--color-lightred);
    background: linear-gradient(45deg, var(--color-hero), transparent);
    /* Full width is insanely hard to get right */
    width: 100vw;
    align-self: center;
  }
  @media screen and (min-width: 1060px) {
    :global(.has-sticky .hero__container) {
      align-self: flex-end;
      margin-right: -2rem;
    }
  }
  @media screen and (min-width: 1400px) {
    :global(.has-sticky .hero__container) {
      align-self: flex-start;
      transform: translateX(-50vw);
    }
  }
  :global(.hero__container img) {
    display: block;
    height: 400px;
    max-width: 100%;
    margin: 0 auto;
  }
</style>

<div class="hero__container" {style}>
  <img {src} {alt} />
</div>

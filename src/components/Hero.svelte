<script>
  export let src;
  export let alt;
  export let color;

  let style = color ? `--color-hero: ${color}` : "";
</script>

<style>
  :global(.hero__container) {
    --color-hero: var(--color-lightred);
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(45deg, var(--color-hero), transparent);
  }
  :global(.has-sticky .hero__container) {
    left: 0;
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

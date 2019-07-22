<script>
  export let src;
  export let alt;
  export let color;

  let style = color ? `--color-hero: ${color}` : "";
</script>

<style>
  div {
    --color-hero: var(--color-lightred);
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -2rem !important;
    background: linear-gradient(-45deg, var(--color-hero), transparent);
  }
  img {
    display: block;
    max-height: 400px;
    width: 740px;
    max-width: 100%;
    margin: 0 auto;
  }
</style>

<div {style}>
  <img {src} {alt} />
</div>

<script>
  import {
    faTerminal,
    faServer,
    faEnvelope,
    faCode,
    faPenNib
  } from "@fortawesome/free-solid-svg-icons";
  import { faVuejs, faNodeJs } from "@fortawesome/free-brands-svg-icons"

  // const pathRegex = /<\s*path.* d\=\"([^\"]*)\".*>/;

  const icons = {
    terminal: faTerminal,
    email: faEnvelope,
    devops: faServer,
    general: faCode,
    vue: faVuejs,
    node: faNodeJs,
    webDesign: faPenNib
  };

  export let icon;
  export let label;
  let path = [];
  let viewBox = "";
  $: viewBox = icons[icon] ? "0 0 " + icons[icon].icon[0] + " " + icons[icon].icon[1] : "0 0 0 0";
  $: path = icons[icon] ? icons[icon].icon[4] : icons['general'].icon[4];
</script>

<style>
  svg {
    width: 1em;
    height: 1em;
  }
</style>

<svg
  aria-label={label}
  aria-hidden="true"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  {viewBox}>
  <title>{label}</title>
  <path fill="currentColor" d={path} />
</svg>

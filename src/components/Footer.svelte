<style>
  :global(#sapper) {
    position: relative;
    padding-bottom: 80px;
    min-height: 100vh;
  }
  footer {
    height: 80px;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  footer img {
    width: 45px;
    height: 45px;
  }

  a {
    color: var(--color-text);
    margin-right: 10px;
    padding: 15px;
    position: relative;
  }
  a:before,
  a:after {
    box-sizing: border-box;
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    transition: all 0.3s ease-in-out;
    transition-property: width, height;
    opacity: 0;
    border: 1px solid var(--color-primary);
  }

  a:before {
    top: 0.5rem;
    left: 0.5rem;
    border-right: 0;
    border-bottom: 0;
  }

  a:after {
    bottom: 0.5rem;
    right: 0.5rem;
    border-left: 0;
    border-top: 0;
  }

  a:hover:before,
  a:hover:after {
    opacity: 1;
    height: 1.2rem;
    width: 1.2rem;
  }
</style>

<footer>
  <div class="container">
    <a rel="noopener" href="https://owlabout.de/impressum.html">Impressum</a>
    <a rel="noopener" href="https://owlabout.de/datenschutz.html">
      Datenschutz
    </a>
    <a rel="noopener" href="https://owlabout.de/#contact">Kontakt</a>
    <a rel="noopener" href="https://owlabout.de/">
      <img src="/app/logo-owl.png" alt="owlabout" />
    </a>
  </div>
</footer>

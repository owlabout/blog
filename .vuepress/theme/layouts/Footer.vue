<template>
  <footer>
    <div class="container">
      <a class="footer-link" href="https://owlabout.de/impressum.html">Impressum</a>
      <a class="footer-link" href="https://owlabout.de/datenschutz.html">Datenschutz</a>
      <a class="footer-link" href="https://owlabout.de/#contact">Kontakt</a>
      <a href="https://owlabout.de/">
        <img src="../../public/logo.svg" alt="owlabout">
      </a>
    </div>
  </footer>
</template>

<style lang="stylus">
footer {
  height: 55px;
  width: 100%;
  position: absolute;
  bottom: 0;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
}

footer img {
  width: 45px;
  height: 45px;
}

footer a.footer-link {
  color: $textColor;
  margin-right: 10px;
  padding: 15px;
  position: relative;

  &:before, &:after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    transition: all 0.3s ease-in-out;
    transition-property: width, height;
    opacity: 0;
    border: 1px solid $primary;
  }

  &:before {
    top: 0.5rem;
    left: 0.5rem;
    border-right: 0;
    border-bottom: 0;
  }

  &:after {
    bottom: 0.5rem;
    right: 0.5rem;
    border-left: 0;
    border-top: 0;
  }

  &:hover:before, &:hover:after {
    opacity: 1;
    height: 1.2rem;
    width: 1.2rem;
  }
}
</style>

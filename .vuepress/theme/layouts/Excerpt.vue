<template>
  <div class="excerpt">
    <div class="ex-img">
      <img :src="thumbnail" alt />
    </div>
    <div class="ex-content">
      <div class="tags">
        <FontAwesomeIcon v-for="tag of page.tags" :icon="tag" :title="tag" />
      </div>
      <h3>{{page.title}}</h3>
      <div class="ex-footer">
        <span>von {{page.author}}</span>
        <span>{{publishedDate}}</span>
      </div>
    </div>
    <a class="ex-link" :href="page.path"></a>
  </div>
</template>

<style lang="stylus">
.excerpt {
  width: 220px;
  height: 300px;
  background: white;
  border-radius: 10px;
  margin: 40px 20px;
  transition: 0.3s ease-in-out;
  position: relative;

  .ex-img {
    background: linear-gradient(45deg, rgba(2, 206, 221, 1) 0%, rgba(37, 108, 112, 1) 100%);
    height: 150px;
    width: 220px;
    display: block;
    position: absolute;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;

    img {
      width: 100%;
      max-height: 100%;

      &[src$='.svg'] {
        padding: 1rem;
      }
    }
  }

  .ex-content {
    position: absolute;
    top: 150px;
    height: 150px;
    width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .tags {
      height: 30px;
      font-size: 1.6rem;
      width: 100%;
      display: flex;
      align-items: center;
      color: $grey;

      svg {
        margin: 7px;
      }
    }

    .ex-footer {
      height: 30px;
      width: 100%;
      font-size: 1.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 7px;
      border-top: solid 1px #696969;
    }

    h3 {
      margin: 0;
      padding: 0 7px;
      color: $primary;
      text-align: center;
      font-size: 1.8rem;
      font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  }

  .ex-link {
    height: 300px;
    width: 220px;
    display: block;
    position: absolute;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>

<script>
export default {
  props: ["page"],
  computed: {
    publishedDate() {
      let dym = this.page.frontmatter.date.match(/(\d+)/g);
      let dateString = dym[2] + "." + dym[1] + "." + dym[0];
      return dateString;
    },
    thumbnail() {
      let imagePath = this.page.frontmatter.thumbnail || "logo.svg";
      if (imagePath.slice(0, 2) == "./") {
        imagePath = `assets/img/${imagePath.slice(2)}`;
      }
      console.log(this);
      return this.$withBase(`/${imagePath}`);
    },
    tags() {
      return this.page.tags || [];
    }
  }
};
</script>

<script>
  export let post;
</script>

<style>
  .excerpt {
    width: 220px;
    height: 300px;
    background: var(--color-background);
    border-radius: 10px;
    margin: 40px 20px;
    transition: 0.3s ease-in-out;
    position: relative;
  }
  .excerpt:hover {
    transform: scale(1.1);
  }

  .thumbnail {
    background: linear-gradient(
      45deg,
      rgba(2, 206, 221, 1) 0%,
      rgba(37, 108, 112, 1) 100%
    );
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
  }

  .thumbnail img {
    width: 100%;
    max-height: 100%;
  }

  .thumbnail img[src$=".svg"] {
    padding: 1rem;
  }

  .tags {
    height: 30px;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    color: var(--color-text);
  }

  h3 {
    margin: 0;
    padding: 7px;
    color: var(--color-primary);
    text-align: center;
    font-size: 1.8rem;
  }

  footer {
    position: absolute;
    bottom: 0;
    height: 30px;
    width: 100%;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 7px;
    border-top: solid 1px var(--color-grey);
  }
</style>

<div class="excerpt">
  <a class="thumbnail" rel="prefetch" href={post.link} role="presentation">
    <img src={post.thumbnail} role="presentation" alt="Post Thumbnail" />
  </a>
  <div class="tags">
    {#each post.tags as tag}
      <!-- <FontAwesomeIcon icon={tag} title={tag} /> -->
    {/each}
  </div>
  <a rel="prefetch" href={post.link}>
    <h3>{post.title}</h3>
  </a>
  <footer>
    <span>von {post.author}</span>
    <span>{post.dateString}</span>
  </footer>
</div>

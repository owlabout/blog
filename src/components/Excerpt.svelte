<script>
  import Icon from "./Icon.svelte";

  export let post;
</script>

<style>
  .excerpt {
    margin: 30px;
    transition: 0.3s ease-in-out;
    display: flex;
  }
  .excerpt:hover {
    transform: scale(1.1);
  }
  .post-preview {
    width: 350px;
    position: relative;
    height: 190px;
  }
  .post-preview .descr {
    padding: 7px;
    line-height: 1.2;
  }

  .thumbnail {
    background: linear-gradient(
      45deg,
      rgba(2, 206, 221, 1) 0%,
      rgba(37, 108, 112, 1) 100%
    );
    height: 190px;
    width: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-right: 10px;
    border-radius: 3px;
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
    color: var(--color-grey);
  }
  .tags :global(svg) {
    margin: 7px;
  }

  h3 {
    font-family: inherit;
    margin: 0;
    padding: 7px;
    color: var(--color-primary);
    font-size: 1.8rem;
  }

  footer {
    position: absolute;
    bottom: 10px;
    height: 30px;
    width: 100%;
    font-size: 1.2rem;
    padding: 0 7px;
    opacity: 0.7;
  }
</style>

<div class="excerpt">
  <a class="thumbnail" rel="prefetch" href={post.link} role="presentation">
    <img src={post.thumbnail} role="presentation" alt="Post Thumbnail" />
  </a>
  <div class="post-preview">
    <div aria-label="Tags" class="tags">
      {#each post.tags as tag}
        <Icon icon={tag} label={tag} />
      {/each}
    </div>
    <a rel="prefetch" href={post.link}>
      <h3>{post.title}</h3>
      {#if post.description}
        <div class="descr">{post.description}</div>
      {/if}
    </a>
    <footer>
      <span>von {post.author}</span>
      <span> - {post.dateString}</span>
    </footer>
  </div>
</div>

<div class="author-container">
  <div class="post-footer-info">{post.metadata.dateString}:  {post.title}</div>
  <div class="author">
    <div class="tags">
      {#each getAuthorInfo().tags as tag}
        <span><Icon icon={tag} label={tag} /></span>
      {/each}
    </div>
    <div class="thumbnail">
      <img src={getAuthorInfo().thumbnail} alt="">
    </div>
    <div class="info">
      <b>{getAuthorInfo().name}</b>
      <p>{getAuthorInfo().description}</p>
    </div>
  </div>
</div>

<script>
  import Icon from "./Icon.svelte";
  import { authors } from "./authors.js";
  export let post;
  function getAuthorInfo() {
    return authors[post.metadata.author];
  }
</script>

<style>
  .author-container {
    border-top: solid 1px #bebdbd;
    padding: 10px;
    margin-top: 20px;
  }
  .author {
    width: 680px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 10px;
    position: relative;
  }
  .author .thumbnail {
    width: 90px;
    height: 90px;
    border-radius: 100%;
    overflow: hidden;
    margin-right: 20px;
  }
  .author .info {
    width: 540px;
  }
  .post-footer-info {
    margin-right: 10px;
    opacity: 0.7;
    font-size: 0.8em;
  }
  .author .info p {
    margin: 3px 0;
    font-size: 0.8em;
  }
  .author .tags {
    position: absolute;
    right: 10px;
    top: 17px;
  }
  .author .tags span {
    margin-right: 10px;
  }

  @media (max-width: 740px) {
    .author {
      width: 100%;
    }
    .author .info {
      width: calc(100% - 110px);
    }
  }
</style>

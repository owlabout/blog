import { basename } from "path";
import { processPost } from "post-assets";
import glob from "tiny-glob";
import mdSticky from "md-sticky";

const matter = require("gray-matter");
const Prism = require("prismjs");
var loadLanguages = require("prismjs/components/");
loadLanguages(["bash"]);
const md = require("markdown-it")({
  highlight: function(str, lang) {
    if (lang) {
      try {
        return Prism.highlight(str, Prism.languages[lang], lang);
      } catch (__) {}
    }

    return ""; // use external default escaping
  }
});
md.use(mdSticky);

async function getPosts() {
  const files = await glob("posts/**/*.md");

  return files
    .map(loadPost)
    .filter(p => !!p.metadata.date)
    .map(p => {
      const date = p.metadata.date
        .toISOString()
        .slice(0, 10)
        .split("-");

      const slug = basename(p.metadata.file, ".md");
      p.metadata.slug = `${date[0]}_${date[1]}_${slug}`;
      p.metadata.link = `/${date[0]}/${date[1]}/${slug}`;
      p.metadata.dateString = `${date[2]}.${date[1]}.${date[0]}`;

      return p;
    })
    .sort((a, b) => {
      return a.metadata.date < b.metadata.date ? 1 : -1;
    });
}

export async function getPostsMetadata() {
  const posts = await getPosts();
  return posts.map(p => {
    return {
      title: p.title,
      thumbnail: p.metadata.thumbnail || "/images/logo.svg",
      link: p.metadata.link,
      dateString: p.metadata.dateString,
      author: p.metadata.author,
      tags: p.metadata.tags
    };
  });
}

export async function getPost(slug) {
  try {
    const posts = await getPosts();
    return posts.find(p => p.metadata.slug == slug);
  } catch (e) {
    console.log(e);
  }
  return null;
}

function loadPost(file) {
  const markdown = processPost(file);
  if (!markdown) return null;

  const { content, metadata } = process_markdown(markdown);
  const html = md.render(content);
  metadata.file = file;
  const title = metadata.title ? metadata.title : extractTitle(html);

  return {
    title,
    metadata,
    html
  };
}

function process_markdown(markdown) {
  const { content, data } = matter(markdown);

  return { metadata: data, content };
}

function extractTitle(html) {
  const match = html.match(/<h1>(.*)<\/h1>/);
  if (match) {
    return match[1];
  }
  return "";
}

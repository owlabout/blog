import fs from "fs";
import path from "path";
import glob from "tiny-glob";

const matter = require("gray-matter");
const md = require("markdown-it")();

export async function getPosts() {
  const files = await glob("posts/**/*.md");

  return files
    .map(loadPost)
    .filter(p => !!p.metadata.date)
    .map(p => {
      const date = p.metadata.date
        .toISOString()
        .slice(0, 10)
        .split("-");

      const slug = path.basename(p.metadata.file, ".md");
      p.metadata.slug = `${date[0]}_${date[1]}_${slug}`;
      p.metadata.dateString = `${date[2]}.${date[1]}.${date[0]}`;
      return p;
    })
    .sort((a, b) => {
      return a.metadata.date < b.metadata.date ? 1 : -1;
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
  if (!fs.existsSync(file)) return null;
  const markdown = fs.readFileSync(file, "utf-8");
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

import { getPost } from "../../_posts.js";

const lookup = new Map();

export async function get(req, res, next) {
  const { year, month, slug } = req.params;
  const link = `/posts/${year}/${month}/${slug}`;

  if (process.env.NODE_ENV !== "production" || !lookup.has(link)) {
    try {
      const post = await getPost(link);
      lookup.set(link, JSON.stringify(post));
    } catch (e) {
      console.log(e);
    }
  }

  const json = lookup.get(link);

  if (json) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(json);
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        message: `Not found`
      })
    );
  }
}

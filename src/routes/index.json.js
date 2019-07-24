import { getPostsMetadata } from "./posts/_posts.js";

export async function get(req, res, next) {
  const metadata = await getPostsMetadata();
  const json = JSON.stringify(metadata);

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

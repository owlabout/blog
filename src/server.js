require("svelte/register");
import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    (req, res, next) => {
      const parts = req.originalUrl.split("/");
      if (parts.length === 4 && parseInt(parts[1]) > 2018) {
        req.path = `/posts/${parts[1]}_${parts[2]}_${parts[3]}`;
      }
      next();
    },
    sapper.middleware()
  )
  .listen(PORT, err => {
    if (err) console.log("error", err);
  });

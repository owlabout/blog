const matter = require("gray-matter");
const get = require("lodash/get");
const fs = require("fs");
const path = require("path");
const fileLoader = require("file-loader");

module.exports = function(src) {
  const { content, data } = matter(src);
  const thumbnail = get(data, "thumbnail", false);

  if (thumbnail) {
    const file = path.resolve(this.context, thumbnail);
    try {
      if (!fs.existsSync(file)) {
        return src;
      }

      const context = Object.assign({}, this, {
        resourcePath: file
      });
      Object.assign(context.query, {
        emitFile: true
      });
      const packed = fileLoader.call(context, fs.readFileSync(file));
      /**
       * For now do not change src, since vuepress loads the file instead of src anyway
       */
      // data.thumbnail = packed
      //   .split("+")[1]
      //   .trim()
      //   .slice(1, -2);

      // return matter.stringify({ content }, data);
    } catch (e) {
      console.log(e);
    }
  }

  return src;
};

const routes = require("next-routes");

// Name   Page      Pattern
module.exports = routes() // ----   ----      -----
  .add("about") // about  about     /about
  .add("user", "/user/:name", "user") // user   profile   /user/:id
  .add("/:noname/:lang(en|es)/:wow+", "complex") // (none) complex   /:noname/:lang(en|es)/:wow+
  .add({ name: "beta", pattern: "/v3", page: "v3" });

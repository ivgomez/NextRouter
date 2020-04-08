const next = require("next");
const express = require("express");
const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

// With express
app.prepare().then(() => {
  const server = express();
  server.get("/sitemap.xml", function (req, res) {
    res.header("Content-Type", "application/xml");
    res.header("Content-Encoding", "gzip");
    // if we have a cached entry send it
    if (sitemap) {
      res.send(sitemap);
      return;
    }

    try {
      const smStream = new SitemapStream({ hostname: "https://www.corcoran.com/" });
      const pipeline = smStream.pipe(createGzip());

      // pipe your entries or directly write them.
      smStream.write({ url: "/about/", changefreq: "daily", priority: 0.3 });
      smStream.end();

      // cache the response
      streamToPromise(pipeline).then((sm) => (sitemap = sm));
      // stream write the response
      pipeline.pipe(res).on("error", (e) => {
        throw e;
      });
    } catch (e) {
      console.error(e);
      res.status(500).end();
    }
  });

  server.use(handler).listen(3000);
});

// const express = require("express");
// const next = require("next");

// const ENVIRONMENT = process.env.ENVIRONMENT || "development";
// const PORT = process.env.PORT || 3000;
// const app = next({ dev: ENVIRONMENT === "development" });
// const handle = app.getRequestHandler();

// app
//   .prepare()
//   .then(() => {
//     const server = express();

//     server.get("/user/:name", (req, res) => {
//       app.render(req, res, "/user", { name: req.params.name });
//     });

//     server.get("*", (req, res) => {
//       return handle(req, res);
//     });

//     server.listen(PORT, (err) => {
//       if (err) throw err;
//       console.log("ready on http://localhost:3000");
//     });
//   })
//   .catch((ex) => {
//     console.log(err.stack);
//     process.exit(1);
//   });

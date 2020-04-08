const ignoredRoutes = [
  // Static icons used only in legacy
  "/apple-touch-icon.png",
  "/apple-touch-icon-precomposed.png",
  "/apple-touch-icon-120x120.png",
  "/apple-touch-icon-120x120-precomposed.png",
  "/apple-touch-icon-152x152.png",
  "/apple-touch-icon-152x152-precomposed.png",

  // Ping from our uptime checker (that used to exist in legacy)
  "/environment",

  // Common requests from malicious bots:
  "/wp-login.php",
  "/administrator",
  "/admin",
  "/wp-admin",
  "/admin.php",
  "/ads.txt",
  "/wordpress",
  "/rss",
  "/blog",
  "/temp",
  "/main",
  "/xmlrpc.php",
  "/portal",
  "/site",
  "/web",
  "/feed",
  "/feeds",
  "/cms",
  "/hee.aspx",
  "/index.php",
];

const ignoreHandler = (req, res) => {
  res.status(404).send("Not found - explicitly ignored");
};

module.exports = { ignoredRoutes, ignoreHandler };

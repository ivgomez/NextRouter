const noParamRedirect = (targetPath) => (req, res) => {
  res.redirect(301, encodeURI(targetPath));
};

const routeMap = [
  {
    route: "/:name",
    handler: (req, res) => {
      const { name } = req.params;
      res.redirect(301, encodeURI(`user/${name}`));
    },
  },
  {
    route: "/about",
    handler: noParamRedirect("/about"),
  },
  {
    route: "/Index",
    handler: noParamRedirect("/index"),
  },
];

module.exports = routeMap;

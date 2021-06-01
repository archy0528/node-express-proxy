require("dotenv/config");

const https = require("https");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const proxy = require("http-proxy-middleware");
const fs = require("fs");
const path = require("path");
const routes = require("./routes.json");

const app = express();

app.get("/test", (req, res) => res.send("Hello World"));

for (route of routes) {
  app.use(
    route.route,
    proxy.createProxyMiddleware({
      target: route.address,
      changeOrigin: true,
      secure: false,
      pathRewrite: (path, req) => {
        return path.split("/").slice(2).join("/");
      },
    })
  );
}

app.disable("x-powered-by");
app.set("json spaces", 2);
app.set("etag", false);
app.set("trust proxy", 1);

app.use(bodyParser.json());
app.use(cors());

const sslOptions = {
  key: fs.readFileSync(path.resolve(process.env.HOME, "key.pem")),
  cert: fs.readFileSync(path.resolve(process.env.HOME, "cert.pem")),
  passphrase: process.env.PASSPHRASE,
};

const server = https.createServer(sslOptions, app);
const port = process.env.PORT || 443;

server.listen(port, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});

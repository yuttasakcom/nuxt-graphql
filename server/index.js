const http = require("http");
const { Nuxt, Builder } = require("nuxt");

const app = require("./app");

let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  app.use(nuxt.render);
  const server = http.createServer(app);

  server.listen(app.get("port"), err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server running at port:${app.get("port")}`);
  });
}
start();

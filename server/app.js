const express = require("express");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema");

const app = express();

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/nuxt_graphql")
  .then(() => console.log(`MongoDB Connected!`))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

app.set("port", process.env.PORT || "3000");

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

module.exports = app;

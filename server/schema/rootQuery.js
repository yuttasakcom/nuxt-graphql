const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList } = graphql;

const SongType = require("./songType");
const Song = require("../models/song");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: () => ({
    songs: {
      type: new GraphQLList(SongType),
      resolve: () => Song.find()
    }
  })
});

module.exports = RootQuery;

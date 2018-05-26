const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const SongType = require("./songType");
const Song = require("../models/song");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addSong: {
      type: SongType,
      args: {
        title: { type: GraphQLString }
      },
      resolve: (parentValue, { title }) => new Song({ title }).save()
    }
  }
});

module.exports = mutation;

const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString } = graphql;

const LyricType = require("./lyricType");
const Song = require("../models/song");

const SongType = new GraphQLObjectType({
  name: "SongType",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    lryics: {
      type: new GraphQLList(LyricType),
      resolve: parentValue => Song.findLyrics(parentValue.id)
    }
  })
});

module.exports = SongType;

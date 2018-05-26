const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const Lyric = require("../models/lyric");

const LyricType = new GraphQLObjectType({
  name: "LyricType",
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    song: {
      type: require("./songType"),
      resolve: parentValue =>
        Lyric.findById(parentValue)
          .populate("song")
          .then(lyric => {
            console.log(lyric);
            return lyric.song;
          })
    }
  })
});

module.exports = LyricType;

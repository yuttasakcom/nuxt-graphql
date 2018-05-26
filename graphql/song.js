import gql from "graphql-tag";

export const ADD_SONG = gql`
  mutation ADD_SONG($title: String!) {
    addSong(title: $title) {
      title
    }
  }
`;

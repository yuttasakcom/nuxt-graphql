import gql from 'graphql-tag'

export const ADD_SONG = gql`
  mutation ADD_SONG($title: String!) {
    addSong(title: $title) {
      id
      title
    }
  }
`

export const GET_SONGS = gql`
  query {
    songs {
      id
      title
    }
  }
`

export const DELETE_SONG = gql`
  mutation DELETE_SONG($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`

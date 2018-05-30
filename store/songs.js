import { GET_SONGS, ADD_SONG, DELETE_SONG } from '../graphql/song'

const state = {
  loadedSongs: []
}

const mutations = {
  SET_SONGS(state, songs) {
    state.loadedSongs = songs
  },
  ADD_SONG(state, song) {
    state.loadedSongs.push(song)
  },
  DELETE_SONG(state, id) {
    const songId = state.loadedSongs.findIndex(song => song.id === id)
    state.loadedSongs.splice(songId, 1)
  }
}

const actions = {
  nuxtServerInit(store, ctx) {
    console.log('nuxtServerInit')
    let client = ctx.app.apolloProvider.defaultClient
    return client
      .query({ query: GET_SONGS })
      .then(res => res.data.songs)
      .then(songs => {
        store.commit('SET_SONGS', songs)
      })
  },
  ADD_SONG({ commit }, song) {
    let client = this.app.apolloProvider.defaultClient
    client
      .mutate({
        mutation: ADD_SONG,
        variables: {
          title: song.title
        }
      })
      .then(res => {
        commit('ADD_SONG', res.data.addSong)
      })
  },
  DELETE_SONG({ commit }, id) {
    let client = this.app.apolloProvider.defaultClient
    client
      .mutate({
        mutation: DELETE_SONG,
        variables: {
          id
        }
      })
      .then(res => {
        commit('DELETE_SONG', id)
      })
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}

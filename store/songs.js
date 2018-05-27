import { GET_SONGS, ADD_SONG } from "../graphql/song";

const state = {
  loadedSongs: []
};

const mutations = {
  SET_SONGS(state, songs) {
    state.loadedSongs = songs;
  },
  ADD_SONG(state, song) {
    state.loadedSongs.push(song);
  }
};

const actions = {
  nuxtServerInit(store, ctx) {
    console.log("nuxtServerInit");
    let client = ctx.app.apolloProvider.defaultClient;
    return client
      .query({ query: GET_SONGS })
      .then(res => res.data.songs)
      .then(songs => {
        store.commit("SET_SONGS", songs);
      });
  },
  ADD_SONG({ commit }, song) {
    let client = this.app.apolloProvider.defaultClient;
    client
      .mutate({
        mutation: ADD_SONG,
        variables: {
          title: song.title
        }
      })
      .then(res => {
        commit("ADD_SONG", res.data.addSong);
      });
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};

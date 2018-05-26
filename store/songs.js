import { GET_SONGS } from "../graphql/song";

const state = {
  loadedSong: []
};

const mutations = {
  SET_SONGS(state, songs) {
    state.loadedSong = songs;
  }
};

const actions = {
  nuxtServerInit(store, ctx) {
    let client = ctx.app.apolloProvider.defaultClient;
    return client
      .query({ query: GET_SONGS })
      .then(res => res.data.songs)
      .then(songs => {
        store.commit("SET_SONGS", songs);
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

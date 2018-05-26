import { GET_SONGS } from "../graphql/song";

const state = {
  loadedSongs: []
};

const mutations = {
  SET_SONGS(state, songs) {
    state.loadedSongs = songs;
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
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};

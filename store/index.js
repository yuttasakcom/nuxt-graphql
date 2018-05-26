import Vuex from "vuex";
import cameCase from "lodash/camelCase";

const requireModule = require.context("./", false, /\.js$/);
const modules = {};

requireModule.keys().forEach(filename => {
  if (filename === "./index.js") return;

  const moduleName = cameCase(filename.replace(/(\.\/|\.js)/g, ""));
  const storeConfig = requireModule(filename);
  modules[moduleName] = {
    ...(storeConfig.default || storeConfig)
  };
});

const createStore = () =>
  new Vuex.Store({
    modules
  });

export default createStore;

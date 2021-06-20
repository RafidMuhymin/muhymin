require("./src/styles/prismjs-a11y.css");

exports.onClientEntry = async () => {
  // eslint-disable-next-line no-undef
  const res = await fetch(`${__PATH_PREFIX__}/search_index.json`).catch((err) =>
    console.log("Failed fetch search index", err)
  );
  const fullIndex = await res.json();
  window.__LUNR__ = Object.keys(fullIndex).reduce(
    (prev, key) => ({
      ...prev,
      [key]: {
        index: require("lunr").Index.load(fullIndex[key].index),
        store: fullIndex[key].store,
      },
    }),
    {}
  );
};

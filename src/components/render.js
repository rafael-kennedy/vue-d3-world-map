module.exports = function(createElement) {
  const { transform = "" } = this;
  const toFeatureNode = ({ key, type, classes, d }) => {
    debugger;
    return type !== "Point"
      ? createElement("path", {
          key,
          class: classes,
          attrs: {
            d,
            transform
          }
        })
      : createElement("circle", {
          key,
          class: classes,
          attrs: {
            d,
            transform
          }
        });
  };

  return createElement(
    "svg",
    {
      attrs: { width: this.width, height: this.height }
    },
    this.features.map(toFeatureNode)
  );
};

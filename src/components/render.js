module.exports = function(createElement) {
  const { transform = "" } = this;
  const getElement = (slotName, tag, feature) => {
    const { key, classes, d } = feature;
    const typeName =
      feature &&
      feature.feature &&
      feature.feature.geometry &&
      feature.feature.geometry.type &&
      feature.feature.geometry.type.toLowerCase();
    const scopedSlot =
      this.$scopedSlots &&
      (this.$scopedSlots[slotName] || this.$scopedSlots[typeName]);
    return (
      (scopedSlot && scopedSlot({ feature })) ||
      this.$slots[slotName] ||
      this.$slots[typeName] ||
      this.$slots.default ||
      createElement(tag, {
        key,
        class: classes,
        attrs: {
          d,
          transform
        }
      })
    );
  };
  const toFeatureNode = feature => {
    const { key, classes, d } = feature;
    return feature.type !== "Point"
      ? createElement("path", {
          key,
          class: classes,
          attrs: {
            d,
            transform
          }
        })
      : (this.$scopedSlots && this.$scopedSlots.point({ feature })) ||
          this.$slots.point ||
          createElement("circle", {
            key,
            class: classes,
            attrs: {
              transform
            }
          });
  };

  return createElement(
    "svg",
    {
      attrs: { width: this.width, height: this.height },
      on: {
        click: (...data) => this.click && this.click(...data)
      }
    },
    this.features.map(toFeatureNode)
  );
};

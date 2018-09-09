const typeMap = [
  [`string`, data => JSON.parse(data)],
  [`function`, data => data()],
  [`object`, data => data]
];

module.exports = function topojson() {
  const parser = typeMap.find(([type]) => typeof this.data === type);
  if (parser) {
    return parser[1](this.data);
  }
  return this.data;
};

import component from "../src/components/map";
const data = require("./fixtures/square.json");
const { mount } = require("@vue/test-utils");

describe("props interface", () => {
  const api = {
    zoom: {
      term: "zoom",
      initial: "initialZoom",
      val: 2
    },
    rotate: {
      term: "rotate",
      initial: "initialRotate",
      val: [90, 90, 90]
    },
    center: {
      term: "center",
      initial: "initialCenter",
      val: [50, 50]
    },
    scaleExtent: {
      term: "scaleExtent",
      initial: "initialScaleExtent",
      val: [2, 6]
    }
  };

  const mountWithProp = (name, val) => {
    return mount(component, {
      propsData: {
        [name]: val,
        data,
        projection: "geoOrthographic"
      }
    });
  };

  test("should allow passing of initialValue", () => {
    Object.values(api).forEach(({ term, initial, val }) => {
      const subject = mountWithProp(initial, val);
      debugger;
      expect(subject[term]).toEqual(val);
    });
  });

  test("should allow syncing of term name", () => {
    Object.values(api).forEach(({ term, initial }) => {
      const subject = shallowMount(component, {
        [initial]: 21
      });
      debugger;
      expect(subject.term).toEqual(21);
    });
  });

  test("should allow syncing of term name", () => {
    Object.values(api).forEach(({ term, initial }) => {
      const subject = shallowMount(component, {
        [initial]: 21
      });
      debugger;
      expect(subject.term).toEqual(21);
    });
  });
});

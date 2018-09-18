(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{165:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This documentation is still a work in progress...")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("A number: svg width.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("A number: svg height.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("The TopoJSON data that will be used to render the map. This can be a responsive vue object passed down as a prop, but for many applications, this is unnecessary. If the actual paths of the shapes don't change, you should instead prefer to use a string, which can be parsed once, and not incur the cost of creating the vue reactive proxy object. You can also pass a function, that will be called with no arguments to return the topoJSON object. This is mostly just a convenience for passing a non-reactive object without needing to first cast it to a string.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("An ordered list of named objects in the TopoJSON topology objects. You can use this array to reorder layers in the rendered map, or to toggle individual layers on and off. If this parameter is not provided, it will default to all of the objects in the topology in the order specified.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("Disable the built in d3 pan and zoom functionality. Use this if you'd instead like to manage the zoom and centering programatically through synced props.")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("The center of the map. Defaults to [0, 0]")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("The rotation applied to the map. see "),a("a",{attrs:{href:"https://github.com/d3/d3-geo/blob/master/README.md#projection_rotate",target:"_blank",rel:"noopener noreferrer"}},[t._v("the d3 docs"),a("OutboundLink")],1),t._v(". Defaults to [0, 0, 0].")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("The range of applicable scales usable in the default pan and zoom. see "),a("a",{attrs:{href:"https://github.com/d3/d3-zoom/blob/master/README.md#zoom_scaleExtent",target:"_blank",rel:"noopener noreferrer"}},[t._v("the d3 docs"),a("OutboundLink")],1),t._v(". Defaults to [1, 10].")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),a("p",[t._v("The level of zoom applied to the map. This is the scale applied to the svg elements. Defaults to 1.")]),t._v(" "),t._m(23),t._v(" "),t._m(24)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"api-documentation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-documentation","aria-hidden":"true"}},[this._v("#")]),this._v(" API Documentation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[this._v("#")]),this._v(" Props")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"width"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#width","aria-hidden":"true"}},[this._v("#")]),this._v(" width")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"number"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#number","aria-hidden":"true"}},[this._v("#")]),this._v(" Number")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"height"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#height","aria-hidden":"true"}},[this._v("#")]),this._v(" height")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"number-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#number-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Number")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"data-required"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-required","aria-hidden":"true"}},[this._v("#")]),this._v(" data (required)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"object-string-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object-string-function","aria-hidden":"true"}},[this._v("#")]),this._v(" [Object, String, Function]")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"projection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#projection","aria-hidden":"true"}},[this._v("#")]),this._v(" projection")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"string-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string-function","aria-hidden":"true"}},[this._v("#")]),this._v(" [String, Function]")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The projection that will be used to render the map. Defaults to mercator. Can be the string name of one of the d3 geo projection functions styled like "),e("code",[this._v("'geoMercator'")]),this._v(" or a configured d3 projection function.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"objects"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#objects","aria-hidden":"true"}},[this._v("#")]),this._v(" objects")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"array-string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#array-string","aria-hidden":"true"}},[this._v("#")]),this._v(" Array [String]")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"disablezoom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disablezoom","aria-hidden":"true"}},[this._v("#")]),this._v(" disableZoom")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"boolean"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#boolean","aria-hidden":"true"}},[this._v("#")]),this._v(" Boolean")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"center"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#center","aria-hidden":"true"}},[this._v("#")]),this._v(" center")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"array-number-syncable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#array-number-syncable","aria-hidden":"true"}},[this._v("#")]),this._v(" Array [Number] "),e("em",[this._v("syncable")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"rotate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rotate","aria-hidden":"true"}},[this._v("#")]),this._v(" rotate")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"array-number-syncable-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#array-number-syncable-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Array [Number] "),e("em",[this._v("syncable")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"scaleextent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scaleextent","aria-hidden":"true"}},[this._v("#")]),this._v(" scaleExtent")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"array-number-syncable-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#array-number-syncable-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Array, [Number] "),e("em",[this._v("syncable")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"zoom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zoom","aria-hidden":"true"}},[this._v("#")]),this._v(" zoom")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"number-syncable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#number-syncable","aria-hidden":"true"}},[this._v("#")]),this._v(" Number "),e("em",[this._v("syncable")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"slots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slots","aria-hidden":"true"}},[this._v("#")]),this._v(" Slots")])}],!1,null,null,null);s.options.__file="README.md";e.default=s.exports}}]);
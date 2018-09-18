# API Documentation

This documentation is still a work in progress...

## Props

### width

#### Number

A number: svg width.

### height

#### Number

A number: svg height.

### data (required)

#### [Object, String, Function]

The TopoJSON data that will be used to render the map. This can be a responsive vue object passed down as a prop, but for many applications, this is unnecessary. If the actual paths of the shapes don't change, you should instead prefer to use a string, which can be parsed once, and not incur the cost of creating the vue reactive proxy object. You can also pass a function, that will be called with no arguments to return the topoJSON object. This is mostly just a convenience for passing a non-reactive object without needing to first cast it to a string.

### projection

#### [String, Function]

The projection that will be used to render the map. Defaults to mercator. Can be the string name of one of the d3 geo projection functions styled like `'geoMercator'` or a configured d3 projection function.

### objects

#### Array [String]

An ordered list of named objects in the TopoJSON topology objects. You can use this array to reorder layers in the rendered map, or to toggle individual layers on and off. If this parameter is not provided, it will default to all of the objects in the topology in the order specified.

### disableZoom

#### Boolean

Disable the built in d3 pan and zoom functionality. Use this if you'd instead like to manage the zoom and centering programatically through synced props.

### center

#### Array [Number] _syncable_

The center of the map. Defaults to [0, 0]

### rotate

#### Array [Number] _syncable_

The rotation applied to the map. see [the d3 docs](https://github.com/d3/d3-geo/blob/master/README.md#projection_rotate). Defaults to [0, 0, 0].

### scaleExtent

#### Array, [Number] _syncable_

The range of applicable scales usable in the default pan and zoom. see [the d3 docs](https://github.com/d3/d3-zoom/blob/master/README.md#zoom_scaleExtent). Defaults to [1, 10].

### zoom

#### Number _syncable_

The level of zoom applied to the map. This is the scale applied to the svg elements. Defaults to 1.

## Events

## Slots

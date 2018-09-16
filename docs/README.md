# Vue TopoJSON Map

This is a flexible vue component for displaying topojson maps in a vue application.

TopoJson is an efficient way to store and transmit geographic data, and can be used to dislay maps and geographic information in a lightweight way, especially on applications also using D3 for data visualizations.

This particular implementation is focused on displaying geographic maps in a vue-centric way, unlike some similar libraries which wrap but don't extend the d3 geographic tools. This means that this library attempts to make it easy to customize the display of paths and points in the rendered svg map not through accepting d3 configuration objects but by passing vue components into the slots exposed by the library and by listening to events emitted by the component.

## Why use this component

TopoJSON is a convenient, intuitive and lightwieght format for storing maps data and for transmitting it. Unlike common mapping libraries like google maps and leaflet.js, which both provide an excellent toolset for displaying maps, and for both of which there are convenient vue wrappers already, using topoJSON and d3 to render the maps means that you don't need to rely on a third party api to serve rendered maps tiles, instead, you can relatively easily curate your own topojson map data and serve it.

You are also not reliant on the terms of service of these providers which can be very proscriptive on what you can and cannot display and how you can display it.

Also, many of these libraries circumscribe the ways that you can control the interactions with the maps, which may be too limiting for many use cases involving highly interactive displays.

## When to use this component

This component is designed to work best for high level presentation of geographic information, and is designed to be very flexible and interact with your existing vue project idiomatically.

This component is good for use cases that do not involve street level detail, but might need high levels of customization. This tool would be a good fit if you are trying to answer questions like:

- How has the range of the North American beaver population changed over time?
- Which cities are the cheapest to fly to from a given airport?
- Where in malaysia have there been serious eathquakes in the last twenty years?
- What are the demographic trends in different African countries?

Some examples of questions that might be better answered by tools such as leaflet and google maps might be:

- How do I navigate to your bakery?
- What is the traffic like on I75?
- How close is your hotel to the Rock and Roll Hall of Fame?

Check out the [Examples](./examples) to get a better understanding of when this might be the best tool for you.

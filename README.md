# SVGZoomAndPan
A very simple zoom and pan library for SVG

## usage
this is just one simple function, add it to your project and call `addSVGZoomAndPan(mysvg)` passing a reference to an svg element.

[view the example](https://rawgit.com/Holger-Will/SVGZoomAndPan/master/examples/simple.html)

## how it works

this zoom and pan library uses the svg native `currentTranslate` and `currenScale` API for zoomin and panning.
It does not add anything to your SVG and it dos not alter any of your code. It just manipulates to two above mentioned APIs.


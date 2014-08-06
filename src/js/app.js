var myUrl = 'tiles2/{z}/{x}/{y}.png';
var my = new L.TileLayer(myUrl, {maxZoom: 4});

//var center ,12

var map = new L.Map('map', {
  zoom: 1,
  layers: [my],
  center: [-20.036, 38.9013],
});

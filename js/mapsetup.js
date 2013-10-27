
var defaultZoom = 13;
var bhLoc = [33.91832, -118.41574];
var laxLoc = [33.94250, -118.40806];
var laLoc = [34.05223, -118.24368];
var mdrLoc = [33.98029, -118.45174];
var esLoc = [33.91918, -118.41647];
var map = L.map('map').setView(mdrLoc, defaultZoom);

L.tileLayer('http://{s}.tile.cloudmade.com/1c633b30b4e14520b6140a6ce9765bc0/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 18
}).addTo(map);

var marker = L.marker(bhLoc).addTo(map);
marker.bindPopup("<b>Bronze Horseman</b>").openPopup();

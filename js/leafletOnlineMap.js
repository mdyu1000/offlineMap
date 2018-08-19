var mymap = L.map('map',{
                center: [39.9788, 116.30226],
                zoom: 0,
                maxZoom: 8,
                minZoom: 0,
            });

L.tileLayer(
    `${location.origin}/googleOverLayMap/countries/{z}/{x}/{y}.png`, {
    attribution: 'K7 leaflet online map',
}).addTo(mymap);

L.marker([121.546336, 25.028359]).addTo(mymap);
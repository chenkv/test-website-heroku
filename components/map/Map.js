import { useEffect, useState } from 'react';

import { AddressToCoordinates } from '../../utilities/AddressToCoordinates';
import { RetrieveFromDatabase } from '../../utilities/RetrieveFromDatabase';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

function Map() {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [Map, setMap] = useState();

  const [geojson, setGeojson] = useState(null);
  const [features, setFeatures] = useState([]);

  // This is for when we can make actual requests from the Azure DB
  // const { data, error } = RetrieveFromDatabase();

  // This is temporary, retrieving fixed set of data
 

  mapboxgl.accessToken =
    'pk.eyJ1IjoiaW5jb2duaXRvYnVyaXRvIiwiYSI6ImNrcmdyajlibDVuajEyeHF1Nnh3emp3Y2EifQ.YQJ1WIZtPqiJhV6635h0Vg';

  useEffect(() => {
    setPageIsMounted(true);

    let map = new mapboxgl.Map({
      container: 'map',
      // style: "mapbox://styles/mapbox/streets-v11",
      style: 'mapbox://styles/incognitoburito/cks9tzf68307c17qm3u91wuo0',
      center: [-98.35, 39.5],
      zoom: 3.2,
      // pitch: 45,
    });



    map.on('click', function (e) {
      // If the user clicked on one of your markers, get its information.
      var features = map.queryRenderedFeatures(e.point, {
        layers: ['2017_GeoDataSet'] // replace with your layer name
      });
      if (!features.length) {
        return;
      }
      var feature = features[0];

      /* 
        Create a popup, specify its options 
        and properties, and add it to the map.
      */
      var popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          '<h3>' + feature.properties.title + '</h3>' +
          '<p>' + feature.properties.description + '</p>'
        )
        .addTo(map);
    });
  });

            // geojson.data.features.forEach(feature => {

            //   const long = feature.geometry.coordinates[0]
            //   const lat = feature.geometry.coordinates[1]

            //   new mapboxgl.Popup({ closeOnClick: false })
            //   .setLngLat([long, lat])
            //   .setHTML('<h1>Hello World!</h1>')
            //   .addTo(map);

            // })

            /* 
Add an event listener that runs
  when a user clicks on the map element.
*/

          

        


return <div id="map" style={{ height: 1200, width: 1900 }} />;
}

export default Map;

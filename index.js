import data from "./data.json" assert { type: "json" };

require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",

  "esri/Graphic",
  "esri/layers/GraphicsLayer",
], function (esriConfig, Map, MapView, Graphic, GraphicsLayer) {
  esriConfig.apiKey =
    "AAPKd54c7848d01f4691855b449d9afd1b31OjW4q0xS3HCLHUGZ8Io-FG8HM4UEA9QCsJkHQ584qtsYwlfKLZzKc7mXrPLU30Lt";
  const map = new Map({
    basemap: "arcgis-topographic", // Basemap layer service
  });

  const view = new MapView({
    map: map,
    center: [105.1366886, 9.7924769], // Longitude, latitude
    zoom: 17, // Zoom level
    container: "viewDiv", // Div element
  });

  const popupTemplate = {
    title: "{Name}",
    content: "{Description}",
  };

  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);

  data.map((item) => {
    switch (item.geometry.type) {
      case "point":
        const simpleMarkerSymbol = {
          type: "picture-marker",
          url: "./assets/icons/location_on_black_24dp.svg",
          height: "27px",
          width: "27px",
        };
        const pointGraphic = new Graphic({
          geometry: item.geometry,
          symbol: simpleMarkerSymbol,

          attributes: {
            Name: item.name,
            Description: item.description,
          },
          popupTemplate,
        });
        graphicsLayer.add(pointGraphic);
        break;
      case "polyline":
        const simpleLineSymbol = {
          type: "simple-line",
          color: [226, 119, 40], // Orange
          width: 2,
        };
        const polylineGraphic = new Graphic({
          geometry: item.geometry,
          symbol: simpleLineSymbol,

          attributes: {
            Name: item.name,
            Description: item.description,
          },
          popupTemplate,
        });
        graphicsLayer.add(polylineGraphic);
        break;
      case "polygon":
        const simpleFillSymbol = {
          type: "simple-fill",
          color: item.color, // Orange, opacity 80%
          outline: {
            color: [255, 255, 255],
            width: 1,
          },
        };

        const polygonGraphic = new Graphic({
          geometry: item.geometry,
          symbol: simpleFillSymbol,

          attributes: {
            Name: item.name,
            Description: item.description,
          },
          popupTemplate,
        });
        graphicsLayer.add(polygonGraphic);
        break;
      default:
        break;
    }
  });
});

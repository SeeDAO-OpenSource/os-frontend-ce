<template>
    <div>
        <Breadcrumbs main="Maps" title="Vue Leaflet"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">

                <div class="col-xl-6">
                    <div class="card">
                        <div class="card-header">
                          <h5>Simple Map</h5>
                      </div>
                      <div class="card-body">
                        <l-map :zoom="simple.zoom" :center="simple.center" style="height: 500px">
                            <l-tile-layer :url="simple.url"></l-tile-layer>
                        </l-map>
                      </div>
                    </div>
                </div>

                <div class="col-xl-6">
                    <div class="card">
                        <div class="card-header">
                            <h5>Multi-language support</h5><span>Display a map with labels in a foreign language</span>
                        </div>
                        <div class="card-body">
                            <l-map :zoom="polygon.zoom" :center="polygon.center" style="height: 500px">
                                <l-tile-layer :url="polygon.url"></l-tile-layer>
                                <l-polygon :lat-lngs="polygon.latlngs" :color="polygon.color">
                                    <l-popup content="Polygon" />
                                </l-polygon>
                            </l-map>
                        </div>
                    </div>
                </div>

                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Multi-language support</h5><span>Display a map with labels in a foreign language</span>
                        </div>
                        <div class="card-body">
                            <l-map :zoom="simplewithmarker.zoom" :center="simplewithmarker.center" style="height: 500px">
                                <l-marker :lat-lng="simplewithmarker.marker" :title="simplewithmarker.title" :draggable="false">
                                    <l-popup :content="simplewithmarker.text" />
                                </l-marker>
                                <l-tile-layer :url="simplewithmarker.url" />
                            </l-map>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    <!-- Container-fluid Ends-->
    </div>
</template>

<script>
  import { LMap,LMarker,LPopup,LTileLayer,LPolygon } from 'vue2-leaflet';

  export default {
    components: {
      LMap,
      LMarker,
      LPopup,
      LTileLayer,
      LPolygon,      
    },
    data() {
      return {
        simple:{
          zoom:5,
          center: [49.439557, 234.558105],
          url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        },
        polygon:{
          zoom: 11,
          center: [47.2219, -1.545266],
          latlngs: [
            [47.2263299, -1.6222],
            [47.21024000000001, -1.6270065],
            [47.1969447, -1.6136169],
            [47.18527929999999, -1.6143036],
            [47.1794457, -1.6098404],
            [47.1775788, -1.5985107],
            [47.1676598, -1.5753365],
            [47.1593731, -1.5521622],
            [47.1593731, -1.5319061],
            [47.1722111, -1.5143967],
            [47.1960115, -1.4841843],
            [47.2095404, -1.4848709],
            [47.2291277, -1.4683914],
            [47.2533687, -1.5116501],
            [47.2577961, -1.5531921],
            [47.26828069, -1.5621185],
            [47.2657179, -1.589241],
            [47.2589612, -1.6204834],
            [47.237287, -1.6266632],
            [47.2263299, -1.6222]
          ],
          color: '#ff00ff',
          url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        },
        simplewithmarker:{
          zoom: 13,
          center: [47.41322, -1.219482],
          url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
          marker: [47.41322, -1.219482],
          text: 'my marker popup text',
          title: 'My marker popup title',
        }
      };
    },
  };
</script>

<style>
@import "~leaflet/dist/leaflet.css";
</style>
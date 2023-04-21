<template>
    <div>
        <Breadcrumbs main="Maps" title="Google Maps"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
          <div class="row">

              <div class="col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h5>Map at a specified location</h5><span>Display a map at a specified location and zoom level.</span>
                  </div>
                  <div class="card-body">
                      <GmapMap :center="{lat:20.5937, lng:78.9629}" :zoom="12" style="width: auto; height: 500px">
                      </GmapMap>
                  </div>
                </div>
              </div>

              <div class="col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h5>Multi-language support</h5><span>Display a map with labels in a foreign language</span>
                  </div>
                  <div class="card-body">
                    <GmapMap :center="{lat:20.5937, lng:78.9629}" :zoom="6" style="width: auto; height: 500px"
                      :options="{
                          region: 'VI',
                          language: 'vi',
                      }"
                    >
                    </GmapMap>
                  </div>
                </div>
              </div>

              <div class="col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h5>Marker on the Map</h5><span>Display a map highlighting points of interest</span>
                  </div>
                  <div class="card-body">
                    <Markers></Markers>
                  </div>
                </div>
              </div>

              <div class="col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h5>Draggable Marker</h5><span>Display a map highlighting points of interest</span>
                  </div>
                  <div class="card-body">
                    <DraggableMarker></DraggableMarker>
                  </div>
                </div>
              </div>

              <div class="col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h5>Polyline on the Map</h5><span>Display a map with a line showing a known route</span>
                  </div>
                  <div class="card-body">
                    <GooglePolyline></GooglePolyline>
                  </div>
                </div>
              </div>

              <div class="col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h5>Polygon on the Map</h5><span>Display a map highlighting a region or area</span>
                  </div>
                  <div class="card-body">
                    <TrianglePolygon></TrianglePolygon>
                  </div>
                </div>
              </div>

          </div>
        </div>
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>
  import GooglePolyline from './maps/polyline';
  import TrianglePolygon from './maps/triangle_polygon';
  import DraggableMarker from './maps/draggable_marker';
  import Markers from './maps/markers';

  export default {
    components: {
      GooglePolyline,
      TrianglePolygon,
      DraggableMarker,
      Markers
    },
    data(){
      return{
      };
    }
  };
</script>
<template>
	<div>
		<GmapMap :center="center" :zoom="5" style="width: 100%; height: 500px" ref="map">
			<GmapPolyline v-if="path.length > 0" :path="path" :editable="false" @path_changed="updateEdited($event)"
				@rightclick="handleClickForDelete"
				ref="polyline">
			</GmapPolyline>
		</GmapMap>
	</div>
</template>
<script>
  export default {
    data(){
      return{
        center: { lat: 52, lng: 5 },
        edited: null,
        path: [
          { lat:53.3477, lng:-6.2597 },
          { lat:51.5008, lng:-0.1224 },
          { lat:48.8567, lng:2.3508 },
          { lat:52.5166, lng:13.3833 },
        ],
        mvcPath: null,
        errorMessage: null,
        polylineGeojson: '',
      };
    },
    computed: {
      polylinePath: function () {
        if (!this.mvcPath) return null;
        let path = [];
        for (let j=0; j<this.mvcPath.getLength(); j++) {
          let point = this.mvcPath.getAt(j);
          path.push({ lat: point.lat(), lng: point.lng() });
        }
        return path;
      },
    },
    watch: {
      polylinePath:(function (path) {
        if (path) {
          this.path = path;
          this.polylineGeojson = JSON.stringify({
            type: 'Polyline',
            coordinates: this.path.map(({ lat, lng }) => [lng, lat])
          }, null, 2);
        }
      }, 1000)
    },
    methods: {
      updateCenter: function (place) {
        this.center = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
      },
      updateEdited: function (mvcPath) {
        this.mvcPath = mvcPath;
      },
      handleClickForDelete($event) {
        if ($event.vertex) {
          this.$refs.polyline.$polylineObject.getPaths()
            .getAt($event.path)
            .removeAt($event.vertex);
        }
      },
      readGeojson: function ($event) {
        try {
          this.polylineGeojson = $event.target.value;
          var v = JSON.parse($event.target.value);
          this.path = v.coordinates
            .map(([lng, lat]) => ({ lat, lng }));
          this.errorMessage = null;
        } catch (err) {
          this.errorMessage = err.message;
        }
      }
    }
  };
</script>
<template>
	<div>
		<GmapMap :center="{lat: 52, lng: 5}" :zoom="5" style="width: 100%; height: 500px">
			<gmap-polygon :paths="paths" :editable="false" @paths_changed="updateEdited($event)">
			</gmap-polygon>
		</GmapMap>
	</div>
</template>
<script>
  export default {
    data(){
      return{
        edited: null,
        paths: [
          { lat:46.2276, lng:2.2137 },
          { lat:51.81925, lng:12.35031 },
          { lat:48.2082, lng:16.54958 },
        ]
      };
    },
    methods: {
      updateEdited(mvcArray) {
        let paths = [];
        for (let i=0; i<mvcArray.getLength(); i++) {
          let path = [];
          for (let j=0; j<mvcArray.getAt(i).getLength(); j++) {
            let point = mvcArray.getAt(i).getAt(j);
            path.push({ lat: point.lat(), lng: point.lng() });
          }
          paths.push(path);
        }
        this.edited = paths;
      }
    }
  };
</script>
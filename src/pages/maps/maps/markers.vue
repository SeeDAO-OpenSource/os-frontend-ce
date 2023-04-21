<template>
	<div>
		<GmapMap :center="center" :zoom="4" style="width: 100%; height: 500px">
			<GmapMarker
			:key="index"
			v-for="(m, index) in markers"
			:position="m.position"
			:clickable="false"
			:draggable="false"
			@click="center=m.position"
			@mouseover="statusText = m.text"
			@mouseout="statusText = null"
			/>
		</GmapMap>
	</div>
</template>
<script>

  export default {
    data(){
      return{
        statusText: '',
        center: { lat: 50, lng: 5 },
        markers: [
          { position: { lat: 48.8567,lng: 2.3508 } },
          { position: { lat: 41.9,lng: 12.5 } },
          { position: { lat: 52.5166, lng: 13.3833 } },
          { position: { lat: 40.4,lng: -3.6833 } },
          { position: { lat: 51.5008,lng: -0.1224 } }
        ],
      };
    },
    methods: {
    }
  };
</script>
<template>
	<div>
		<GmapMap :center="center" :zoom="12" style="width: 100%; height: 500px">
			<GmapMarker
				:key="index"
				v-for="(m, index) in markers"
				:position="m.position"
				:clickable="true"
				:draggable="true"
				@click="center=m.position"
			/>
		</GmapMap>
	</div>
</template>
<script>

  export default {
    data(){
      return{
        center: {
          lat: 42.35805,
          lng: -71.0636
        },
        markers: [
          {
            position: {
              lat: 42.35805,
              lng: -71.0636
            }
          }
        ],
      };
    },
    methods: {
    }
  };
</script>
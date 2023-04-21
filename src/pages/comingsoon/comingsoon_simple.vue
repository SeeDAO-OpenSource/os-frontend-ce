<template>
	<div>
		<!-- Loader starts-->
		<!-- <div class="loader-wrapper">
			<div class="loader bg-white">
				<div class="whirly-loader"> </div>
			</div>
		</div> -->
		<!-- Loader ends-->
		<!-- page-wrapper Start-->
		<div class="page-wrapper">
			<!-- Page Body Start-->
			<div class="container-fluid p-0">
				<div class="comingsoon">
					<div class="comingsoon-inner text-center"><img src="../../assets/images/other-images/coming-soon-Logo.png" alt="">
						<h5>WE ARE COMING SOON</h5>
						<div class="countdown">
							<Timer :startTime="startTime" :endTime="endTime"></Timer>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  import Timer from './comingsoon_timer';
  
  export default{
    components: {
      Timer
    },
    data(){
      return{
        startTime: 'Apr 29, 2021 00:00:00',
        endTime: 'Apr 29, 2022 00:00:00',
      };
    },
  };
</script>
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
			<!-- Maintenance start-->
			<div class="error-wrapper maintenance-bg">
				<div class="container">
					<ul class="maintenance-icons">
						<li><i class="fa fa-cog"></i></li>
						<li><i class="fa fa-cog"></i></li>
						<li><i class="fa fa-cog"></i></li>
					</ul>
					<div class="maintenance-heading">
						<h2 class="headline">MAINTENANCE</h2>
					</div>
					<h4 class="sub-content">Our Site is Currently under maintenance We will be back Shortly<br>                Thank You For Patience</h4>
					<div><router-link class="btn btn-primary-gradien btn-lg text-light" :to="{ path: '/dashboard/default' }">BACK TO HOME PAGE</router-link></div>
				</div>
			</div>
			<!-- Maintenance end-->
		</div>
	</div>
</template>
<script>
</script>

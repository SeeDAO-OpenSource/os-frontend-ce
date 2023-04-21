<template>
	<div>
		<Breadcrumbs main="Bonus UI" title="pagination"/>
		<!-- Container-fluid starts-->
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-6">
					<div class="card">
						<div class="card-header">
							<h5>Pagination</h5>
						</div>
						<div class="card-body">
							<b-pagination-nav
							:number-of-pages="3"
							base-url="#"
							first-text="First"
							prev-text="Prev"
							next-text="Next"
							last-text="Last"
							></b-pagination-nav>
						</div>
					</div>
				</div>
				<div class="col-xl-6">
					<div class="card">
						<div class="card-header">
							<h5>Pagination with icons</h5>
						</div>
						<div class="card-body">
							<b-pagination-nav
							:number-of-pages="3"
							base-url="#1"
							></b-pagination-nav>
						</div>
					</div>
				</div>
				<div class="col-xl-12">
					<div class="card">
						<div class="card-header">
							<h5>Pagination alignment</h5>
						</div>
						<div class="card-body">
							<!-- left aligned pagination-->
							<div class="m-b-30">
								<b-pagination-nav
								:number-of-pages="3"
								base-url="#2"
								prev-text="Prev"
								next-text="Next"
								></b-pagination-nav>
							</div>
							<!-- center aligned pagination-->
							<div class="m-b-30">
								<b-pagination-nav
								:number-of-pages="3"
								base-url="#3"
								prev-text="Prev"
								next-text="Next"
								align="center"
								></b-pagination-nav>
							</div>
							<!-- right aligned pagination-->
							<div>
								<b-pagination-nav
								:number-of-pages="3"
								base-url="#4"
								prev-text="Prev"
								next-text="Next"
								align="right"
								></b-pagination-nav>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-12">
					<div class="card">
						<div class="card-header">
							<h5>Pagination with active and disabled</h5>
						</div>
						<div class="card-body">
							<b-pagination-nav
							:number-of-pages="3"
							base-url="#5"
							first-text="First"
							prev-text="Prev"
							next-text="Next"
							last-text="Last"
							></b-pagination-nav>
						</div>
					</div>
				</div>
				<div class="col-xl-12">
					<div class="card">
						<div class="card-header">
							<h5>Pagination Color</h5>
						</div>
						<div class="card-body">
							<div class="m-b-30">
								<b-pagination-nav
								:number-of-pages="3"
								base-url="#6"
								prev-text="Prev"
								next-text="Next"
								class="pagination-primary"
								></b-pagination-nav>
							</div>
							<div class="m-b-30">
								<b-pagination-nav
								:number-of-pages="3"
								base-url="#7"
								prev-text="Prev"
								next-text="Next"
								class="pagination-secondary"
								></b-pagination-nav>
							</div>
							<div class="m-b-30">
								<b-pagination-nav
								:number-of-pages="3"
								base-url="#8"
								prev-text="Prev"
								next-text="Next"
								class="pagination-success"
								></b-pagination-nav>
							</div>
							<div class="m-b-30">
								<b-pagination-nav
								:number-of-pages="3"
								base-url="#9"
								prev-text="Prev"
								next-text="Next"
								class="pagination-info"
								></b-pagination-nav>
							</div>
							<div class="m-b-30">
								<b-pagination-nav
								:number-of-pages="3"
								base-url="#11"
								prev-text="Prev"
								next-text="Next"
								class="pagination-warning"
								></b-pagination-nav>
							</div>
							<div>
								<b-pagination-nav
								:number-of-pages="3"
								base-url="#12"
								prev-text="Prev"
								next-text="Next"
								class="pagination-danger"
								></b-pagination-nav>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-12">
					<div class="card">
						<div class="card-header">
							<h5>Pagination sizing</h5>
						</div>
						<div class="card-body">
							<!-- large size pagination-->
							<div class="m-b-30">
								<b-pagination-nav
								:number-of-pages="3"
								base-url="#13"
								prev-text="Prev"
								next-text="Next"
								size="lg"
								class="pagination-primary"
								></b-pagination-nav>
							</div>
							<!-- small size pagination-->
							<div>
								<b-pagination-nav
								:number-of-pages="3"
								base-url="#14"
								prev-text="Prev"
								next-text="Next"
								size="sm"
								class="pagination-primary"
								></b-pagination-nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Container-fluid Ends-->
	</div>
</template>

<script>
  export default {
  };
</script>

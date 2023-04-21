<template>
	<div>
		<Breadcrumbs main="Form Controls" title="Mega Options"/>
		<!-- Container-fluid starts-->
		<div class="container-fluid">
			<div class="row mega-option">

				<div class="col-sm-12 col-xl-6 xl-100">
					<div class="card">
						<div class="card-header">
							<h5>Default Style</h5><span>This option is show buydefault you don't need to add any extra class</span>
						</div>
						<div class="card-body megaoptions-border-space-sm">
							<form class="mega-inline">
								<!-- <b-form-group class="mb-0"> -->
								<div class="row">
									
									<div class="col-sm-6">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-primary">
													<b-form-radio name="radio1" v-model="defaultradio" value="1">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">COD<span class="badge badge-primary pull-right digits">50 INR</span></h6>
															<p>Estimated 1 Day Shipping ( Duties end tax may be due delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>

									<div class="col-sm-6">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-secondary">
													<b-form-radio name="radio1" v-model="defaultradio" value="2">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">Fast<span class="badge badge-secondary pull-right digits">100 INR</span></h6>
															<p>Estimated 1 Day Shipping ( Duties end tax may be due delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>

								</div>
								<!-- </b-form-group> -->
							</form>
						</div>
						<div class="card-footer text-right">
							<b-button type="submit" variant="primary" class="m-r-15">Submit</b-button>
							<b-button type="reset" variant="light">Cancel</b-button>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6 xl-100">
					<div class="card">
						<div class="card-header">
							<h5>No Border</h5><span>By adding .plain-style class to .mega-inline You can archive this style</span>
						</div>
						<div class="card-body">
							<form class="mega-inline plain-style">
								<div class="row">
									<div class="col-sm-6">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-primary">
													<b-form-radio name="radio2" v-model="noborderradio" value="1">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">COD<span class="badge badge-primary pull-right digits">50 INR</span></h6>
															<p>Estimated 1 Day Shipping ( Duties end tax may be due delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-secondary">
													<b-form-radio name="radio2" v-model="noborderradio" value="2">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">Fast<span class="badge badge-secondary pull-right digits">100 INR</span></h6>
															<p>Estimated 1 Day Shipping ( Duties end tax may be due delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="card-footer text-right">
							<b-button type="submit" variant="primary" class="m-r-15">Submit</b-button>
							<b-button type="reset" variant="light">Cancel</b-button>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6 xl-100">
					<div class="card">
						<div class="card-header">
							<h5>Solid Border Style</h5><span>By adding .border-style class to .mega-inline You can archive this style</span>
						</div>
						<div class="card-body megaoptions-border-space-sm">
							<form class="mega-inline border-style">
								<div class="row">
									<div class="col-sm-6">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-primary">
													<b-form-radio name="radio3" v-model="solidborder" value="1">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">COD<span class="badge badge-primary pull-right digits">50 INR</span></h6>
															<p>Estimated 1 Day Shipping ( Duties end tax may be due delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-primary">
													<b-form-radio name="radio3" v-model="solidborder" value="2">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">Fast<span class="badge badge-secondary pull-right digits">100 INR</span></h6>
															<p>Estimated 1 Day Shipping ( Duties end tax may be due delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="card-footer text-right">
							<b-button type="submit" variant="primary" class="m-r-15">Submit</b-button>
							<b-button type="reset" variant="light">Cancel</b-button>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6 xl-100">
					<div class="card">
						<div class="card-header">
							<h5>Offer style Border</h5><span>By adding .offer-style class to .mega-inline You can archive this style</span>
						</div>
						<div class="card-body megaoptions-border-space-sm">
							<form class="mega-inline offer-style">
								<div class="row">
									<div class="col-sm-6">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-primary">
													<b-form-radio name="radio4" v-model="offerstyleborder" value="1">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">COD<span class="badge badge-primary pull-right digits">50 INR</span></h6>
															<p>Estimated 1 Day Shipping ( Duties end tax may be due delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-secondary">
													<b-form-radio name="radio4" v-model="offerstyleborder" value="2">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">Fast<span class="badge badge-secondary pull-right digits">100 INR</span></h6>
															<p>Estimated 1 Day Shipping ( Duties end tax may be due delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="card-footer text-right">
							<b-button type="submit" variant="primary" class="m-r-15">Submit</b-button>
							<b-button type="reset" variant="light">Cancel</b-button>
						</div>
					</div>
				</div>

				<div class="col-sm-12">
					<div class="card">
						<div class="card-header">
							<h5>Inline Style</h5><span>For Create inline megaoption add <code>.mega-inline</code> class in form tag</span>
						</div>
						<div class="card-body megaoptions-border-space-sm">
							<form class="mega-inline">
								<div class="row">
									<div class="col-sm-6">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-primary">
													<b-form-radio name="radio5" v-model="inlinestyle" value="1">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">COD<span class="badge badge-primary pull-right digits">50 INR</span></h6>
															<p>Estimated 14-20 Day Shipping ( Duties end taxes may be due upon delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-secondary">
													<b-form-radio name="radio5" v-model="inlinestyle" value="2">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">Fast<span class="badge badge-secondary pull-right digits">100 INR</span></h6>
															<p>Estimated 1 Day Shipping ( Duties end taxes may be due upon delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-secondary">
													<b-form-radio name="radio5" v-model="inlinestyle" value="3">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">Standard<span class="badge badge-secondary pull-right digits">80 INR</span></h6>
															<p>Estimated 3 Day Shipping ( Duties end taxes may be due upon delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-primary">
													<b-form-radio name="radio5" v-model="inlinestyle" value="4">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">Local <span class="badge badge-primary pull-right digits">Free</span></h6>
															<p>Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="card-footer text-right">
							<b-button type="submit" variant="primary" class="m-r-15">Submit</b-button>
							<b-button type="reset" variant="light">Cancel</b-button>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6 xl-100 box-col-12">
					<div class="card height-equal">
						<div class="card-header">
							<h5>Vertical Style</h5><span>For Create inline megaoption add <code>.mega-vertical</code> class in form tag</span>
						</div>
						<div class="card-body">
							<form class="mega-vertical">
								<div class="row">
									<div class="col-sm-12">
										<p class="mega-title m-b-5">Delivery Option</p>
									</div>
									<div class="col-sm-6">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-primary">
													<b-form-radio name="radio6" v-model="verticalstyle1" value="1">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">COD<span class="badge badge-primary pull-right digits">50 INR</span></h6>
															<p>Estimated 10 to 15 Day Shipping ( Duties end tax may be due delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-secondary">
													<b-form-radio name="radio6" v-model="verticalstyle1" value="2">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">Fast <span class="badge badge-secondary pull-right digits">100 INR</span></h6>
															<p>Estimated 10 to 12 Day Shipping ( Duties end tax may be due delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-success">
													<b-form-radio name="radio6" v-model="verticalstyle1" value="3">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">Standard <span class="badge badge-success pull-right digits">80 INR</span></h6>
															<p>Estimated 3 to 5 Day Shipping ( Duties end tax may be due delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-info">
													<b-form-radio name="radio6" v-model="verticalstyle1" value="4">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">Local <span class="badge badge-info pull-right digits">Free</span></h6>
															<p>Estimated 3 to 5 Day Shipping ( Duties end taxes may be due upon delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-12">
										<p class="mega-title m-b-5">Buying Option</p>
									</div>
									<div class="col-sm-6">
										<div class="card mb-0">
											<div class="media p-20">
												<div class="radio radio-warning">
													<b-form-radio name="radio7" v-model="verticalstyle2" value="1">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">XYZ Seller<span class="badge badge-warning pull-right digits">250 INR</span></h6>
															<p class="rating-star-wrapper"><i class="icofont icofont-star txt-warning"></i><i class="icofont icofont-star txt-warning"></i><i class="icofont icofont-star txt-warning"></i><i class="icofont icofont-star txt-warning"></i><i class="icofont icofont-star txt-warning m-r-5"></i>5 start rating</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="card mb-0">
											<div class="media p-20">
												<div class="radio radio-danger">
													<b-form-radio name="radio7" v-model="verticalstyle2" value="2">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">ABC Seller<span class="badge badge-danger pull-right digits">150 INR</span></h6>
															<p class="rating-star-wrapper"><i class="icofont icofont-star txt-warning"></i><i class="icofont icofont-star"></i><i class="icofont icofont-star"></i><i class="icofont icofont-star"></i><i class="icofont icofont-star m-r-5"></i>1 start rating</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="card-footer text-right">
							<b-button type="submit" variant="primary" class="m-r-15">Submit</b-button>
							<b-button type="reset" variant="light">Cancel</b-button>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6 xl-100 box-col-12">
					<div class="card height-equal">
						<div class="card-header">
							<h5>Horizontal Style</h5><span>For Create inline megaoption add <code>.mega-horizontal</code> class in form tag</span>
						</div>
						<div class="card-body">
							<form class="mega-horizontal">
								<div class="row">
									<div class="col-sm-3">
										<p class="mega-title">Delivery Option</p>
									</div>
									<div class="col-sm-9">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-primary">
													<b-form-radio name="radio8" v-model="horizontalstyle1" value="1">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">COD<span class="badge badge-primary pull-right digits">50 INR</span></h6>
															<p>Estimated 5 Day Shipping ( Duties end tax may be due delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-9 offset-sm-3">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-secondary">
													<b-form-radio name="radio8" v-model="horizontalstyle1" value="2">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">Fast <span class="badge badge-secondary pull-right digits">100 INR</span></h6>
															<p>Estimated 1 Day Shipping ( Duties end tax may be due delivery )</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-3">
										<p class="mega-title">Buying Option</p>
									</div>
									<div class="col-sm-9">
										<div class="card">
											<div class="media p-20">
												<div class="radio radio-success">
													<b-form-radio name="radio9" v-model="horizontalstyle2" value="1">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">XYZ Seller<span class="badge badge-success pull-right digits">250 INR</span></h6>
															<p class="rating-star-wrapper"><i class="icofont icofont-star txt-warning"></i><i class="icofont icofont-star txt-warning"></i><i class="icofont icofont-star txt-warning"></i><i class="icofont icofont-star txt-warning"></i><i class="icofont icofont-star txt-warning m-r-5"></i>5 start rating</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-9 offset-sm-3">
										<div class="card mb-0">
											<div class="media p-20">
												<div class="radio radio-info">
													<b-form-radio name="radio9" v-model="horizontalstyle2" value="2">
														<div class="media-body">
															<h6 class="mt-0 mega-title-badge">ABC Seller<span class="badge badge-info pull-right digits">150 INR</span></h6>
															<p class="rating-star-wrapper"><i class="icofont icofont-star txt-warning"></i><i class="icofont icofont-star"></i><i class="icofont icofont-star"></i><i class="icofont icofont-star"></i><i class="icofont icofont-star m-r-5"></i>1 start rating</p>
														</div>
													</b-form-radio>
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="card-footer text-right">
							<b-button type="submit" variant="primary" class="m-r-15">Submit</b-button>
							<b-button type="reset" variant="light">Cancel</b-button>
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
    data(){
      return{
        defaultradio:1,
        noborderradio:1,
        solidborder:1,
        offerstyleborder:1,
        inlinestyle:1,
        verticalstyle1:1,
        verticalstyle2:1,
        horizontalstyle1:1,
        horizontalstyle2:1,
      };
    }
  };
</script>
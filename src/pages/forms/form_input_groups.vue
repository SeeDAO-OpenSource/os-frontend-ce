<template>
	<div>
		<Breadcrumbs main="Form Controls" title="Input Groups"/>
		<!-- Container-fluid starts-->
		<div class="container-fluid">
			<div class="row">				
				<div class="col-sm-12">

					<div class="card">
						<div class="card-header">
							<h5>Basic Input groups</h5>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col">
									<form>

										<div class="form-group m-form__group">
											<label>Left Addon</label>

											<b-input-group prepend="@">
												<b-form-input type="text" placeholder="Email"></b-form-input>
											</b-input-group>

										</div>

										<div class="form-group m-form__group">
											<label>Right Addon</label>

											<b-input-group append="@example.com">
												<b-form-input type="text" placeholder="Recipient's username"></b-form-input>
											</b-input-group>

										</div>

										<div class="form-group">
											<label>Joint Addon</label>

											<b-input-group prepend="$">
												<b-input-group-prepend is-text>0.00</b-input-group-prepend>
												<b-form-input type="text"></b-form-input>
											</b-input-group>

										</div>

										<div class="form-group">
											<label>Left & Right Addon</label>
											
											<b-input-group prepend="$" append=".00">
												<b-form-input type="text"></b-form-input>
											</b-input-group>

										</div>

										<div class="form-group input-group-solid">
											<label>Solid style</label>
											<b-input-group prepend="@">
												<b-form-input type="text" placeholder="Email"></b-form-input>
											</b-input-group>
										</div>

										<div class="form-group input-group-square">
											<label>Square style</label>
											<b-input-group prepend="+">
												<b-form-input type="text" placeholder="Email"></b-form-input>
											</b-input-group>
										</div>

										<div class="form-group input-group-square">
											<label>Raise style</label>
											<b-input-group prepend="#" class="input-group-air">
												<b-form-input type="text" placeholder="Email"></b-form-input>
											</b-input-group>
										</div>

										<div class="form-group mb-0">
											<label>Left & Right Addon</label>

											<b-input-group prepend="$" append=".00" class="pill-input-group">
												<b-form-input type="text"></b-form-input>
											</b-input-group>

										</div>

									</form>
								</div>
							</div>
						</div>
						<div class="card-footer">
							<b-button type="submit" variant="primary" class="mr-1">Submit</b-button>
							<b-button type="reset" variant="light">Cancel</b-button>
						</div>
					</div>

					<div class="card">
						<div class="card-header">
							<h5>Basic Input groups</h5>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col">
									<form>

										<div class="form-group m-form__group">
											<label>Left Addon</label>

											<b-input-group>
												<b-input-group-prepend is-text><i class="icofont icofont-pencil-alt-5"></i></b-input-group-prepend>
												<b-form-input type="text" placeholder="Email"></b-form-input>
											</b-input-group>

										</div>

										<div class="form-group m-form__group">
											<label>Right Addon</label>

											<b-input-group>
												<b-form-input type="text" placeholder="Recipient's username"></b-form-input>
												<b-input-group-append is-text><i class="icofont icofont-ui-dial-phone"></i></b-input-group-append>
											</b-input-group>

										</div>

										<div class="form-group">
											<label>Joint Addon</label>

											<b-input-group>
												<b-input-group-prepend is-text><i class="icofont icofont-unlink"></i></b-input-group-prepend>
												<b-input-group-prepend is-text>0.00</b-input-group-prepend>
												<b-form-input type="text"></b-form-input>
											</b-input-group>

										</div>

										<div class="form-group">
											<label>Left & Right Addon</label>
											
											<b-input-group>
												<b-input-group-prepend is-text><i class="icofont icofont-ui-zoom-out"></i></b-input-group-prepend>
												<b-form-input type="text"></b-form-input>
												<b-input-group-append is-text><i class="icofont icofont-ui-zoom-out"></i></b-input-group-append>
											</b-input-group>

										</div>

										<div class="form-group input-group-solid">
											<label>Solid style</label>
											<b-input-group>
												<b-input-group-prepend is-text><i class="icofont icofont-users"></i></b-input-group-prepend>
												<b-form-input type="text" placeholder="999999"></b-form-input>
											</b-input-group>
										</div>

										<div class="form-group input-group-square">
											<label>Flat style</label>
											<b-input-group>
												<b-input-group-prepend is-text><i class="icofont icofont-credit-card"></i></b-input-group-prepend>
												<b-form-input type="text"></b-form-input>
											</b-input-group>
										</div>

										<div class="form-group input-group-square">
											<label>Raise style</label>
											<b-input-group class="input-group-air">
												<b-input-group-prepend is-text><i class="icofont icofont-download"></i></b-input-group-prepend>
												<b-form-input type="text" placeholder="https://www.example.com"></b-form-input>
											</b-input-group>
										</div>

										<div class="form-group mb-0">
											<label>Left & Right Addon</label>

											<b-input-group class="pill-input-group">
												<b-input-group-prepend is-text><i class="icofont icofont-ui-copy"></i></b-input-group-prepend>
												<b-form-input type="text"></b-form-input>
												<b-input-group-append is-text><i class="icofont icofont-stock-search"></i></b-input-group-append>
											</b-input-group>

										</div>

									</form>
								</div>
							</div>
						</div>
						<div class="card-footer">
							<b-button type="submit" variant="primary" class="mr-1">Submit</b-button>
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
  };
</script>
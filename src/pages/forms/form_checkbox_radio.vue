<template>
	<div>
		<Breadcrumbs main="Form Controls" title="Checkbox & Radio"/>
		<!-- Container-fluid starts-->
		<div class="container-fluid">
			<div class="row">

				<div class="col-md-6">
					<div class="card">
						<div class="card-header">
							<h5>Custom Radio</h5>
						</div>
						<div class="card-body">
							<div class="row">

								<div class="col-sm-12">
									<h5>Custom Radio</h5>
								</div>
								<div class="col">
									<div class="form-group m-t-15 custom-radio-ml">

										<div class="radio radio-primary">
											<b-form-radio name="radio1" value="option1">Option 1</b-form-radio>
										</div>
										<div class="radio radio-primary">
											<b-form-radio name="radio1" value="disabled" disabled>Disabled</b-form-radio>
										</div>
										<div class="radio radio-primary">
											<b-form-radio name="radio1" value="checked">Checked</b-form-radio>
										</div>

									</div>
								</div>

								<div class="col-sm-12">
									<h5>Radio states</h5>
								</div>
								<div class="col">
									<div class="form-group m-t-15 custom-radio-ml">

										<div class="radio radio-primary">
											<b-form-radio name="radio2" value="option1">Option 1</b-form-radio>
										</div>

										<div class="radio radio-secondary">
											<b-form-radio name="radio2" value="option2">Option 2</b-form-radio>
										</div>

										<div class="radio radio-success">
											<b-form-radio name="radio2" value="option3">Option 3</b-form-radio>
										</div>

										<div class="radio radio-info">
											<b-form-radio name="radio2" value="option4" disabled>Option 4</b-form-radio>
										</div>

										<div class="radio radio-warning">
											<b-form-radio name="radio2" value="option5">Option 5</b-form-radio>
										</div>

										<div class="radio radio-danger">
											<b-form-radio name="radio2" value="option6" v-model="selected" text="Toggle this custom radio" >Option 6</b-form-radio>
										</div>

									</div>
								</div>

								<div class="col-sm-12">
									<h5>Inline checkbox</h5>
								</div>
								<div class="col">
									<div class="form-group m-t-15 m-checkbox-inline mb-0 custom-radio-ml">
										<div class="radio radio-primary d-inline-block">
											<b-form-radio name="radio3" value="option1">Option 1</b-form-radio>
										</div>
										<div class="radio radio-primary d-inline-block">
											<b-form-radio name="radio3" value="option2">Option 2</b-form-radio>
										</div>
										<div class="radio radio-primary d-inline-block">
											<b-form-radio name="radio3" value="option3" class="mr-0">Option 3</b-form-radio>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-6">
					<div class="card">
						<div class="card-header">
							<h5>Custom checkbox</h5>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col-sm-12">
									<h5 class="mb-0">Custom checkbox</h5>
								</div>
								<div class="col">
									<div class="form-group m-t-15 custom-radio-ml">

										<div class="checkbox">
											<b-form-checkbox name="checkbox1">Default</b-form-checkbox>
										</div>

										<div class="checkbox">
											<b-form-checkbox name="checkbox2" disabled>Disabled</b-form-checkbox>
										</div>

										<div class="checkbox">
											<b-form-checkbox name="checkbox3" v-model="checked" >Checked</b-form-checkbox>
										</div>

									</div>
								</div>

								<div class="col-sm-12">
									<h5 class="mb-0">Checkbox states</h5>
								</div>
								<div class="col">
									<div class="form-group m-t-15 custom-radio-ml">

										<div class="checkbox checkbox-primary">
											<b-form-checkbox name="checkbox4">Success state</b-form-checkbox>
										</div>

										<div class="checkbox checkbox-secondary">
											<b-form-checkbox name="checkbox5" disabled>Brand state</b-form-checkbox>
										</div>

										<div class="checkbox checkbox-success">
											<b-form-checkbox name="checkbox6">primary state</b-form-checkbox>
										</div>

									</div>
								</div>

								<div class="col-sm-12">
									<h5 class="mb-0">Inline checkbox</h5>
								</div>
								<div class="col">
									<div class="form-group m-t-15 m-checkbox-inline mb-0 custom-radio-ml">
										<div class="checkbox checkbox-dark">
											<b-form-checkbox name="checkbox7" >Option 1</b-form-checkbox>
										</div>
										<div class="checkbox checkbox-dark">
											<b-form-checkbox name="checkbox8">Option 2</b-form-checkbox>
										</div>
										<div class="checkbox checkbox-dark">
											<b-form-checkbox name="checkbox9">Option 3</b-form-checkbox>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>

				<div class="col-md-6">
					<div class="card">
						<div class="card-header">
							<h5>Animated radio buttons</h5>
						</div>
						<div class="card-body animate-chk">
							<div class="row">
								<div class="col">
									<div class="checkbox-animated">
										<label class="d-block" for="edo-ani">
											<input class="radio_animated" id="edo-ani" type="radio" name="rdo-ani" checked=""> Option 1
										</label>
										<label class="d-block" for="edo-ani1">
											<input class="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" checked=""> Option 2
										</label>
										<label class="d-block" for="edo-ani2">
											<input class="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" checked=""> Option 3
										</label>
										<label class="d-block mb-0" for="edo-ani3">
											<input class="radio_animated" id="edo-ani3" type="radio" name="rdo-ani" checked=""> Option 4
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-6">
					<div class="card">
						<div class="card-header">
							<h5>Animated checkbox buttons</h5>
						</div>
						<div class="card-body animate-chk">
							<div class="row">
								<div class="col">
									<div class="checkbox-animated">
									<label class="d-block" for="chk-ani">
										<input class="checkbox_animated" id="chk-ani" type="checkbox"> Option 1
									</label>
									<label class="d-block" for="chk-ani1">
										<input class="checkbox_animated" id="chk-ani1" type="checkbox"> Option 2
									</label>
									<label class="d-block" for="chk-ani2">
										<input class="checkbox_animated" id="chk-ani2" type="checkbox"> Option 3
									</label>
									<label class="d-block mb-0" for="chk-ani3">
										<input class="checkbox_animated" id="chk-ani3" type="checkbox"> Option 4
									</label>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-12">
					<div class="card">
						<div class="card-header">
							<h5>Square checkbox</h5>
						</div>
						<div class="card-body animate-chk">
							<div class="row">
								<div class="col">
									<div class="form-group custom-radio-ml m-squar checkbox-dark">

										<div class="checkbox">
											<b-form-checkbox name="checkbox11">Default</b-form-checkbox>
										</div>

										<div class="checkbox">
											<b-form-checkbox name="checkbox12" disabled>Disabled</b-form-checkbox>
										</div>

										<div class="checkbox">
											<b-form-checkbox name="checkbox13" v-model="checked" >Checked</b-form-checkbox>
										</div>

									</div>
								</div>
								<div class="col-sm-12">
									<h5>Solid checkbox</h5>
								</div>
								<div class="col">
									<div class="form-group custom-radio-ml mb-0 last-mb-checkbox">

										<div class="checkbox">
											<b-form-checkbox name="checkbox14" class="checkbox-solid-success">Default</b-form-checkbox>
										</div>

										<div class="checkbox">
											<b-form-checkbox name="checkbox15" class="checkbox-solid-dark" disabled>Disabled</b-form-checkbox>
										</div>

										<div class="checkbox">
											<b-form-checkbox name="checkbox16" class="checkbox-solid-primary" v-model="checked" >Checked</b-form-checkbox>
										</div>
										<div class="checkbox">
											<b-form-checkbox name="checkbox17" class="checkbox-solid-danger" v-model="checked" >Checked</b-form-checkbox>
										</div>
										<div class="checkbox">
											<b-form-checkbox name="checkbox18" class="checkbox-solid-light">Checked</b-form-checkbox>
										</div>
										<div class="checkbox">
											<b-form-checkbox name="checkbox19" class="checkbox-solid-info">Checked</b-form-checkbox>
										</div>
										<div class="checkbox">
											<b-form-checkbox name="checkbox20" class="checkbox-solid-dark">Checked</b-form-checkbox>
										</div>

									</div>
								</div>
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
    data() {
      return {
        checked: true,
        selected: 'option6',
        options: [
          { text: 'Toggle this custom radio', value: 'option6' },
        ]
      };
    }
  };
</script>

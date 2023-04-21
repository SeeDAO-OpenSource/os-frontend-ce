<template>
	<div>
		<Breadcrumbs main="Form Widgets" title="touchspin"/>
		<!-- Container-fluid starts-->
		<div class="container-fluid">
			<div class="bootstrap-touchspin">
				<div class="row">

					<div class="col-sm-12 col-xl-6">
						<div class="card">
							<div class="card-header">
								<h5 class="card-title">Default Touchspin</h5><span>Add <code>.touchspin</code> class to input to add touchspin input group.</span>
							</div>
							<div class="card-body">
								<div class="input-group-square">
									<b-input-group>
										<b-input-group-prepend>
											<b-button class="btn-square bootstrap-touchspin-down" type="button" @click="num1--" variant="primary"><i class="fa fa-minus"></i></b-button>
										</b-input-group-prepend>
										<b-form-input class="touchspin" type="text" v-model="num1"></b-form-input>
										<b-input-group-append>
											<b-button class="btn-square bootstrap-touchspin-down" type="button" @click="num1++" variant="primary"><i class="fa fa-plus"></i></b-button>
										</b-input-group-append>
									</b-input-group>
								</div>
							</div>
						</div>
					</div>

					<div class="col-sm-12 col-xl-6">
						<div class="card">
							<div class="card-header">
								<h5 class="card-title">vertical Touchspin</h5><span>Add <code>.touchspin-vertical</code> class for vertical touchspin input group.</span>
							</div>
							<div class="card-body">
								<div class="touchspin-vertical-tab">
									<b-form-input class="touchspin" type="number" v-model="num2" min="0" max="100"></b-form-input>
								</div>
							</div>
						</div>
					</div>

					<div class="col-sm-12 col-xl-6">
						<div class="card">
							<div class="card-header">
								<h5 class="card-title">Touchspin with Postfix</h5><span>Add <code>data-bts-postfix="POSTFIX_VALUE"</code> attribute to input to add postfix to touchspin input group.</span>
							</div>
							<div class="card-body">
								<div class="input-group-square">
									<b-input-group>
										<b-input-group-prepend>
											<b-button class="btn-square bootstrap-touchspin-down" type="button" @click="num3--" variant="primary"><i class="fa fa-minus"></i></b-button>
										</b-input-group-prepend>
										
										<b-form-input class="touchspin" type="text" v-model="num3"></b-form-input>

										<b-input-group-append>
											<span class="input-group-text">%</span>
										</b-input-group-append>
										<b-input-group-append>
											<b-button class="btn-square bootstrap-touchspin-down" type="button" @click="num3++" variant="primary"><i class="fa fa-plus"></i></b-button>
										</b-input-group-append>
									</b-input-group>
								</div>
							</div>
						</div>
					</div>

					<div class="col-sm-12 col-xl-6">
						<div class="card">
							<div class="card-header">
								<h5 class="card-title">Touchspin with Prefix</h5><span>Add <code>data-bts-prefix="PREFIX_VALUE"</code> attribute to input to add prefix to touchspin input group.</span>
							</div>
							<div class="card-body">
								<div class="input-group">
									<b-input-group>
										<b-input-group-prepend>
											<b-button class="btn-square bootstrap-touchspin-down" type="button" @click="num4--" variant="primary"><i class="fa fa-minus"></i></b-button>
										</b-input-group-prepend>
										<b-input-group-prepend>
											<span class="input-group-text">#</span>
										</b-input-group-prepend>
										
										<b-form-input class="touchspin" type="text" v-model="num4"></b-form-input>

										<b-input-group-append>
											<b-button class="btn-square bootstrap-touchspin-down" type="button" @click="num4++" variant="primary"><i class="fa fa-plus"></i></b-button>
										</b-input-group-append>
									</b-input-group>
								</div>
							</div>
						</div>
					</div>

					<div class="col-sm-12 col-xl-6">
						<div class="card">
							<div class="card-header">
								<h5 class="card-title">Min Max Value of Touchspin</h5><span>Use <code>data-bts-min="VALUE" data-bts-max="VALUE"</code> attribute to input to set min and max value of touchspin input.</span>
							</div>
							<div class="card-body">
								<div class="input-group">
									<b-input-group>
										<b-input-group-prepend>
											<b-button class="btn-square bootstrap-touchspin-down" type="button" @click="num5--" variant="primary"><i class="fa fa-minus"></i></b-button>
										</b-input-group-prepend>
										
										<b-form-input class="touchspin" type="text" v-model="num5"></b-form-input>

										<b-input-group-append>
											<b-button class="btn-square bootstrap-touchspin-down" type="button" @click="num5++" variant="primary"><i class="fa fa-plus"></i></b-button>
										</b-input-group-append>
									</b-input-group>
								</div>
							</div>
						</div>
					</div>

					<div class="col-sm-12 col-xl-6">
						<div class="card">
							<div class="card-header">
								<h5 class="card-title">Touchspin with initial Value</h5><span>Add <code>data-bts-init-val="VALUE"</code> attribute attribute to set initial value for input group.</span>
							</div>
							<div class="card-body">
								<b-input-group>
									<b-input-group-prepend>
										<b-button class="btn-square bootstrap-touchspin-down" type="button" @click="num6--" variant="primary"><i class="fa fa-minus"></i></b-button>
									</b-input-group-prepend>

									<b-form-input class="touchspin" type="text" v-model="num6"></b-form-input>

									<b-input-group-append>
										<b-button class="btn-square bootstrap-touchspin-down" type="button" @click="num6++" variant="primary"><i class="fa fa-plus"></i></b-button>
									</b-input-group-append>
								</b-input-group>
							</div>
						</div>
					</div>

					<div class="col-sm-12 col-xl-6">
						<div class="card">
							<div class="card-header">
								<h5 class="card-title">Touchspin steps</h5><span>Add <code>data-bts-step="VALUE"</code> attribute for increament and decrement steps to touchspin input group.</span>
							</div>
							<div class="card-body">
								<b-input-group>
									<b-input-group-prepend>
										<b-button class="btn-square bootstrap-touchspin-down" type="button"  @click="stepdec(num7)" variant="primary"><i class="fa fa-minus"></i></b-button>
									</b-input-group-prepend>

									<b-form-input class="touchspin" type="text" v-model="num7"></b-form-input>

									<b-input-group-append>
										<b-button class="btn-square bootstrap-touchspin-down" type="button" @click="stepInc(num7)" variant="primary"><i class="fa fa-plus"></i></b-button>
									</b-input-group-append>
								</b-input-group>
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
    data(){
      return{
        num1:40,
        num2:55,
        num3:40,
        num4:40,
        num5:40,
        num6:40,
        num7:40,
      };
    },
    watch:{
      num1:function(newValue){
        if(newValue >= 100) {
          this.num1 = 100;
        } else if(newValue <= 0) {
          this.num1 = 0;
        }
      },
      num3:function(newValue){
        if(newValue >= 100) {
          this.num3 = 100;
        } else if(newValue <= 0) {
          this.num3 = 0;
        }
      },
      num4:function(newValue){
        if(newValue >= 100) {
          this.num4 = 100;
        } else if(newValue <= 0) {
          this.num4 = 0;
        }
      },
      num5:function(newValue){
        if(newValue >= 100) {
          this.num5 = 100;
        } else if(newValue <= 0) {
          this.num5 = 0;
        }
      },
      num6:function(newValue){
        if(newValue >= 100) {
          this.num6 = 100;
        } else if(newValue <= 0) {
          this.num6 = 0;
        }
      },
      num7:function(newValue){
        if(newValue >= 100) {
          this.num7 = 100;
        } else if(newValue <= 0) {
          this.num7 = 0;
        }
      }
    },
    methods: {
      stepInc(num){
        this.num7 = num + 10;
      },
      stepdec(num){
        this.num7 = num - 10;
      }
    }
  };
</script>
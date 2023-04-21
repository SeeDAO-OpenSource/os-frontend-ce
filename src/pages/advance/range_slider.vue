<template>
	<div>
		<Breadcrumbs main="Bonus UI" title="Range Slider"/>
		<!-- Container-fluid starts-->
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-12">
					<div class="card">
						<div class="card-header">
							<h5>Range Slider</h5>
						</div>
						<div class="card-body">
							<form class="theme-form form-label-align-right range-slider">
								<div class="form-group row">
									<label class="col-md-2 col-form-label sm-left-text" for="u-range-01">Default</label>
									<div class="col-md-9 col-11">
										<VueSlideBar v-model="one.value" :min="1" :max="100" :range="one.range" ></VueSlideBar>
									</div>
								</div>
								<div class="form-group row">
									<label class="col-md-2 control-label sm-left-text" for="u-range-02">Min-Max Value</label>
									<div class="col-md-9 col-11">
										<VueSlideBar v-model="two.value" :min="100" :max="1000" :range="two.range" ></VueSlideBar>
									</div>
								</div>
								<div class="form-group row">
									<label class="col-md-2 control-label sm-left-text" for="u-range-03">Prefix</label>
									<div class="col-md-9 col-11">
										<VueSlideBar v-model="three.value" :min="100" :max="1000" :data="three.data" :range="three.range" ></VueSlideBar>
									</div>
								</div>
								<div class="form-group row">
									<label class="col-md-2 control-label sm-left-text" for="u-range-04">Negative value</label>
									<div class="col-md-9 col-11">
										<VueSlideBar v-model="four.value" :min="100" :max="1000" :range="four.range" ></VueSlideBar>
									</div>
								</div>
								<div class="form-group row">
									<label class="col-md-2 control-label sm-left-text" for="u-range-05">Steps</label>
									<div class="col-md-9 col-11">
										<VueSlideBar v-model="five.value" :min="100" :max="1000" :range="five.range"></VueSlideBar>
									</div>
								</div>
								<div class="form-group row">
									<label class="col-md-2 control-label sm-left-text" for="u-range-06">Custom Values</label>
									<div class="col-md-9 col-11">
										<VueSlideBar v-model="six.value" :data="six.data" :range="six.range" class="month-range"></VueSlideBar>
									</div>
								</div>
								<div class="form-group row">
									<label class="col-md-2 control-label sm-left-text" for="u-range-07">Prettify Numbers</label>
									<div class="col-md-9 col-11">
										<VueSlideBar v-model="seven.value" :min="100" :max="10000" :range="seven.range" ></VueSlideBar>
									</div>
								</div>
								<div class="form-group row mb-0">
									<label class="col-md-2 control-label sm-left-text" for="u-range-08">Disabled</label>
									<div class="col-md-9 col-11">
										<VueSlideBar v-model="eight.value" :is-disabled=true :min="100" :max="1000" :range="eight.range" ></VueSlideBar>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Container-fluid Ends-->
	</div>
</template>

<script>
  import VueSlideBar from 'vue-slide-bar';

  export default {
    components: {
      VueSlideBar
    },
    data () {
      return {
        one:{
          value:5,
          range:[
            {
              label: '10'
            },
            {
              label: '100'
            },
          ]
        },
        two:{
          value:500,
          range:[
            {
              label: '100'
            },
            {
              label: '1000'
            },
          ]
        },
        three:{
          value:500,
          data: [
            10,
            50,
            100,
            150,
            200,
            250,
            300,
            350,
            400,
            450,
            500,
            550,
            600,
            650,
            700,
            750,
            800,
            850,
            900,
            950,
            1000
          ],
          range:[
            {
              label: '10'
            },
            {
              label: '50',
              isHide: true
            },
            {
              label: '100',
              isHide: true
            },
            {
              label: '150',
              isHide: true
            },
            {
              label: '200',
              isHide: true
            },
            {
              label: '250'
            },
            {
              label: '300',
              isHide: true
            },
            {
              label: '350',
              isHide: true
            },
            {
              label: '400',
              isHide: true
            },
            {
              label: '450',
              isHide: true
            },
            {
              label: '500'
            },
            {
              label: '550',
              isHide: true
            },
            {
              label: '600',
              isHide: true
            },
            {
              label: '650',
              isHide: true
            },
            {
              label: '700',
              isHide: true
            },
            {
              label: '750'
            },
            {
              label: '800',
              isHide: true
            },
            {
              label: '850',
              isHide: true
            },
            {
              label: '900',
              isHide: true
            },
            {
              label: '950',
              isHide: true
            },
            {
              label: '1000'
            },
          ]
        },
        four:{
          value:100,
          range:[
            {
              label: '100'
            },
            {
              label: '250'
            },
            {
              label: '500'
            },
            {
              label: '750'
            },
            {
              label: '1000'
            },
          ]
        },
        five:{
          value:100,
          range:[
            {
              label: '100'
            },
            {
              label: '250'
            },
            {
              label: '500'
            },
            {
              label: '750'
            },
            {
              label: '1000'
            },
          ]
        },
        six:{
          value:'Apr',
          data:[
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec'
          ],
          range:[
            {
              label: 'Jan'
            },
            {
              label: 'Feb'
            },
            {
              label: 'Mar'
            },
            {
              label: 'Apr'
            },
            {
              label: 'May'
            },
            {
              label: 'Jun'
            },
            {
              label: 'Jul'
            },
            {
              label: 'Aug'
            },
            {
              label: 'Sept'
            },
            {
              label: 'Oct'
            },
            {
              label: 'Nov'
            },
            {
              label: 'Dec'
            },
          ]
        },
        seven:{
          value:350,
          range:[
            {
              label: '100'
            },
            {
              label: '325'
            },
            {
              label: '550'
            },
            {
              label: '775'
            },
            {
              label: '1000'
            },
          ]
        },
        eight:{
          value:500,
          range:[
            {
              label: '100'
            },
            {
              label: '1000'
            },
          ]
        },
      };
    }
  };

</script>

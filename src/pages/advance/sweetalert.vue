<template>
	<div>
		<Breadcrumbs main="Bonus UI" title="sweet alert"/>
		<!-- Container-fluid starts-->
		<div class="container-fluid">
			<div class="row">

				<div class="col-sm-12">
					<div class="card">
						<div class="card-header">
							<h5>Basic Examples</h5>
						</div>
						<div class="card-body btn-showcase">

							<b-button type="button" v-on:click="basic" variant="primary">Basic</b-button>

							<b-button type="button" v-on:click="basic_with_title" variant="primary">With Title Alert</b-button>

							<b-button type="button" v-on:click="basic_success_alert" variant="success">Success Alert</b-button>

							<b-button type="button" v-on:click="basic_info_alert" variant="info">Info Alert</b-button>

						</div>
					</div>
				</div>

				<div class="col-sm-12">
					<div class="card">
						<div class="card-header">
							<h5>Advanced State</h5>
						</div>
						<div class="card-body btn-showcase">

							<b-button type="button" v-on:click="advanced_success_alert" variant="success">Success</b-button>

							<b-button type="button" v-on:click="advanced_danger_alert" variant="danger">Danger</b-button>

							<b-button type="button" v-on:click="advanced_info_alert" variant="info">Information</b-button>

							<b-button type="button" v-on:click="advanced_warning_alert" variant="warning">Warning</b-button>

						</div>
					</div>
				</div>

				<div class="col-sm-12">
					<div class="card">
						<div class="card-header">
							<h5>Alert State</h5>
						</div>
						<div class="card-body btn-showcase">

							<b-button type="button" v-on:click="success_alert_state" variant="success">Success</b-button>

							<b-button type="button" v-on:click="danger_alert_state" variant="danger">Danger</b-button>

							<b-button type="button" v-on:click="info_alert_state" variant="info">Information</b-button>

							<b-button type="button" v-on:click="warning_alert_state" variant="warning">Warning</b-button>

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
    methods:{
      basic:function(){
        this.$swal({
          title:'Hello world!'
        });
      },
      basic_with_title:function(){
        this.$swal({
          title:'Here\'s the title',
          text:'...and here\'s the text!'
        });
      },
      basic_success_alert:function(){
        this.$swal({
          title:'Good job!',
          text:'You clicked the button!',
          type:'info'
        });
      },
      basic_info_alert:function(){
        this.$swal({
          text:' Click on either the button or outside the modal.',
          confirmButtonColor: '#4466f2',
        }).then((result)=>{
          if(result.value){
            this.$swal({
              text:'The returned value is:'+result.value
            });
          }else{
            this.$swal({
              text:'The returned value is:'+result.value
            });
          }
        });
      },
      advanced_success_alert:function(){
        this.$swal({
          text:'A wild Pikachu appeared! What do you want to do?',
          showCancelButton: true,
          confirmButtonText: 'Throw Pokéball!',
          confirmButtonColor: '#4466f2',
          cancelButtonText: 'Defeat',
          cancelButtonColor: '#4466f2',
        }).then((result)=>{
          if(result.value){
            this.$swal({
              title:'Gotcha!',
              text:'Pikachu was caught!',
              type:'success'
            });
          }else{
            this.$swal({
              text:'Pikachu fainted! You gained 500 XP!'
            });
          }
        });
      },
      advanced_danger_alert:function(){
        this.$swal({
          text:'Are you sure you want to do this?',
          showCancelButton: true,
          confirmButtonText: 'Aww yiss!',
          confirmButtonColor: '#4466f2',
          cancelButtonText: 'Oh noez!',
          cancelButtonColor: '#efefef',
          reverseButtons: true
        });
      },
      advanced_info_alert:function(){
        this.$swal({
          text:'Write something here:',
          input: 'text',
        }).then((result)=>{
          if(result.value){
            this.$swal({
              text:'You typed:'+result.value,
            });
          } else{
            this.$swal({
              text:'You typed:'+result.value,
            });
          }
        });
      },
      advanced_warning_alert:function(){
        this.$swal({
          text:'Are you sure you want to do this?',
          showCancelButton: true,
          confirmButtonText: 'Aww yiss!',
          confirmButtonColor: '#4466f2',
          cancelButtonText: 'Oh noez!',
          cancelButtonColor: '#efefef',
          reverseButtons: true
        });
      },
      success_alert_state:function(){
        this.$swal({
          title:'Good job!',
          text:'You clicked the button!',
          type:'success'
        });
      },
      danger_alert_state:function(){
        this.$swal({
          title:'Good job!',
          text:'You clicked the button!',
          type:'error'
        });
      },
      info_alert_state:function(){
        this.$swal({
          title:'Good job!',
          text:'You clicked the button!',
          type:'info'
        });
      },
      warning_alert_state:function(){
        this.$swal({
          title:'Good job!',
          text:'You clicked the button!',
          type:'warning'
        });
      }
    }
  };
</script>
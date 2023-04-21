<template>
	<div>
		<Breadcrumbs main="Bonus UI" title="Sticky"/>
		<!-- Container-fluid starts-->
		<div class="container-fluid">
			<div class="row">
				<div class="container-fluid">
					<div class="row sticky-header-main">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-header">
									<h5>Sticky Note <a class="btn btn-primary pull-right m-l-10" v-on:click="addNewSticky">Add New Note</a></h5>
								</div>
								<div class="card-body">
									<div class="sticky-note">

										<div class="note" style="" v-for="(n,index) in sticky_notes" :key="index">
											<a v-on:click="removeSticky(index)" class="button remove">X</a>
											<div class="note_cnt">
												<textarea class="title" placeholder="Enter note title" style="height: 64px;" v-text="n.title"></textarea>
												<textarea class="cnt" placeholder="Enter note description here" style="height: 200px;" v-text="n.description"></textarea>
											</div>
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
    data(){
      return{
        sticky_notes:[]
      };
    },
    mounted(){
      this.sticky_notes.push({ title:'',description:'' });
    },
    methods:{
      addNewSticky:function() {
        this.sticky_notes.push({ title:'',description:'' });
      },
      removeSticky:function(index) {	
        this.sticky_notes.splice(index,1);
      }
    }
  };
</script>
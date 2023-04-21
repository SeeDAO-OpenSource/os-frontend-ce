<template>
	<div>
		<Breadcrumbs main="Job search" title="List View"/>
			<!-- Container-fluid starts-->
			<div class="container-fluid">
				<div class="row">
					<div class="col-xl-3 xl-40">
						<div class="default-according style-1 faq-accordion job-accordion" id="accordionoc">
							<div class="row">
								<div class="col-xl-12">
									<b-card no-body>
										<b-card-header header-tag="div" role="tab">
											<h5 class="mb-0">
												<b-button class="btn btn-link pl-0" block v-b-toggle.collapseicon>Filter</b-button>
											</h5>
										</b-card-header>
										<b-collapse id="collapseicon" visible role="tabpanel">
											<b-card-body class="filter-cards-view animate-chk">
												<div class="job-filter">
													<div class="faq-form">
														<input class="form-control" type="text" placeholder="Search.."><feather class="search-icon" type="search"></feather>
													</div>
												</div>
												<div class="job-filter">
													<div class="faq-form">
														<input class="form-control" type="text" placeholder="location.."><feather class="search-icon" type="map-pin"></feather>
													</div>
												</div>
												<div class="checkbox-animated">
													<label class="d-block" for="chk-ani">
														<input class="checkbox_animated" id="chk-ani" type="checkbox"> Full-time (8688)
													</label>
													<label class="d-block" for="chk-ani1">
														<input class="checkbox_animated" id="chk-ani1" type="checkbox"> Contract (503)
													</label>
													<label class="d-block" for="chk-ani2">
														<input class="checkbox_animated" id="chk-ani2" type="checkbox"> Part-time (288)
													</label>
													<label class="d-block" for="chk-ani3">
														<input class="checkbox_animated" id="chk-ani3" type="checkbox"> Internship (236)
													</label>
													<label class="d-block" for="chk-ani4">
														<input class="checkbox_animated" id="chk-ani4" type="checkbox">  Temporary (146)
													</label>
													<label class="d-block" for="chk-ani5">
														<input class="checkbox_animated" id="chk-ani5" type="checkbox"> Commission (25)
													</label>
												</div>
												<button class="btn btn-primary text-center" type="button">Find jobs</button>
											</b-card-body>
										</b-collapse>
									</b-card>
								</div>
								<div class="col-xl-12">
									<b-card no-body>
										<b-card-header header-tag="div" role="tab">
											<h5 class="mb-0">
												<b-button class="btn btn-link pl-0" block v-b-toggle.collapselocation>Location</b-button>
											</h5>
										</b-card-header>
										<b-collapse id="collapselocation" visible role="tabpanel">
											<b-card-body class="animate-chk">
												<div class="location-checkbox">
													<label class="d-block" for="chk-ani21">
														<input class="checkbox_animated" id="chk-ani21" type="checkbox">                            Letraset<span class="d-block">New York, NY (399)</span>
													</label>
													<label class="d-block" for="chk-ani22">
														<input class="checkbox_animated" id="chk-ani22" type="checkbox">                            Established<span class="d-block">San Francisco, CA (252)</span>
													</label>
													<label class="d-block mb-0" for="chk-ani23">
														<input class="checkbox_animated" id="chk-ani23" type="checkbox">                            Contrary<span class="d-block">Washington, DC (226)</span>
													</label>
												</div>
											</b-card-body>
											<button class="btn btn-block btn-primary text-center" type="button">All Locations</button>
										</b-collapse>
									</b-card>
								</div>
								<div class="col-xl-12">
									<b-card no-body>
										<b-card-header header-tag="div" role="tab">
											<h5 class="mb-0">
												<b-button class="btn btn-link pl-0" block v-b-toggle.jobtitle>Job Title</b-button>
											</h5>
										</b-card-header>
										<b-collapse id="jobtitle" visible role="tabpanel">
											<b-card-body class="animate-chk">
												<div class="location-checkbox">
													<label class="d-block" for="chk-ani6">
														<input class="checkbox_animated" id="chk-ani6" type="checkbox">UI/Ux designer(25)
													</label>
													<label class="d-block" for="chk-ani7">
														<input class="checkbox_animated" id="chk-ani7" type="checkbox">Graphic designer(10)
													</label>
													<label class="d-block" for="chk-ani8">
														<input class="checkbox_animated" id="chk-ani8" type="checkbox">Front end designer(15)
													</label>
													<label class="d-block" for="chk-ani9">
														<input class="checkbox_animated" id="chk-ani9" type="checkbox">PHP developer(42)
													</label>
													<label class="d-block mb-0" for="chk-ani10">
														<input class="checkbox_animated" id="chk-ani10" type="checkbox">React Developer(5)
													</label>
												</div>
											</b-card-body>
											<button class="btn btn-block btn-primary text-center" type="button">All Job Title</button>
										</b-collapse>
									</b-card>
								</div>
								<div class="col-xl-12">
									<b-card no-body>
										<b-card-header header-tag="div" role="tab">
											<h5 class="mb-0">
												<b-button class="btn btn-link pl-0" block v-b-toggle.industry>Industry</b-button>
											</h5>
										</b-card-header>
										<b-collapse id="industry" visible role="tabpanel">
											<b-card-body class="animate-chk">
												<label class="d-block" for="chk-ani11">
													<input class="checkbox_animated" id="chk-ani11" type="checkbox">Computer Software(14)
												</label>
												<label class="d-block" for="chk-ani12">
													<input class="checkbox_animated" id="chk-ani12" type="checkbox">IT Engineer(10)
												</label>
												<label class="d-block" for="chk-ani13">
													<input class="checkbox_animated" id="chk-ani13" type="checkbox">Service industry(20)
												</label>
												<label class="d-block" for="chk-ani14">
													<input class="checkbox_animated" id="chk-ani14" type="checkbox">Accounting(34)
												</label>
												<label class="d-block mb-0" for="chk-ani15">
													<input class="checkbox_animated" id="chk-ani15" type="checkbox">Financial Services(5)
												</label>
											</b-card-body>
											<button class="btn btn-block btn-primary text-center" type="button">All Industries</button>
										</b-collapse>
									</b-card>
								</div>
								<div class="col-xl-12">
									<b-card no-body>
										<b-card-header header-tag="div" role="tab">
											<h5 class="mb-0">
												<b-button class="btn btn-link pl-0" block v-b-toggle.skills>Specific skills</b-button>
											</h5>
										</b-card-header>
										<b-collapse id="skills" visible role="tabpanel">
											<b-card-body class="animate-chk">
												<label class="d-block" for="chk-ani16">
													<input class="checkbox_animated" id="chk-ani16" type="checkbox">HTML,scss & sass
												</label>
												<label class="d-block" for="chk-ani17">
													<input class="checkbox_animated" id="chk-ani17" type="checkbox">Javascript
												</label>
												<label class="d-block" for="chk-ani18">
													<input class="checkbox_animated" id="chk-ani18" type="checkbox">Node.js
												</label>
												<label class="d-block" for="chk-ani19">
													<input class="checkbox_animated" id="chk-ani19" type="checkbox">Gulp & Pug
												</label>
												<label class="d-block mb-0" for="chk-ani20">
													<input class="checkbox_animated" id="chk-ani20" type="checkbox">Angular.js
												</label>
											</b-card-body>
											<button class="btn btn-block btn-primary text-center" type="button">All Skills</button>
										</b-collapse>
									</b-card>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-9 xl-60">
						
						<div class="card" v-for="(job,index) in jobslist" :key="index" :class="{'ribbon-vertical-left-wrapper': job.priority == 1 }">
							<div v-if="job.priority == 1" class="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary"><i class="icofont icofont-love"></i></div>
							<div class="job-search">
								<div class="card-body">
									<div class="media"><img class="img-40 img-fluid m-r-20" :src="getImgUrl(job.image)" alt="">
										<div class="media-body">
											<h6 class="f-w-600">
												<router-link :to="{ name: 'JobDetails', params: { id: job.id }}">{{ job.title }}</router-link>
												<span class="pull-right" v-if="job.date" v-text="job.date"></span>
												<span class="badge badge-primary pull-right" v-else>New</span>
											</h6>
											<p>{{ job.company }} <span>{{ job.city }}, {{ job.country }} </span><span v-html="stars(job.stars)"></span></p>
										</div>
									</div>
									<p v-text="job.description"></p>
								</div>
							</div>
						</div>

						<div class="job-pagination">
							<nav aria-label="Page navigation example">
								<ul class="pagination pagination-primary">
									<li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
									<li class="page-item active"><a class="page-link" href="#">1</a></li>
									<li class="page-item"><a class="page-link" href="#">2</a></li>
									<li class="page-item"><a class="page-link" href="#">3</a></li>
									<li class="page-item"><a class="page-link" href="#">Next</a></li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<!-- Container-fluid Ends-->
	</div>
</template>
<script>
  import { mapState } from 'vuex';
  
  export default
    {
      name:'JobList',
      computed: {
        ...mapState({
          jobslist: state => state.jobs.jobs,
        })
      },
      methods:{
        getImgUrl(filename) {
          var images = require.context('../../assets/images/job-search/', false, /\.jpg$/);
          return images('./' + filename);
        },
        stars(count) {
          var stars = '';

          for (var i = 0; i < 5; i++) {
            if(count > i) {
              stars = stars + '<i class="fa fa-star font-warning"></i>';
            } else {
              stars = stars + '<i class="fa fa-star font-warning-o"></i>';
            }
          }

          return stars;
        }
      }
    };
</script>

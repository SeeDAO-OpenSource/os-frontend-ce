<template>
	<div>
		<Breadcrumbs title="Timeline"/>
		<!-- Container-fluid starts-->
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<div class="card">
						<div class="card-header">
							<h5 class="card-title">Example</h5>
						</div>
						<div class="card-body">
							
							<section class="cd-container" id="cd-timeline">
								<div class="cd-timeline-block">
									<div class="cd-timeline-img cd-picture bg-primary"><i class="icon-pencil-alt"></i></div>
									<div class="cd-timeline-content">
										<h4>Title of section<span class="digits"> 1</span></h4>
										<p class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p><span class="cd-date">Jan <span class="counter digits"> 14</span></span>
									</div>
								</div>
								<div class="cd-timeline-block">
									<div class="cd-timeline-img cd-movie bg-secondary"><i class="icon-video-camera"></i></div>
									<div class="cd-timeline-content">
										<h4>Title of section<span class="digits"> 2</span></h4>
										<div class="embed-responsive embed-responsive-21by9 m-t-20">
											<iframe src="https://www.youtube.com/embed/wpmHZspl4EM" allowfullscreen=""></iframe>
										</div><span class="cd-date">Jan <span class="counter digits">18</span></span>
									</div>
								</div>
								<div class="cd-timeline-block">
									<div class="cd-timeline-img cd-picture bg-success is-hidden"><i class="icon-image"></i></div>
									<div class="cd-timeline-content is-hidden">
										<h4>Title of section<span class="digits"> 3</span></h4><img class="img-fluid p-t-20" src="../../assets/images/banner/1.jpg" alt="" data-original-title="" title=""><span class="cd-date">Jan <span class="counter digits">24</span></span>
									</div>
								</div>
								<div class="cd-timeline-block">
									<div class="cd-timeline-img cd-location bg-warning is-hidden"><i class="icon-image"></i></div>
									<div class="cd-timeline-content is-hidden">
										<h4>Title of section<span class="digits"> 5</span></h4><img class="img-fluid p-t-20" src="../../assets/images/banner/3.jpg" alt="" data-original-title="" title=""><span class="cd-date">Feb <span class="counter digits">18</span></span>
									</div>
								</div>
								<div class="cd-timeline-block">
									<div class="cd-timeline-img cd-movie bg-danger is-hidden"><i class="icon-pencil-alt"></i></div>
									<div class="cd-timeline-content is-hidden">
										<h4>Final Section</h4>
										<p class="m-0">This is the content of the last section</p><span class="cd-date">Feb <span class="counter digits">26</span></span>
									</div>
								</div>
							</section>

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
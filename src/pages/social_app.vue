<template>
	<div>
		<Breadcrumbs main="" title="Social App"/>

		<div class="container-fluid">
			<div class="user-profile social-app-profile">

				<div class="row">
					<div class="col-sm-12">
						<div class="card hovercard text-center">
							<div class="cardheader socialheader"></div>
							<div class="user-image">
								<div class="avatar"><img alt="" src="../assets/images/user/1.jpg"></div>
								<div class="icon-wrapper"><i class="icofont icofont-pencil-alt-5"></i></div>
								<ul class="share-icons">
									<li><a class="social-icon bg-primary" href="#"><i class="fa fa-smile-o"></i></a></li>
									<li><a class="social-icon bg-secondary" href="#"><i class="fa fa-wechat"></i></a></li>
									<li><a class="social-icon bg-warning" href="#"><i class="fa fa-share-alt"></i></a></li>
								</ul>
							</div>
							<div class="info p-0 market-tabs">
								<ul class="nav nav-tabs border-tab tabs-scoial" id="top-tab" role="tablist">
									<li class="nav-item" v-on:click="changetab('timeline')">
										<a class="nav-link" :class="{'show active': showtab == 'timeline' }" id="top-timeline" data-toggle="tab" role="tab" aria-controls="timeline" aria-selected="true" >Timline</a>
									</li>
									<li class="nav-item" v-on:click="changetab('about')">
										<a class="nav-link" :class="{'show active': showtab == 'about' }" id="top-about" data-toggle="tab" role="tab" aria-controls="about" aria-selected="false" >About</a>
									</li>
									<li class="nav-item">
										<div class="user-designation"></div>
										<div class="title"><a target="_blank" href="#">ElANA</a></div>
										<div class="desc mt-2">general manager</div>
									</li>
									<li class="nav-item" v-on:click="changetab('friends')">
										<a class="nav-link" :class="{'show active': showtab == 'friends' }" id="top-friends" data-toggle="tab" role="tab" aria-controls="friends" aria-selected="false" >Friends</a>
									</li>
									<li class="nav-item" v-on:click="changetab('photos')">
										<a class="nav-link" :class="{'show active': showtab == 'photos' }" id="top-photos" data-toggle="tab" role="tab" aria-controls="photos" aria-selected="false" >Photos</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="tab-content" id="top-tabContent">
					<div class="tab-pane fade" :class="{'show active': showtab == 'timeline' }" id="timeline" role="tabpanel" aria-labelledby="timeline">
						<div class="row">
							<div class="col-xl-3 xl-40 col-lg-12 col-md-5 box-col-4">
								<div class="default-according style-1 faq-accordion job-accordion" id="accordionoc4">
									<div class="row">
										<div class="col-xl-12">
											<b-card no-body>
												<b-card-header header-tag="div" role="tab">
													<h5 class="mb-0">
														<b-button class="btn btn-link pl-0" block v-b-toggle.collapseprofile>My Profile</b-button>
													</h5>
												</b-card-header>
												<b-collapse id="collapseprofile" visible role="tabpanel">
													<b-card-body class="card-body socialprofile filter-cards-view animate-chk">
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" src="../assets/images/user/1.jpg" alt="">
															<div class="media-body">
																<h6 class="font-primary f-w-600">My Page</h6><span class="d-block"><span><i class="fa fa-comments-o"> </i><span class="px-2">Messages<span class="badge badge-pill badge-light">9</span></span></span></span><span class="d-block"><span><i class="fa fa-bell-o"> </i><span class="px-2">Notification<span class="badge badge-pill badge-light">9</span></span></span></span>
															</div>
														</div>
														<div class="social-btngroup d-flex">
															<button class="btn btn-primary text-center" type="button">Likes</button>
															<button class="btn btn-light text-center" type="button">View</button>
														</div>
														<div class="likes-profile text-center">
															<h5><span><i class="fa fa-heart font-danger"></i> 884</span></h5>
														</div>
														<div class="text-center">35 New Likes This Week</div>
														<div class="customers text-center social-group">
															<ul>
																<li class="d-inline-block"><img class="img-40 rounded-circle" src="../assets/images/user/3.jpg" alt="" v-b-tooltip.hover title="Johny Waston"></li>
																<li class="d-inline-block"><img class="img-40 rounded-circle" src="../assets/images/user/5.jpg" alt="" title="Andew Jon" v-b-tooltip.hover></li>
																<li class="d-inline-block"><img class="img-40 rounded-circle" src="../assets/images/user/1.jpg" alt=""
																	title="Comeren Diaz" v-b-tooltip.hover></li>
																<li class="d-inline-block"><img class="img-40 rounded-circle" src="../assets/images/user/2.png" alt=""
																	title="Bucky Barnes" v-b-tooltip.hover></li>
																<li class="d-inline-block"><img class="img-40 rounded-circle" src="../assets/images/user/8.jpg" alt=""
																	title="Jason Borne" v-b-tooltip.hover></li>
																<li class="d-inline-block"><img class="img-40 rounded-circle" src="../assets/images/user/11.png" alt="" title="Comeren Diaz" v-b-tooltip.hover></li>
															</ul>
														</div>
													</b-card-body>
												</b-collapse>
											</b-card>
										</div>
										<div class="col-xl-12">
											<div class="card"><img class="img-fluid" alt="" src="../assets/images/social-app/timeline-3.png"></div>
										</div>
										<div class="col-xl-12">
											<b-card no-body>
												<b-card-header header-tag="div" role="tab">
													<h5 class="mb-0">
														<button class="btn btn-link pl-0" block v-b-toggle.collapsefriends>Mutual Friends</button>
													</h5>
												</b-card-header>
												<b-collapse id="collapsefriends" visible role="tabpanel">
													<b-card-body class="card-body social-status filter-cards-view animate-chk">
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/2.png" alt="">
															<div class="social-status social-online"></div>
															<div class="media-body"><span class="f-w-600 d-block">Bucky Barnes</span><span class="d-block">winter@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/10.jpg" alt="">
															<div class="social-status social-busy"></div>
															<div class="media-body"><span class="f-w-600 d-block">Sarah Loren</span><span class="d-block">barnes@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/6.jpg" alt="">
															<div class="social-status social-offline"></div>
															<div class="media-body"><span class="f-w-600 d-block">Jason Borne</span><span class="d-block">jasonb@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/8.jpg" alt="">
															<div class="social-status social-offline"></div>
															<div class="media-body"><span class="f-w-600 d-block">Comeren Diaz</span><span class="d-block">comere@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/14.png" alt="">
															<div class="social-status social-online"></div>
															<div class="media-body"><span class="f-w-600 d-block">Andew Jon</span><span class="d-block">andrewj@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/4.jpg" alt="">
															<div class="social-status social-busy"></div>
															<div class="media-body"><span class="f-w-600 d-block">Johny Waston</span><span class="d-block">johny@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/3.png" alt="">
															<div class="social-status social-offline"></div>
															<div class="media-body"><span class="f-w-600 d-block">Johny William</span><span class="d-block">johnyw@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/2.png" alt="">
															<div class="social-status social-online"></div>
															<div class="media-body"><span class="f-w-600 d-block">Bucky Barnes</span><span class="d-block">winter@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/10.jpg" alt="">
															<div class="social-status social-busy"></div>
															<div class="media-body"><span class="f-w-600 d-block">Sarah Loren</span><span class="d-block">barnes@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/6.jpg" alt="">
															<div class="social-status social-offline"></div>
															<div class="media-body"><span class="f-w-600 d-block">Jason Borne</span><span class="d-block">jasonb@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/8.jpg" alt="">
															<div class="social-status social-offline"></div>
															<div class="media-body"><span class="f-w-600 d-block">Comeren Diaz</span><span class="d-block">comere@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/14.png" alt="">
															<div class="social-status social-online"></div>
															<div class="media-body"><span class="f-w-600 d-block">Andew Jon</span><span class="d-block">andrewj@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/4.jpg" alt="">
															<div class="social-status social-busy"></div>
															<div class="media-body"><span class="f-w-600 d-block">Johny Waston</span><span class="d-block">johny@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/3.png" alt="">
															<div class="social-status social-offline"></div>
															<div class="media-body"><span class="f-w-600 d-block">Johny William</span><span class="d-block">johnyw@gmail.com</span></div>
														</div>
													</b-card-body>
												</b-collapse>
											</b-card>
										</div>
										<div class="col-xl-12">
											<b-card no-body>
												<b-card-header header-tag="div" role="tab">
													<h5 class="mb-0">
														<button class="btn btn-link pl-0" block v-b-toggle.collapseactivity>Activity Feed</button>
													</h5>
												</b-card-header>
												<b-collapse id="collapseactivity" visible role="tabpanel">
													<b-card-body class="card-body social-status filter-cards-view animate-chk">
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/10.jpg" alt="">
															<div class="media-body"><span class="f-w-600 d-block">Andew Jon</span>
																<p>Commented on Shaun Park's <a href="#">Photo</a></p><span class="light-span">20 min Ago</span>
															</div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/3.jpg" alt="">
															<div class="media-body"><span class="f-w-600 d-block">Johny Waston</span>
																<p>Commented on Shaun Park's <a href="#">Photo</a></p><span class="light-span">1 hour Ago</span>
															</div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/5.jpg" alt="">
															<div class="media-body"><span class="f-w-600 d-block">Comeren Diaz</span>
																<p>Commented on Shaun Park's <a href="#">Photo</a></p><span class="light-span">1 days Ago</span>
															</div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/4.jpg" alt="">
															<div class="media-body"><span class="f-w-600 d-block">Sarah Loren</span>
																<p>Commented on Shaun Park's <a href="#">Photo</a></p><span class="light-span">2 days Ago</span>
															</div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/3.jpg" alt="">
															<div class="media-body"><span class="f-w-600 d-block">Johny Waston</span>
																<p>Commented on Shaun Park's <a href="#">Photo</a></p><span class="light-span">5 days Ago</span>
															</div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/5.jpg" alt="">
															<div class="media-body"><span class="f-w-600 d-block">Comeren Diaz</span>
																<p>Commented on Shaun Park's <a href="#">Photo</a></p><span class="light-span">6 days Ago</span>
															</div>
														</div>
													</b-card-body>
												</b-collapse>
											</b-card>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-6 xl-60 col-lg-12 col-md-7 box-col-8">
								<div class="row">
									<div class="col-sm-12">
										<div class="card">
											<div class="card-body">
												<div class="new-users-social">
													<div class="media"><img class="rounded-circle image-radius m-r-15" src="../assets/images/user/1.jpg" alt="">
														<div class="media-body">
															<h6 class="mb-0 f-w-700">ELANA</h6>
															<p>January, 12,2019</p>
														</div><span class="pull-right mt-0"><feather type="more-vertical"></feather></span>
													</div>
												</div><img class="img-fluid" alt="" src="../assets/images/social-app/timeline-1.png">
												<div class="timeline-content">
													<p>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. Fusce
														placerat enim et odio molestie sagittis.
													</p>
													<div class="like-content"><span><i class="fa fa-heart font-danger"></i></span><span class="pull-right comment-number"><span>20 </span><span><i class="fa fa-share-alt mr-0"></i></span></span><span class="pull-right comment-number"><span>10 </span><span><i class="fa fa-comments-o"></i></span></span></div>
													<div class="social-chat">
														<div class="your-msg">
															<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/1.jpg">
																<div class="media-body"><span class="f-w-600">Jason Borne <span>1 Year Ago <i class="fa fa-reply font-primary"></i></span></span>
																	<p>we are doing dance and singing songs, please vote our post which is very good for all young peoples</p>
																</div>
															</div>
														</div>
														<div class="other-msg">
															<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/2.png">
																<div class="media-body"><span class="f-w-600">Alexendra Dhadio <span>1 Month Ago <i class="fa fa-reply font-primary"></i></span></span>
																	<p>ohh yeah very good car and its features i will surely vote for it </p>
																</div>
															</div>
														</div>
														<div class="other-msg">
															<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/3.png">
																<div class="media-body"><span class="f-w-600">Olivia Jon <span>15 Days Ago <i class="fa fa-reply font-primary"></i></span></span>
																	<p>ohh yeah very good car and its features i will surely vote for it </p>
																</div>
															</div>
														</div>
														<div class="your-msg">
															<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/1.jpg">
																<div class="media-body"><span class="f-w-600">Issa Bell <span>1 Year Ago <i class="fa fa-reply font-primary"></i></span></span>
																	<p>we are doing dance and singing songs, please vote our post which is very good for all young peoples</p>
																</div>
															</div>
														</div>
														<div class="text-center"><a href="#">More Commnets</a></div>
													</div>
													<div class="comments-box">
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/1.jpg">
															<div class="media-body">
																<div class="input-group text-box">
																	<input class="form-control input-txt-bx" type="text" name="message-to-send" placeholder="Post Your commnets">
																	<div class="input-group-append">
																		<button class="btn btn-transparent" type="button"><i class="fa fa-smile-o">  </i></button>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-12">
										<div class="card">
											<div class="card-body">
												<div class="new-users-social">
													<div class="media"><img class="rounded-circle image-radius m-r-15" src="../assets/images/user/1.jpg" alt="">
														<div class="media-body">
															<h6 class="mb-0 f-w-700">ELANA</h6>
															<p>January, 12,2019</p>
														</div><span class="pull-right mt-0"><feather type="more-vertical"></feather></span>
													</div>
												</div><img class="img-fluid" alt="" src="../assets/images/social-app/timeline-2.png">
												<div class="timeline-content">
													<p>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. Fusce
														placerat enim et odio molestie sagittis.
													</p>
													<div class="like-content"><span><i class="fa fa-heart font-danger"></i></span><span class="pull-right comment-number"><span>20 </span><span><i class="fa fa-share-alt mr-0"></i></span></span><span class="pull-right comment-number"><span>10 </span><span><i class="fa fa-comments-o"></i></span></span></div>
													<div class="social-chat">
														<div class="your-msg">
															<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/1.jpg">
																<div class="media-body"><span class="f-w-600">Jason Borne <span>1 Year Ago <i class="fa fa-reply font-primary"></i></span></span>
																	<p>we are doing dance and singing songs, please vote our post which is very good for all young peoples</p>
																</div>
															</div>
														</div>
														<div class="your-msg">
															<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/1.jpg">
																<div class="media-body"><span class="f-w-600">Issa Bell <span>1 Year Ago <i class="fa fa-reply font-primary"></i></span></span>
																	<p>we are doing dance and singing songs, please vote our post which is very good for all young peoples</p>
																</div>
															</div>
														</div>
														<div class="text-center"><a href="#">More Commnets</a></div>
													</div>
													<div class="comments-box">
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/1.jpg">
															<div class="media-body">
																<div class="input-group text-box">
																	<input class="form-control input-txt-bx" type="text" name="message-to-send" placeholder="Post Your commnets">
																	<div class="input-group-append">
																		<button class="btn btn-transparent" type="button"><i class="fa fa-smile-o">  </i></button>
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
							</div>
							<div class="col-xl-3 xl-100 box-col-12">
								<div class="default-according style-1 faq-accordion job-accordion" id="accordionoc1">
									<div class="row">
										<div class="col-xl-12 xl-50 box-col-6">
											<b-card no-body>
												<b-card-header header-tag="div" role="tab">
													<h5 class="mb-0">
														<button class="btn btn-link pl-0" block v-b-toggle.collapseprofileintro>Profile Intro</button>
													</h5>
												</b-card-header>
												<b-collapse id="collapseprofileintro" visible role="tabpanel">
													<b-card-body class="filter-cards-view">
														<span class="f-w-600">About Me :</span>
														<p>
															Hi, I’m elana, I’m 30 and I work as a
															web Designer for the “Daydreams”
															Agency in Pier 56.
														</p><span class="f-w-600">Favourite TV shows :</span>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi dolor ut maiores recusandae voluptas quod ea error cupiditate libero.</p><span class="f-w-600">Favourite Music Bands :</span>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi dolor ut maiores recusandae voluptas quod ea error cupiditate libero.</p>
														<div class="social-network theme-form"><span class="f-w-600">Social Networks</span>
															<button class="btn social-btn btn-fb mb-2 text-center"><i class="fa fa-facebook m-r-5"></i>Facebook</button>
															<button class="btn social-btn btn-twitter mb-2 text-center"><i class="fa fa-twitter m-r-5"></i>Twitter</button>
															<button class="btn social-btn btn-google text-center"><i class="fa fa-dribbble m-r-5"></i>Dribbble</button>
														</div>
													</b-card-body>
												</b-collapse>
											</b-card>
										</div>
										<div class="col-xl-12 xl-50 box-col-6">
											<b-card no-body>
												<b-card-header header-tag="div" role="tab">
													<h5 class="mb-0">
														<button class="btn btn-link pl-0" block v-b-toggle.collapsefollowers>Followers</button>
													</h5>
												</b-card-header>
												<b-collapse id="collapsefollowers" visible role="tabpanel">
													<b-card-body class="social-list filter-cards-view">
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/2.png">
															<div class="media-body"><span class="d-block">Bucky Barnes</span><a href="#">Add Friend</a></div>
														</div>
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/3.png">
															<div class="media-body"><span class="d-block">Sarah Loren</span><a href="#">Add Friend</a></div>
														</div>
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/3.jpg">
															<div class="media-body"><span class="d-block">Jason Borne</span><a href="#">Add Friend</a></div>
														</div>
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/10.jpg">
															<div class="media-body"><span class="d-block">Comeren Diaz</span><a href="#">Add Friend</a></div>
														</div>
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/11.png">
															<div class="media-body"><span class="d-block">Andew Jon</span><a href="#">Add Friend</a></div>
														</div>
													</b-card-body>
												</b-collapse>
											</b-card>
										</div>
										<div class="col-xl-12 xl-50 box-col-6">
											<b-card no-body>
												<b-card-header header-tag="div" role="tab">
													<h5 class="mb-0">
														<button class="btn btn-link pl-0" block v-b-toggle.collapsefollowings>Followings</button>
													</h5>
												</b-card-header>
												<b-collapse id="collapsefollowings" visible role="tabpanel">
													<b-card-body class="social-list filter-cards-view">
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/3.png">
															<div class="media-body"><span class="d-block">Sarah Loren</span><a href="#">Add Friend</a></div>
														</div>
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/2.png">
															<div class="media-body"><span class="d-block">Bucky Barnes</span><a href="#">Add Friend</a></div>
														</div>
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/10.jpg">
															<div class="media-body"><span class="d-block">Comeren Diaz</span><a href="#">Add Friend</a></div>
														</div>
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/3.jpg">
															<div class="media-body"><span class="d-block">Jason Borne</span><a href="#">Add Friend</a></div>
														</div>
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/11.png">
															<div class="media-body"><span class="d-block">Andew Jon</span><a href="#">Add Friend</a></div>
														</div>
													</b-card-body>
												</b-collapse>
											</b-card>
										</div>
										<div class="col-xl-12 xl-50 box-col-6">
											<b-card no-body>
												<b-card-header header-tag="div" role="tab">
													<h5 class="mb-0">
														<button class="btn btn-link pl-0" block v-b-toggle.collapselatestphotos>Latest Photos</button>
													</h5>
												</b-card-header>
												<b-collapse id="collapselatestphotos" visible role="tabpanel">
													<b-card-body class="photos filter-cards-view px-0">
														<ul class="text-center">
															<li>
																<div class="latest-post"><img class="img-fluid" alt="" src="../assets/images/social-app/post-1.png"></div>
															</li>
															<li>
																<div class="latest-post"><img class="img-fluid" alt="" src="../assets/images/social-app/post-2.png"></div>
															</li>
															<li>
																<div class="latest-post"><img class="img-fluid" alt="" src="../assets/images/social-app/post-3.png"></div>
															</li>
															<li>
																<div class="latest-post"><img class="img-fluid" alt="" src="../assets/images/social-app/post-4.png"></div>
															</li>
															<li>
																<div class="latest-post"><img class="img-fluid" alt="" src="../assets/images/social-app/post-5.png"></div>
															</li>
															<li>
																<div class="latest-post"><img class="img-fluid" alt="" src="../assets/images/social-app/post-6.png"></div>
															</li>
															<li>
																<div class="latest-post"><img class="img-fluid" alt="" src="../assets/images/social-app/post-7.png"></div>
															</li>
															<li>
																<div class="latest-post"><img class="img-fluid" alt="" src="../assets/images/social-app/post-8.png"></div>
															</li>
															<li>
																<div class="latest-post"><img class="img-fluid" alt="" src="../assets/images/social-app/post-9.png"></div>
															</li>
														</ul>
													</b-card-body>
												</b-collapse>
											</b-card>
										</div>
										<div class="col-xl-12 xl-50 box-col-6">
											<b-card no-body>
												<b-card-header header-tag="div" role="tab">
													<h5 class="mb-0">
														<button class="btn btn-link pl-0" block v-b-toggle.collapsefriendsphotos>Friends</button>
													</h5>
												</b-card-header>
												<b-collapse id="collapsefriendsphotos" visible role="tabpanel">
													<b-card-body class="avatar-showcase filter-cards-view">
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/3.jpg" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/5.jpg" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/1.jpg" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/2.png" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/3.png" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/6.jpg" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/10.jpg" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/14.png" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/1.jpg" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/4.jpg" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/11.png" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/8.jpg" alt="#"></div>
													</b-card-body>
												</b-collapse>
											</b-card>
										</div>
										<div class="col-xl-12 xl-50 box-col-6">
											<div class="card"><img class="img-fluid" src="../assets/images/social-app/timeline-4.png" alt=""></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="tab-pane fade" :class="{'show active': showtab == 'about' }" id="about" role="tabpanel" aria-labelledby="about">
						<div class="row">
							<div class="col-xl-3 xl-40 col-lg-12 col-md-5 box-col-4">
								<div class="default-according style-1 faq-accordion job-accordion" id="accordionoc2">
									<div class="row">
										<div class="col-xl-12">
											<b-card no-body>
												<b-card-header header-tag="div" role="tab">
													<h5 class="mb-0">
														<b-button class="btn btn-link pl-0" block v-b-toggle.collapseaboutprofile>My Profile</b-button>
													</h5>
												</b-card-header>
												<b-collapse id="collapseaboutprofile" visible role="tabpanel">
													<b-card-body class="card-body socialprofile filter-cards-view animate-chk">
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" src="../assets/images/user/1.jpg" alt="">
															<div class="media-body">
																<h6 class="font-primary f-w-600">My Page</h6><span class="d-block"><span><i class="fa fa-comments-o"> </i><span class="px-2">Messages<span class="badge badge-pill badge-light">9</span></span></span></span><span class="d-block"><span><i class="fa fa-bell-o"> </i><span class="px-2">Notification<span class="badge badge-pill badge-light">9</span></span></span></span>
															</div>
														</div>
														<div class="social-btngroup d-flex">
															<button class="btn btn-primary text-center" type="button">Likes</button>
															<button class="btn btn-light text-center" type="button">View</button>
														</div>
														<div class="likes-profile text-center">
															<h5><span><i class="fa fa-heart font-danger"></i> 884</span></h5>
														</div>
														<div class="text-center">35 New Likes This Week</div>
														<div class="customers text-center social-group">
															<ul>
																<li class="d-inline-block"><img class="img-40 rounded-circle" src="../assets/images/user/3.jpg" alt="" v-b-tooltip.hover title="Johny Waston"></li>
																<li class="d-inline-block"><img class="img-40 rounded-circle" src="../assets/images/user/5.jpg" alt="" title="Andew Jon" v-b-tooltip.hover></li>
																<li class="d-inline-block"><img class="img-40 rounded-circle" src="../assets/images/user/1.jpg" alt=""
																	title="Comeren Diaz" v-b-tooltip.hover></li>
																<li class="d-inline-block"><img class="img-40 rounded-circle" src="../assets/images/user/2.png" alt=""
																	title="Bucky Barnes" v-b-tooltip.hover></li>
																<li class="d-inline-block"><img class="img-40 rounded-circle" src="../assets/images/user/8.jpg" alt=""
																	title="Jason Borne" v-b-tooltip.hover></li>
																<li class="d-inline-block"><img class="img-40 rounded-circle" src="../assets/images/user/11.png" alt="" title="Comeren Diaz" v-b-tooltip.hover></li>
															</ul>
														</div>
													</b-card-body>
												</b-collapse>
											</b-card>
										</div>
										<div class="col-xl-12">
											<div class="card"><img class="img-fluid" alt="" src="../assets/images/social-app/timeline-3.png"></div>
										</div>
										<div class="col-xl-12">
											<b-card no-body>
												<b-card-header header-tag="div" role="tab">
													<h5 class="mb-0">
														<button class="btn btn-link pl-0" block v-b-toggle.collapseaboutfriends>Mutual Friends</button>
													</h5>
												</b-card-header>
												<b-collapse id="collapseaboutfriends" visible role="tabpanel">
													<b-card-body class="card-body social-status filter-cards-view animate-chk">
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/2.png" alt="">
															<div class="social-status social-online"></div>
															<div class="media-body"><span class="f-w-600 d-block">Bucky Barnes</span><span class="d-block">winter@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/10.jpg" alt="">
															<div class="social-status social-busy"></div>
															<div class="media-body"><span class="f-w-600 d-block">Sarah Loren</span><span class="d-block">barnes@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/6.jpg" alt="">
															<div class="social-status social-offline"></div>
															<div class="media-body"><span class="f-w-600 d-block">Jason Borne</span><span class="d-block">jasonb@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/8.jpg" alt="">
															<div class="social-status social-offline"></div>
															<div class="media-body"><span class="f-w-600 d-block">Comeren Diaz</span><span class="d-block">comere@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/14.png" alt="">
															<div class="social-status social-online"></div>
															<div class="media-body"><span class="f-w-600 d-block">Andew Jon</span><span class="d-block">andrewj@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/4.jpg" alt="">
															<div class="social-status social-busy"></div>
															<div class="media-body"><span class="f-w-600 d-block">Johny Waston</span><span class="d-block">johny@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/3.png" alt="">
															<div class="social-status social-offline"></div>
															<div class="media-body"><span class="f-w-600 d-block">Johny William</span><span class="d-block">johnyw@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/2.png" alt="">
															<div class="social-status social-online"></div>
															<div class="media-body"><span class="f-w-600 d-block">Bucky Barnes</span><span class="d-block">winter@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/10.jpg" alt="">
															<div class="social-status social-busy"></div>
															<div class="media-body"><span class="f-w-600 d-block">Sarah Loren</span><span class="d-block">barnes@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/6.jpg" alt="">
															<div class="social-status social-offline"></div>
															<div class="media-body"><span class="f-w-600 d-block">Jason Borne</span><span class="d-block">jasonb@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/8.jpg" alt="">
															<div class="social-status social-offline"></div>
															<div class="media-body"><span class="f-w-600 d-block">Comeren Diaz</span><span class="d-block">comere@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/14.png" alt="">
															<div class="social-status social-online"></div>
															<div class="media-body"><span class="f-w-600 d-block">Andew Jon</span><span class="d-block">andrewj@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/4.jpg" alt="">
															<div class="social-status social-busy"></div>
															<div class="media-body"><span class="f-w-600 d-block">Johny Waston</span><span class="d-block">johny@gmail.com</span></div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/3.png" alt="">
															<div class="social-status social-offline"></div>
															<div class="media-body"><span class="f-w-600 d-block">Johny William</span><span class="d-block">johnyw@gmail.com</span></div>
														</div>
													</b-card-body>
												</b-collapse>
											</b-card>
										</div>
										<div class="col-xl-12">
											<b-card no-body>
												<b-card-header header-tag="div" role="tab">
													<h5 class="mb-0">
														<button class="btn btn-link pl-0" block v-b-toggle.collapseaboutactivity>Activity Feed</button>
													</h5>
												</b-card-header>
												<b-collapse id="collapseaboutactivity" visible role="tabpanel">
													<b-card-body class="card-body social-status filter-cards-view animate-chk">
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/10.jpg" alt="">
															<div class="media-body"><span class="f-w-600 d-block">Andew Jon</span>
																<p>Commented on Shaun Park's <a href="#">Photo</a></p><span class="light-span">20 min Ago</span>
															</div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/3.jpg" alt="">
															<div class="media-body"><span class="f-w-600 d-block">Johny Waston</span>
																<p>Commented on Shaun Park's <a href="#">Photo</a></p><span class="light-span">1 hour Ago</span>
															</div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/5.jpg" alt="">
															<div class="media-body"><span class="f-w-600 d-block">Comeren Diaz</span>
																<p>Commented on Shaun Park's <a href="#">Photo</a></p><span class="light-span">1 days Ago</span>
															</div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/4.jpg" alt="">
															<div class="media-body"><span class="f-w-600 d-block">Sarah Loren</span>
																<p>Commented on Shaun Park's <a href="#">Photo</a></p><span class="light-span">2 days Ago</span>
															</div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/3.jpg" alt="">
															<div class="media-body"><span class="f-w-600 d-block">Johny Waston</span>
																<p>Commented on Shaun Park's <a href="#">Photo</a></p><span class="light-span">5 days Ago</span>
															</div>
														</div>
														<div class="media"><img class="img-50 rounded-circle m-r-15" src="../assets/images/user/5.jpg" alt="">
															<div class="media-body"><span class="f-w-600 d-block">Comeren Diaz</span>
																<p>Commented on Shaun Park's <a href="#">Photo</a></p><span class="light-span">6 days Ago</span>
															</div>
														</div>
													</b-card-body>
												</b-collapse>
											</b-card>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-6 xl-60 col-lg-12 col-md-7 box-col-8">
								<div class="row">
									<div class="col-sm-12">
										<div class="card">
											<div class="card-header">
												<h5>Pepole You May Know</h5>
											</div>
											<div class="card-body avatar-showcase">
												<div class="pepole-knows">
													<ul>
														<li>
															<div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/2.png"><span class="d-block f-w-600 mt-2">Jason Borne</span>
																<button class="btn btn-primary btn-xs">Add Friend</button>
															</div>
														</li>
														<li>
															<div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/3.png"><span class="d-block f-w-600 mt-2">Anna Mull</span>
																<button class="btn btn-primary btn-xs">Add Friend</button>
															</div>
														</li>
														<li>
															<div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/3.jpg"><span class="d-block f-w-600 mt-2">Dion Cast</span>
																<button class="btn btn-primary btn-xs">Add Friend</button>
															</div>
														</li>
														<li>
															<div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/4.jpg"><span class="d-block f-w-600 mt-2">Karlene Lex</span>
																<button class="btn btn-primary btn-xs">Add Friend</button>
															</div>
														</li>
														<li>
															<div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/8.jpg"><span class="d-block f-w-600 mt-2">Vella Chism</span>
																<button class="btn btn-primary btn-xs">Add Friend</button>
															</div>
														</li>
														<li>
															<div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/10.jpg"><span class="d-block f-w-600 mt-2">Wai Schalk</span>
																<button class="btn btn-primary btn-xs">Add Friend</button>
															</div>
														</li>
														<li>
															<div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/14.png"><span class="d-block f-w-600 mt-2">Karlene Lex</span>
																<button class="btn btn-primary btn-xs">Add Friend</button>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-12">
										<div class="card">
											<div class="card-header social-header">
												<h5><span>Hobbies and Interests</span><span class="pull-right"><feather type="more-vertical"></feather></span></h5>
											</div>
											<div class="card-body">
												<div class="row details-about">
													<div class="col-sm-6">
														<div class="your-details"><span class="f-w-600">Hobbies:</span>
															<p>I like to ride the bike to work, swimming, and working out. I also like reading design magazines, go to museums, and binge watching a good tv show while it’s raining outside.</p>
														</div>
													</div>
													<div class="col-sm-6">
														<div class="your-details your-details-xs"><span class="f-w-600">Favourite Music Bands / Artists:</span>
															<p>Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</p>
														</div>
													</div>
												</div>
												<div class="row details-about">
													<div class="col-sm-6">
														<div class="your-details"><span class="f-w-600">Favourite TV Shows:</span>
															<p>Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.</p>
														</div>
													</div>
													<div class="col-sm-6">
														<div class="your-details your-details-xs"><span class="f-w-600">Favourite Books:</span>
															<p>The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.</p>
														</div>
													</div>
												</div>
												<div class="row details-about">
													<div class="col-sm-6">
														<div class="your-details"><span class="f-w-600">Favourite Movies:</span>
															<p>Idiocratic, The Scarred Wizard and the Fire Crown, Crime Squad Ferrum Man.</p>
														</div>
													</div>
													<div class="col-sm-6">
														<div class="your-details your-details-xs"><span class="f-w-600">Favourite Writers:</span>
															<p>Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandr Platt, Marcus Roth.</p>
														</div>
													</div>
												</div>
												<div class="row details-about">
													<div class="col-sm-6">
														<div class="your-details"><span class="f-w-600">Favourite Games:</span>
															<p>The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto.</p>
														</div>
													</div>
													<div class="col-sm-6">
														<div class="your-details your-details-xs"><span class="f-w-600">Other Interests:</span>
															<p>Swimming, Surfing, Scuba Diving, Anime, Photography, Tattoos, Street Art.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-12">
										<div class="card">
											<div class="card-header social-header">
												<h5><span>Education and Employement</span><span class="pull-right"><feather type="more-vertical"></feather></span></h5>
											</div>
											<div class="card-body">
												<div class="row details-about">
													<div class="col-sm-6">
														<div class="your-details"><span class="f-w-600">The New College of Design</span>
															<p>2001 - 2006</p>
															<p>Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.</p>
														</div>
													</div>
													<div class="col-sm-6">
														<div class="your-details your-details-xs"><span class="f-w-600">Digital Design Intern</span>
															<p>2006-2008</p>
															<p>Digital Design Intern for the “Multimedz” agency. Was in charge of the communication with the clients.</p>
														</div>
													</div>
												</div>
												<div class="row details-about">
													<div class="col-sm-6">
														<div class="your-details"><span class="f-w-600">Rembrandt Institute</span>
															<p>2008</p>
															<p>Five months Digital Illustration course. Professor: Leonardo Stagg.</p>
														</div>
													</div>
													<div class="col-sm-6">
														<div class="your-details your-details-xs"><span class="f-w-600">UI/UX Designer</span>
															<p>2001 - 2006</p>
															<p>Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.</p>
														</div>
													</div>
												</div>
												<div class="row details-about">
													<div class="col-sm-6">
														<div class="your-details"><span class="f-w-600">The Digital College</span>
															<p>2010</p>
															<p>6 months intensive Motion Graphics course. After Effects and Premire. Professor: Donatello Urtle.</p>
														</div>
													</div>
													<div class="col-sm-6">
														<div class="your-details your-details-xs"><span class="f-w-600">The New College of Design</span>
															<p>2008 - 2013</p>
															<p>UI/UX Designer for the “Daydreams” agency.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-12">
										<div class="card">
											<div class="card-header">
												<h5>Viewed Your Profile</h5>
											</div>
											<div class="card-body avatar-showcase">
												<div class="pepole-knows">
													<ul>
														<li>
															<div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/2.png"><span class="d-block f-w-600">Jason Borne</span>
																<button class="btn btn-primary btn-xs">Add Friend</button>
															</div>
														</li>
														<li>
															<div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/3.png"><span class="d-block f-w-600">Anna Mull</span>
																<button class="btn btn-primary btn-xs">Add Friend</button>
															</div>
														</li>
														<li>
															<div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/3.jpg"><span class="d-block f-w-600">Dion Cast</span>
																<button class="btn btn-primary btn-xs">Add Friend</button>
															</div>
														</li>
														<li>
															<div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/4.jpg"><span class="d-block f-w-600">Karlene Lex</span>
																<button class="btn btn-primary btn-xs">Add Friend</button>
															</div>
														</li>
														<li>
															<div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/8.jpg"><span class="d-block f-w-600">Vella Chism</span>
																<button class="btn btn-primary btn-xs">Add Friend</button>
															</div>
														</li>
														<li>
															<div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/10.jpg"><span class="d-block f-w-600">Wai Schalk</span>
																<button class="btn btn-primary btn-xs">Add Friend</button>
															</div>
														</li>
														<li>
															<div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../assets/images/user/14.png"><span class="d-block f-w-600">Karlene Lex</span>
																<button class="btn btn-primary btn-xs">Add Friend</button>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-12">
										<div class="card">
											<div class="card-header">
												<h5>Activity Log</h5>
											</div>
											<div class="card-body">
												<div class="activity-log">
													<div class="my-activity">
														<h6 class="f-w-600">Today</h6>
														<p><span><feather class="m-r-20" type="thumbs-up"></feather></span>Comeren Diaz likes your photos.</p>
														<p><span><feather class="m-r-20" type="user-plus"></feather></span>Karlene Lex and Comeren Diaz now friends.</p>
														<p><span><feather class="m-r-20" type="message-square"></feather></span>Sarah Loren wrote on your timeline</p>
														<p><span><feather class="m-r-20" type="thumbs-up"></feather></span>Johny Waston likes your post's.</p>
														<p><span><feather class="m-r-20" type="user-plus"></feather></span>Andew Jon became friends with Comeren Diaz.</p>
														<p><span><feather class="m-r-20" type="user-plus"></feather></span>Johny Waston became friends with Bucky Barnes.</p>
													</div>
													<div class="my-activity">
														<h6 class="f-w-600">25 December</h6>
														<p><span><feather class="m-r-20" type="thumbs-up"></feather></span>Comeren Diaz likes your photos.</p>
														<p><span><feather class="m-r-20" type="thumbs-up"></feather></span>Johny Waston likes your post's.</p>
														<p><span><feather class="m-r-20" type="user-plus"></feather></span>Karlene Lex and Comeren Diaz now friends.</p>
														<p><span><feather class="m-r-20" type="user-plus"></feather></span>Johny Waston became friends with Bucky Barnes.</p>
														<p><span><feather class="m-r-20" type="message-square"></feather></span>Sarah Loren wrote on your timeline</p>
														<p><span><feather class="m-r-20" type="message-square"></feather></span>Comeren Diaz wrote on your timeline</p>
													</div>
													<div class="my-activity">
														<h6 class="f-w-600">8 september</h6>
														<p><span><feather class="m-r-20" type="thumbs-up"></feather></span>Comeren Diaz likes your photos.</p>
														<p><span><feather class="m-r-20" type="thumbs-up"></feather></span>Johny Waston likes your post's.</p>
														<p><span><feather class="m-r-20" type="user-plus"></feather></span>Karlene Lex and Comeren Diaz now friends.</p>
														<p><span><feather class="m-r-20" type="user-plus"></feather></span>Johny Waston became friends with Bucky Barnes.</p>
														<p><span><feather class="m-r-20" type="message-square"></feather></span>Sarah Loren wrote on your timeline</p>
														<p><span><feather class="m-r-20" type="user-plus"></feather></span>Andew Jon became friends with Comeren Diaz.</p>
													</div>
													<div class="my-activity">
														<h6 class="f-w-600">6 June</h6>
														<p><span><feather class="m-r-20" type="thumbs-up"></feather></span>Comeren Diaz likes your photos.</p>
														<p><span><feather class="m-r-20" type="user-plus"></feather></span>Karlene Lex and Comeren Diaz now friends.</p>
														<p><span><feather class="m-r-20" type="message-square"></feather></span>Sarah Loren wrote on your timeline</p>
														<p><span><feather class="m-r-20" type="thumbs-up"></feather></span>Johny Waston likes your post's.</p>
														<p><span><feather class="m-r-20" type="user-plus"></feather></span>Andew Jon became friends with Comeren Diaz.</p>
														<p><span><feather class="m-r-20" type="user-plus"></feather></span>Johny Waston became friends with Bucky Barnes.</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 xl-100 box-col-12">
								<div class="default-according style-1 faq-accordion job-accordion" id="accordionoc3">
									<div class="row">
										<div class="col-xl-12 xl-50 box-col-6">
											<b-card no-body>
												<b-card-header header-tag="div" role="tab">
													<h5 class="mb-0">
														<button class="btn btn-link pl-0" block v-b-toggle.collapseaboutprofileintro>Profile Intro</button>
													</h5>
												</b-card-header>
												<b-collapse id="collapseaboutprofileintro" visible role="tabpanel">
													<b-card-body class="filter-cards-view">
														<span class="f-w-600">About Me :</span>
														<p>
															Hi, I’m elana, I’m 30 and I work as a
															web Designer for the “Daydreams”
															Agency in Pier 56.
														</p><span class="f-w-600">Favourite TV shows :</span>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi dolor ut maiores recusandae voluptas quod ea error cupiditate libero.</p><span class="f-w-600">Favourite Music Bands :</span>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi dolor ut maiores recusandae voluptas quod ea error cupiditate libero.</p>
														<div class="social-network theme-form"><span class="f-w-600">Social Networks</span>
															<button class="btn social-btn btn-fb mb-2 text-center"><i class="fa fa-facebook m-r-5"></i>Facebook</button>
															<button class="btn social-btn btn-twitter mb-2 text-center"><i class="fa fa-twitter m-r-5"></i>Twitter</button>
															<button class="btn social-btn btn-google text-center"><i class="fa fa-dribbble m-r-5"></i>Dribbble</button>
														</div>
													</b-card-body>
												</b-collapse>
											</b-card>
										</div>
										<div class="col-xl-12 xl-50 box-col-6">
											<b-card no-body>
												<b-card-header header-tag="div" role="tab">
													<h5 class="mb-0">
														<button class="btn btn-link pl-0" block v-b-toggle.collapseaboutfollowers>Followers</button>
													</h5>
												</b-card-header>
												<b-collapse id="collapseaboutfollowers" visible role="tabpanel">
													<b-card-body class="social-list filter-cards-view">
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/2.png">
															<div class="media-body"><span class="d-block">Bucky Barnes</span><a href="#">Add Friend</a></div>
														</div>
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/3.png">
															<div class="media-body"><span class="d-block">Sarah Loren</span><a href="#">Add Friend</a></div>
														</div>
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/3.jpg">
															<div class="media-body"><span class="d-block">Jason Borne</span><a href="#">Add Friend</a></div>
														</div>
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/10.jpg">
															<div class="media-body"><span class="d-block">Comeren Diaz</span><a href="#">Add Friend</a></div>
														</div>
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/11.png">
															<div class="media-body"><span class="d-block">Andew Jon</span><a href="#">Add Friend</a></div>
														</div>
													</b-card-body>
												</b-collapse>
											</b-card>
										</div>
										<div class="col-xl-12 xl-50 box-col-6">
											<b-card no-body>
												<b-card-header header-tag="div" role="tab">
													<h5 class="mb-0">
														<button class="btn btn-link pl-0" block v-b-toggle.collapseaboutfollowings>Followings</button>
													</h5>
												</b-card-header>
												<b-collapse id="collapseaboutfollowings" visible role="tabpanel">
													<b-card-body class="social-list filter-cards-view">
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/3.png">
															<div class="media-body"><span class="d-block">Sarah Loren</span><a href="#">Add Friend</a></div>
														</div>
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/2.png">
															<div class="media-body"><span class="d-block">Bucky Barnes</span><a href="#">Add Friend</a></div>
														</div>
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/10.jpg">
															<div class="media-body"><span class="d-block">Comeren Diaz</span><a href="#">Add Friend</a></div>
														</div>
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/3.jpg">
															<div class="media-body"><span class="d-block">Jason Borne</span><a href="#">Add Friend</a></div>
														</div>
														<div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" alt="" src="../assets/images/user/11.png">
															<div class="media-body"><span class="d-block">Andew Jon</span><a href="#">Add Friend</a></div>
														</div>
													</b-card-body>
												</b-collapse>
											</b-card>
										</div>
										<div class="col-xl-12 xl-50 box-col-6">
											<b-card no-body>
												<b-card-header header-tag="div" role="tab">
													<h5 class="mb-0">
														<button class="btn btn-link pl-0" block v-b-toggle.collapseaboutlatestphotos>Latest Photos</button>
													</h5>
												</b-card-header>
												<b-collapse id="collapseaboutlatestphotos" visible role="tabpanel">
													<b-card-body class="photos filter-cards-view px-0">
														<ul class="text-center">
															<li>
																<div class="latest-post"><img class="img-fluid" alt="" src="../assets/images/social-app/post-1.png"></div>
															</li>
															<li>
																<div class="latest-post"><img class="img-fluid" alt="" src="../assets/images/social-app/post-2.png"></div>
															</li>
															<li>
																<div class="latest-post"><img class="img-fluid" alt="" src="../assets/images/social-app/post-3.png"></div>
															</li>
															<li>
																<div class="latest-post"><img class="img-fluid" alt="" src="../assets/images/social-app/post-4.png"></div>
															</li>
															<li>
																<div class="latest-post"><img class="img-fluid" alt="" src="../assets/images/social-app/post-5.png"></div>
															</li>
															<li>
																<div class="latest-post"><img class="img-fluid" alt="" src="../assets/images/social-app/post-6.png"></div>
															</li>
															<li>
																<div class="latest-post"><img class="img-fluid" alt="" src="../assets/images/social-app/post-7.png"></div>
															</li>
															<li>
																<div class="latest-post"><img class="img-fluid" alt="" src="../assets/images/social-app/post-8.png"></div>
															</li>
															<li>
																<div class="latest-post"><img class="img-fluid" alt="" src="../assets/images/social-app/post-9.png"></div>
															</li>
														</ul>
													</b-card-body>
												</b-collapse>
											</b-card>
										</div>
										<div class="col-xl-12 xl-50 box-col-6">
											<b-card no-body>
												<b-card-header header-tag="div" role="tab">
													<h5 class="mb-0">
														<button class="btn btn-link pl-0" block v-b-toggle.collapseaboutfriendsphotos>Friends</button>
													</h5>
												</b-card-header>
												<b-collapse id="collapseaboutfriendsphotos" visible role="tabpanel">
													<b-card-body class="avatar-showcase filter-cards-view">
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/3.jpg" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/5.jpg" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/1.jpg" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/2.png" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/3.png" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/6.jpg" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/10.jpg" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/14.png" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/1.jpg" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/4.jpg" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/11.png" alt="#"></div>
														<div class="d-inline-block friend-pic"><img class="img-50 rounded-circle" src="../assets/images/user/8.jpg" alt="#"></div>
													</b-card-body>
												</b-collapse>
											</b-card>
										</div>
										<div class="col-xl-12 xl-50 box-col-6">
											<div class="card"><img class="img-fluid" src="../assets/images/social-app/timeline-4.png" alt=""></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="tab-pane fade" :class="{'show active': showtab == 'friends' }" id="friends" role="tabpanel" aria-labelledby="friends">
						<div class="row user-cards">
							<div class="col-md-6 col-lg-6 col-xl-4">
								<div class="card custom-card">
									<div class="card-header"><img class="img-fluid" src="../assets/images/user-card/1.jpg" alt=""></div>
									<div class="card-profile"><img class="rounded-circle" src="../assets/images/avtar/3.jpg" alt=""></div>
									<ul class="card-social">
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a href="#"><i class="fa fa-instagram"></i></a></li>
										<li><a href="#"><i class="fa fa-rss"></i></a></li>
									</ul>
									<div class="text-center profile-details">
										<h4>Mark Jecno</h4>
										<h6>Manager</h6>
									</div>
									<div class="card-footer row">
										<div class="col-4 col-sm-4">
											<h6>Follower</h6>
											<h3 class="counter">9564</h3>
										</div>
										<div class="col-4 col-sm-4">
											<h6>Following</h6>
											<h3><span class="counter">49</span>K</h3>
										</div>
										<div class="col-4 col-sm-4">
											<h6>Total Post</h6>
											<h3><span class="counter">96</span>M</h3>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-lg-6 col-xl-4">
								<div class="card custom-card">
									<div class="card-header"><img class="img-fluid" src="../assets/images/user-card/2.jpg" alt=""></div>
									<div class="card-profile"><img class="rounded-circle" src="../assets/images/avtar/16.jpg" alt=""></div>
									<ul class="card-social">
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a href="#"><i class="fa fa-instagram"></i></a></li>
										<li><a href="#"><i class="fa fa-rss"></i></a></li>
									</ul>
									<div class="text-center profile-details">
										<h4>Johan Deo</h4>
										<h6>Designer</h6>
									</div>
									<div class="card-footer row">
										<div class="col-4 col-sm-4">
											<h6>Follower</h6>
											<h3 class="counter">2578</h3>
										</div>
										<div class="col-4 col-sm-4">
											<h6>Following</h6>
											<h3><span class="counter">26</span>K</h3>
										</div>
										<div class="col-4 col-sm-4">
											<h6>Total Post</h6>
											<h3><span class="counter">96</span>M</h3>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-lg-6 col-xl-4">
								<div class="card custom-card">
									<div class="card-header"><img class="img-fluid" src="../assets/images/user-card/3.jpg" alt=""></div>
									<div class="card-profile"><img class="rounded-circle" src="../assets/images/avtar/11.jpg" alt=""></div>
									<ul class="card-social">
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a href="#"><i class="fa fa-instagram"></i></a></li>
										<li><a href="#"><i class="fa fa-rss"></i></a></li>
									</ul>
									<div class="text-center profile-details">
										<h4>Dev John</h4>
										<h6>Devloper</h6>
									</div>
									<div class="card-footer row">
										<div class="col-4 col-sm-4">
											<h6>Follower</h6>
											<h3 class="counter">6545</h3>
										</div>
										<div class="col-4 col-sm-4">
											<h6>Following</h6>
											<h3><span class="counter">91</span>K</h3>
										</div>
										<div class="col-4 col-sm-4">
											<h6>Total Post</h6>
											<h3><span class="counter">21</span>M</h3>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-lg-6 col-xl-4">
								<div class="card custom-card">
									<div class="card-header"><img class="img-fluid" src="../assets/images/user-card/7.jpg" alt=""></div>
									<div class="card-profile"><img class="rounded-circle" src="../assets/images/avtar/16.jpg" alt=""></div>
									<ul class="card-social">
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a href="#"><i class="fa fa-instagram"></i></a></li>
										<li><a href="#"><i class="fa fa-rss"></i></a></li>
									</ul>
									<div class="text-center profile-details">
										<h4>Johan Deo</h4>
										<h6>Designer</h6>
									</div>
									<div class="card-footer row">
										<div class="col-4 col-sm-4">
											<h6>Follower</h6>
											<h3 class="counter">2578</h3>
										</div>
										<div class="col-4 col-sm-4">
											<h6>Following</h6>
											<h3><span class="counter">26</span>K</h3>
										</div>
										<div class="col-4 col-sm-4">
											<h6>Total Post</h6>
											<h3><span class="counter">96</span>M</h3>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-lg-6 col-xl-4">
								<div class="card custom-card">
									<div class="card-header"><img class="img-fluid" src="../assets/images/user-card/5.jpg" alt=""></div>
									<div class="card-profile"><img class="rounded-circle" src="../assets/images/avtar/11.jpg" alt=""></div>
									<ul class="card-social">
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a href="#"><i class="fa fa-instagram"></i></a></li>
										<li><a href="#"><i class="fa fa-rss"></i></a></li>
									</ul>
									<div class="text-center profile-details">
										<h4>Dev John</h4>
										<h6>Devloper</h6>
									</div>
									<div class="card-footer row">
										<div class="col-4 col-sm-4">
											<h6>Follower</h6>
											<h3 class="counter">6545</h3>
										</div>
										<div class="col-4 col-sm-4">
											<h6>Following</h6>
											<h3><span class="counter">91</span>K</h3>
										</div>
										<div class="col-4 col-sm-4">
											<h6>Total Post</h6>
											<h3><span class="counter">21</span>M</h3>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-lg-6 col-xl-4">
								<div class="card custom-card">
									<div class="card-header"><img class="img-fluid" src="../assets/images/user-card/6.jpg" alt=""></div>
									<div class="card-profile"><img class="rounded-circle" src="../assets/images/avtar/3.jpg" alt=""></div>
									<ul class="card-social">
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a href="#"><i class="fa fa-instagram"></i></a></li>
										<li><a href="#"><i class="fa fa-rss"></i></a></li>
									</ul>
									<div class="text-center profile-details">
										<h4>Mark Jecno</h4>
										<h6>Manager</h6>
									</div>
									<div class="card-footer row">
										<div class="col-4 col-sm-4">
											<h6>Follower</h6>
											<h3 class="counter">9564</h3>
										</div>
										<div class="col-4 col-sm-4">
											<h6>Following</h6>
											<h3><span class="counter">49</span>K</h3>
										</div>
										<div class="col-4 col-sm-4">
											<h6>Total Post</h6>
											<h3><span class="counter">96</span>M</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="tab-pane fade" :class="{'show active': showtab == 'photos' }" id="photos" role="tabpanel" aria-labelledby="photos">
						<div class="row">
							<div class="col-sm-12">
								<div class="card">
									<div class="my-gallery card-body row gallery-with-description" itemscope="">

										<VueGallery :images="bigimages" :index="index" @close="index = null"></VueGallery>
										
										<figure class="col-xl-3 col-sm-6 m-0" v-for="(figure,imageIndex) in figureslist" :key="imageIndex">
											<a @click="index = imageIndex">
												<img :src="require('../assets/images/big-lightgallry/'+figure.image)" alt="Image description" class="img-fluid">
												<div class="caption">
													<h4 v-text="figure.title"></h4>
													<p v-text="figure.descr"></p>
												</div>
											</a>
										</figure>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  import VueGallery from 'vue-gallery';

  export default{
    components: {
      VueGallery
    },
    data() {
      return{
        showtab:'timeline',
        index:null,
        bigimages:[
          require('../assets/images/big-lightgallry/01.jpg'),
          require('../assets/images/big-lightgallry/02.jpg'),
          require('../assets/images/big-lightgallry/03.jpg'),
          require('../assets/images/big-lightgallry/04.jpg'),
          require('../assets/images/big-lightgallry/05.jpg'),
          require('../assets/images/big-lightgallry/011.jpg'),
          require('../assets/images/big-lightgallry/010.jpg'),
          require('../assets/images/big-lightgallry/08.jpg'),
        ],
        figureslist:[
          {
            title:'Johan Deo',
            descr:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
            image:'01.jpg'
          },
          {
            title:'Dev John',
            descr:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
            image:'02.jpg'
          },
          {
            title:'Johan Deo',
            descr:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
            image:'03.jpg'
          },
          {
            title:'Comeren Diaz',
            descr:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
            image:'04.jpg'
          },
          {
            title:'Andew Jon',
            descr:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
            image:'05.jpg'
          },
          {
            title:'Sarah Loren',
            descr:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
            image:'011.jpg'
          },
          {
            title:'Andew Jon',
            descr:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
            image:'010.jpg'
          },
          {
            title:'Bucky Barnes',
            descr:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
            image:'08.jpg'
          }
        ]
      };
    },
    methods:{
      changetab(tab) {
        this.showtab = tab;
      }
    }
  };
</script>

<template>
	<div>
		<Breadcrumbs main="UI Kits" title="alert"/>
		<!-- Container-fluid starts-->
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-12 col-xl-6">
					<div class="card">
						<div class="card-header">
							<h5>Theme Color Alerts</h5><span>Theme color Archive just adding class <code>.dark</code></span>
						</div>
						<div class="card-body">
							<b-alert show variant="primary" class="alert alert-primary dark">
								<p>This is a info alert—check it out!</p>
							</b-alert>

							<b-alert show variant="secondary" class="alert alert-secondary dark">
								<p>This is a light alert—check it out!</p>
							</b-alert>

							<b-alert show variant="success" class="alert alert-success dark">
								<p>This is a success alert—check it out!</p>
							</b-alert>

							<b-alert show variant="info" class="alert alert-info dark">
								<p>This is a danger alert—check it out!</p>
							</b-alert>

							<b-alert show variant="warning" class="alert alert-warning dark">
								<p>This is a secondary alert—check it out!</p>
							</b-alert>

							<b-alert show variant="danger" class="alert alert-danger dark">
								<p>This is a warning alert—check it out!</p>
							</b-alert>

							<b-alert show variant="light" class="alert alert-light dark">
								<p>This is a light alert—check it out!</p>
							</b-alert>

							<b-alert show variant="dark" class="alert alert-dark dark">
								<p>This is a dark alert—check it out!</p>
							</b-alert>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6">
					<div class="card">
						<div class="card-header">
							<h5>Link color in theme-color</h5><span>Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert</span>
						</div>
						<div class="card-body">
							<b-alert show variant="primary" class="alert alert-primary dark">
								<p>This is a primary alert with <a class="alert-link" href="#">an example link</a>.Click It</p>
							</b-alert>

							<b-alert show variant="secondary" class="alert alert-secondary dark">
								<p>This is a secondary alert with <a class="alert-link" href="#">an example link</a>.Click It</p>
							</b-alert>

							<b-alert show variant="success" class="alert alert-success dark">
								<p>This is a success alert with <a class="alert-link" href="#">an example link</a>.Click It</p>
							</b-alert>

							<b-alert show variant="info" class="alert alert-info dark">
								<p>This is a info alert with <a class="alert-link" href="#">an example link</a>.Click It</p>
							</b-alert>

							<b-alert show variant="warning" class="alert alert-warning dark">
								<p>This is a warning alert with <a class="alert-link" href="#">an example link</a>.Click It</p>
							</b-alert>

							<b-alert show variant="danger" class="alert alert-danger dark">
								<p>This is a danger alert with <a class="alert-link" href="#">an example link</a>.Click It</p>
							</b-alert>

							<b-alert show variant="light" class="alert alert-light dark">
								<p>This is a light alert with <a class="alert-link" href="#">an example link</a>.Click It</p>
							</b-alert>

							<b-alert show variant="dark" class="alert alert-dark dark">
								<p>This is a dark alert with <a class="alert-link" href="#">an example link</a>.Click It</p>
							</b-alert>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6">
					<div class="card height-equal">
						<div class="card-header">
							<h5>Dismissing</h5><span>To animate alerts when dismissing them, be sure to add the .fade and .show classes.</span>
						</div>
						<div class="card-body">

							<b-alert variant="primary" show dismissible class="alert alert-primary dark alert-dismissible fade show">
								<strong>Holy ! </strong>
								You can check in on some of those fields below.
							</b-alert>

							<b-alert variant="secondary" show dismissible class="alert alert-secondary dark alert-dismissible fade show">
								<strong>Holy ! </strong>
								You can check in on some of those fields below.
							</b-alert>

							<b-alert variant="success" show dismissible class="alert alert-success dark alert-dismissible fade show">
								<strong>Holy ! </strong>
								You can check in on some of those fields below.
							</b-alert>

							<b-alert variant="info" show dismissible class="alert alert-info dark alert-dismissible fade show">
								<strong>Holy ! </strong>
								You can check in on some of those fields below.
							</b-alert>

							<b-alert variant="warning" show dismissible class="alert alert-warning dark alert-dismissible fade show">
								<strong>Holy ! </strong>
								You can check in on some of those fields below.
							</b-alert>

							<b-alert variant="danger" show dismissible class="alert alert-danger dark alert-dismissible fade show">
								<strong>Holy ! </strong>
								You can check in on some of those fields below.
							</b-alert>

							<b-alert variant="light" show dismissible class="alert alert-light dark alert-dismissible fade show">
								<strong>Holy ! </strong>
								You can check in on some of those fields below.
							</b-alert>

							<b-alert variant="dark" show dismissible class="alert alert-dark dark alert-dismissible fade show">
								<strong>Holy ! </strong>
								You can check in on some of those fields below.
							</b-alert>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6">
					<div class="card height-equal">
						<div class="card-header">
							<h5>Alert With Icon</h5><span>Just add Any icon before text</span>
						</div>
						<div class="card-body">
							<b-alert variant="primary" show dismissible class="alert alert-primary dark alert-dismissible fade show">
								<feather type="clock"></feather>
								<p class="d-inline-block pl-3">You can check in on some of those fields below.</p>
							</b-alert>

							<b-alert variant="secondary" show dismissible class="alert alert-secondary dark alert-dismissible fade show">
								<feather type="heart"></feather>
								<p class="d-inline-block pl-3">You can check in on some of those fields below.</p>
							</b-alert>

							<b-alert variant="success" show dismissible class="alert alert-success dark alert-dismissible fade show">
								<feather type="thumbs-up"></feather>
								<p class="d-inline-block pl-3">You can check in on some of those fields below.</p>
							</b-alert>

							<b-alert variant="info" show dismissible class="alert alert-info dark alert-dismissible fade show">
								<feather type="help-circle"></feather>
								<p class="d-inline-block pl-3">You can check in on some of those fields below.</p>
							</b-alert>

							<b-alert variant="warning" show dismissible class="alert alert-warning dark alert-dismissible fade show">
								<feather type="bell"></feather>
								<p class="d-inline-block pl-3">You can check in on some of those fields below.</p>
							</b-alert>

							<b-alert variant="danger" show dismissible class="alert alert-danger dark alert-dismissible fade show">
								<feather type="thumbs-down"></feather>
								<p class="d-inline-block pl-3">You can check in on some of those fields below.</p>
							</b-alert>

							<b-alert variant="light" show dismissible class="alert alert-light dark alert-dismissible fade show">
								<feather type="alert-triangle"></feather>
								<p class="d-inline-block pl-3">You can check in on some of those fields below.</p>
							</b-alert>

							<b-alert variant="dark" show dismissible class="alert alert-dark dark alert-dismissible fade show">
								<feather type="alert-circle"></feather>
								<p class="d-inline-block pl-3">You can check in on some of those fields below.</p>
							</b-alert>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6">
					<div class="card">
						<div class="card-header">
							<h5>Light Alerts</h5><span>Alerts are available for any length of text, as well as an optional dismiss button.</span>
						</div>
						<div class="card-body">
							<b-alert show variant="primary" class="alert alert-primary">
								<p>This is a primary alert—check it out!</p>
							</b-alert>

							<b-alert show variant="secondary" class="alert alert-secondary">
								<p>This is a secondary alert—check it out!</p>
							</b-alert>

							<b-alert show variant="success" class="alert alert-success">
								<p>This is a success alert—check it out!</p>
							</b-alert>

							<b-alert show variant="info" class="alert alert-info">
								<p>This is a info alert—check it out!</p>
							</b-alert>

							<b-alert show variant="warning" class="alert alert-warning">
								<p>This is a warning alert—check it out!</p>
							</b-alert>

							<b-alert show variant="danger" class="alert alert-danger">
								<p>This is a danger alert—check it out!</p>
							</b-alert>

							<b-alert show variant="light" class="alert alert-light">
								<p>This is a light alert—check it out!</p>
							</b-alert>

							<b-alert show variant="dark" class="alert alert-dark">
								<p>This is a dark alert—check it out!</p>
							</b-alert>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6">
					<div class="card">
						<div class="card-header">
							<h5>Link color</h5><span>Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert</span>
						</div>
						<div class="card-body">
							<b-alert show variant="primary" class="alert alert-primary">
								<p>This is a primary alert with <a class="alert-link" href="#">an example link</a>.Click It</p>
							</b-alert>

							<b-alert show variant="secondary" class="alert alert-secondary">
								<p>This is a secondary alert with <a class="alert-link" href="#">an example link</a>.Click It</p>
							</b-alert>

							<b-alert show variant="success" class="alert alert-success">
								<p>This is a success alert with <a class="alert-link" href="#">an example link</a>.Click It</p>
							</b-alert>

							<b-alert show variant="info" class="alert alert-info">
								<p>This is a info alert with <a class="alert-link" href="#">an example link</a>.Click It</p>
							</b-alert>

							<b-alert show variant="warning" class="alert alert-warning">
								<p>This is a warning alert with <a class="alert-link" href="#">an example link</a>.Click It</p>
							</b-alert>

							<b-alert show variant="danger" class="alert alert-danger">
								<p>This is a danger alert with <a class="alert-link" href="#">an example link</a>.Click It</p>
							</b-alert>

							<b-alert show variant="light" class="alert alert-light">
								<p>This is a light alert with <a class="alert-link" href="#">an example link</a>.Click It</p>
							</b-alert>

							<b-alert show variant="dark" class="alert alert-dark">
								<p>This is a dark alert with <a class="alert-link" href="#">an example link</a>.Click It</p>
							</b-alert>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6">
					<div class="card height-equal">
						<div class="card-header">
							<h5>Dismissing</h5><span>To animate alerts when dismissing them, be sure to add the .fade and .show classes.</span>
						</div>
						<div class="card-body">
							<b-alert variant="primary" show dismissible class="alert alert-primary alert-dismissible fade show">
								<strong>Holy ! </strong>
								You can check in on some of those fields below.
							</b-alert>

							<b-alert variant="secondary" show dismissible class="alert alert-secondary alert-dismissible fade show">
								<strong>Holy ! </strong>
								You can check in on some of those fields below.
							</b-alert>

							<b-alert variant="success" show dismissible class="alert alert-success alert-dismissible fade show">
								<strong>Holy ! </strong>
								You can check in on some of those fields below.
							</b-alert>

							<b-alert variant="info" show dismissible class="alert alert-info alert-dismissible fade show">
								<strong>Holy ! </strong>
								You can check in on some of those fields below.
							</b-alert>

							<b-alert variant="warning" show dismissible class="alert alert-warning alert-dismissible fade show">
								<strong>Holy ! </strong>
								You can check in on some of those fields below.
							</b-alert>

							<b-alert variant="danger" show dismissible class="alert alert-danger alert-dismissible fade show">
								<strong>Holy ! </strong>
								You can check in on some of those fields below.
							</b-alert>

							<b-alert variant="light" show dismissible class="alert alert-light alert-dismissible fade show">
								<strong>Holy ! </strong>
								You can check in on some of those fields below.
							</b-alert>

							<b-alert variant="dark" show dismissible class="alert alert-dark alert-dismissible fade show">
								<strong>Holy ! </strong>
								You can check in on some of those fields below.
							</b-alert>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6">
					<div class="card height-equal">
						<div class="card-header">
							<h5>Outline Alerts</h5><span>Outline Archive just adding class <code>.outline</code></span>
						</div>
						<div class="card-body">
							<b-alert show variant="primary" class="alert alert-primary outline">
								<p>This is a primary alert—check it out!</p>
							</b-alert>

							<b-alert show variant="secondary" class="alert alert-secondary outline">
								<p>This is a secondary alert—check it out!</p>
							</b-alert>

							<b-alert show variant="success" class="alert alert-success outline">
								<p>This is a success alert—check it out!</p>
							</b-alert>

							<b-alert show variant="info" class="alert alert-info outline">
								<p>This is a info alert—check it out!</p>
							</b-alert>

							<b-alert show variant="warning" class="alert alert-warning outline">
								<p>This is a warning alert—check it out!</p>
							</b-alert>

							<b-alert show variant="danger" class="alert alert-danger outline">
								<p>This is a danger alert—check it out!</p>
							</b-alert>

							<b-alert show variant="light" class="alert alert-light outline">
								<p>This is a light alert—check it out!</p>
							</b-alert>

							<b-alert show variant="dark" class="alert alert-dark outline">
								<p>This is a dark alert—check it out!</p>
							</b-alert>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6">
					<div class="card height-equal">
						<div class="card-header">
							<h5>Outline Dark Alerts</h5><span>Outline Archive just adding class <code>.outline-2x</code></span>
						</div>
						<div class="card-body">
							<b-alert show variant="primary" class="alert alert-primary outline-2x">
								<p>This is a primary alert—check it out!</p>
							</b-alert>

							<b-alert show variant="secondary" class="alert alert-secondary outline-2x">
								<p>This is a secondary alert—check it out!</p>
							</b-alert>

							<b-alert show variant="success" class="alert alert-success outline-2x">
								<p>This is a success alert—check it out!</p>
							</b-alert>

							<b-alert show variant="info" class="alert alert-info outline-2x">
								<p>This is a info alert—check it out!</p>
							</b-alert>

							<b-alert show variant="warning" class="alert alert-warning outline-2x">
								<p>This is a warning alert—check it out!</p>
							</b-alert>

							<b-alert show variant="danger" class="alert alert-danger outline-2x">
								<p>This is a danger alert—check it out!</p>
							</b-alert>

							<b-alert show variant="light" class="alert alert-light outline-2x">
								<p>This is a light alert—check it out!</p>
							</b-alert>

							<b-alert show variant="dark" class="alert alert-dark outline-2x">
								<p>This is a dark alert—check it out!</p>
							</b-alert>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6">
					<div class="card height-equal">
						<div class="card-header">
							<h5>Alert With Icon outline</h5><span>Just add Any icon before text</span>
						</div>
						<div class="card-body">
							<b-alert variant="primary" show dismissible class="alert alert-primary outline alert-dismissible fade show">
								<feather type="clock"></feather>
								<p class="d-inline-block pl-3">Your time Over after <b>5</b> miniute</p>
							</b-alert>

							<b-alert variant="secondary" show dismissible class="alert alert-secondary outline alert-dismissible fade show">
								<feather type="heart"></feather>
								<p class="d-inline-block pl-3">Oh snap! Change a few things up and submit again.</p>
							</b-alert>

							<b-alert variant="success" show dismissible class="alert alert-success outline alert-dismissible fade show">
								<feather type="thumbs-up"></feather>
								<p class="d-inline-block pl-3"><b> Well done! </b>You successfully read this important alert message.</p>
							</b-alert>

							<b-alert variant="info" show dismissible class="alert alert-info outline alert-dismissible fade show">
								<feather type="help-circle"></feather>
								<p class="d-inline-block pl-3"><b>Welcome!</b> Start your day with some alerts.</p>
							</b-alert>

							<b-alert variant="warning" show dismissible class="alert alert-warning outline alert-dismissible fade show">
								<feather type="bell"></feather>
								<p class="d-inline-block pl-3"><b> Congratulation! </b>Your Product Added in Like List</p>
							</b-alert>

							<b-alert variant="danger" show dismissible class="alert alert-danger outline alert-dismissible fade show">
								<feather type="thumbs-down"></feather>
								<p class="d-inline-block pl-3">Your  <b> Perfomance </b> is down on this week</p>
							</b-alert>

							<b-alert variant="light" show dismissible class="alert alert-light outline alert-dismissible fade show">
								<feather type="alert-triangle"></feather>
								<p class="d-inline-block pl-3">You can check in on some of those fields below.</p>
							</b-alert>

							<b-alert variant="dark" show dismissible class="alert alert-light outline alert-dismissible fade show">
								<feather type="alert-circle"></feather>
								<p class="d-inline-block pl-3">You can check in on some of those fields below.</p>
							</b-alert>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6">
					<div class="card">
						<div class="card-header">
							<h5>Alert With Icon inverse</h5><span>Use the <code>.inverse</code> class to quickly provide matching colored links within any alert</span>
						</div>
						<div class="card-body">

							<b-alert variant="primary" show dismissible class="alert alert-primary inverse alert-dismissible fade show">
								<i class="icon-timer"></i>
								<p>Your time Over after <b>5</b> miniute</p>
							</b-alert>

							<b-alert variant="secondary" show dismissible class="alert alert-secondary inverse alert-dismissible fade show">
								<i class="icon-heart"></i>
								<p>Oh snap! Change a few things up and submit again.</p>
							</b-alert>

							<b-alert variant="success" show dismissible class="alert alert-success inverse alert-dismissible fade show">
								<i class="icon-thumb-up alert-center"></i>
								<p><b> Well done! </b>You successfully read this important alert message.</p>
							</b-alert>

							<b-alert variant="info" show dismissible class="alert alert-info inverse alert-dismissible fade show">
								<i class="icon-help-alt"></i>
								<p><b>Welcome!</b> Start your day with some alerts.</p>
							</b-alert>

							<b-alert variant="warning" show dismissible class="alert alert-warning inverse alert-dismissible fade show">
								<i class="icon-bell"></i>
								<p><b> Congratulation! </b>Your Product Added in Like List</p>
							</b-alert>

							<b-alert variant="danger" show dismissible class="alert alert-danger inverse alert-dismissible fade show">
								<i class="icon-thumb-down"></i>
								<p>Your  <b> Perfomance </b> is down on this week</p>
							</b-alert>

							<b-alert variant="light" show dismissible class="alert alert-light inverse alert-dismissible fade show">
								<i class="icon-alert txt-dark"></i>
								<p>You can check in on some of those fields below.</p>
							</b-alert>

							<b-alert variant="dark" show dismissible class="alert alert-dark inverse alert-dismissible fade show">
								<i class="icon-info-alt"></i>
								<p> You can check in on some of those fields below.</p>
							</b-alert>

						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6">
					<div class="card">
						<div class="card-header">
							<h5>Text as action</h5><span>Use the <code>.action-text</code> class to add dismiss text instead of icon</span>
						</div>
						<div class="card-body">
							<b-alert variant="primary" show class="alert alert-primary inverse alert-dismissible fade show" dismiss-label="dismiss" v-model="primary">
								<i class="icon-timer"></i>
								<p>Your time Over after <b>5</b> miniute</p>
								<button @click="primary=false" class="close" type="button"><span class="bg-primary">dismiss</span></button>
							</b-alert>

							<b-alert variant="secondary" show class="alert alert-secondary inverse alert-dismissible fade show" dismiss-label="dismiss" v-model="secondary">
								<i class="icon-heart"></i>
								<p>Oh snap! Change a few things up and submit again.</p>
								<button @click="secondary=false" class="close" type="button"><span class="bg-secondary">dismiss</span></button>
							</b-alert>

							<b-alert variant="success" show class="alert alert-success inverse alert-dismissible fade show" dismiss-label="dismiss" v-model="success">
								<i class="icon-thumb-up alert-center"></i>
								<p><b> Well done! </b>You successfully read this important alert message.</p>
								<button @click="success=false" class="close" type="button"><span class="bg-success">dismiss</span></button>
							</b-alert>

							<b-alert variant="info" show class="alert alert-info inverse alert-dismissible fade show" dismiss-label="dismiss" v-model="info">
								<i class="icon-thumb-up alert-center"></i>
								<p><b>Welcome!</b> Start your day with some alerts.</p>
								<button @click="info=false" class="close" type="button"><span class="bg-info">dismiss</span></button>
							</b-alert>

							<b-alert variant="warning" show class="alert alert-warning inverse alert-dismissible fade show" dismiss-label="dismiss" v-model="warning">
								<i class="icon-bell"></i>
								<p><b> Congratulation! </b>Your Product Added in Like List</p>
								<button @click="warning=false" class="close" type="button"><span class="bg-warning">dismiss</span></button>
							</b-alert>

							<b-alert variant="danger" show class="alert alert-danger inverse alert-dismissible fade show" dismiss-label="dismiss" v-model="danger">
								<i class="icon-thumb-down"></i>
								<p>Your  <b> Perfomance </b> is down on this week</p>
								<button @click="danger=false" class="close" type="button"><span class="bg-danger">dismiss</span></button>
							</b-alert>

							<b-alert variant="light" show class="alert alert-light inverse alert-dismissible fade show" dismiss-label="dismiss" v-model="light">
								<i class="icon-alert txt-dark"></i>
								<p>You can check in on some of those fields below.</p>
								<button @click="light=false" class="close" type="button"><span class="bg-light txt-dark">dismiss</span></button>
							</b-alert>

							<b-alert variant="dark" show class="alert alert-dark inverse alert-dismissible fade show" dismiss-label="dismiss" v-model="dark">
								<i class="icon-info-alt"></i>
								<p>You can check in on some of those fields below.</p>
								<button @click="dark=false" class="close" type="button"><span class="bg-light txt-dark">dismiss</span></button>
							</b-alert>
						</div>
					</div>
				</div>

				<div class="col-sm-12">
					<div class="card">
						<div class="card-header">
							<h5>Additional content</h5><span>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</span>
						</div>
						<div class="card-body">

							<b-alert show variant="primary">
								<h4 class="alert-heading">Well done!</h4>
								<p>Aww yeah, you successfully read this important alert message.This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
								<hr/>
								<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
							</b-alert>

							<b-alert show variant="secondary">
								<h4 class="alert-heading">Well done!</h4>
								<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
								<hr/>
								<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
							</b-alert>

							<b-alert show variant="success">
								<h4 class="alert-heading">Well done!</h4>
								<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
								<hr/>
								<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
							</b-alert>

							<b-alert show variant="danger">
								<h4 class="alert-heading">Well done!</h4>
								<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
								<hr/>
								<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
							</b-alert>

							<b-alert show variant="info">
								<h4 class="alert-heading">Well done!</h4>
								<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
								<hr/>
								<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
							</b-alert>

							<b-alert show variant="light">
								<h4 class="alert-heading">Well done!</h4>
								<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
								<hr/>
								<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
							</b-alert>

							<b-alert show variant="dark">
								<h4 class="alert-heading">Well done!</h4>
								<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
								<hr/>
								<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
							</b-alert>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        primary: true,
        secondary: true,
        success: true,
        info:true,
        warning:true,
        danger:true,
        light:true,
        dark:true,
      };
    }
  };
</script>
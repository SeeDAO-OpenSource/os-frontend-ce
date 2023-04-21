<template>
  <div>
    <Breadcrumbs main="Cards" title="Basic Card"/>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
     <div class="row">
      
      <div class="col-sm-12 col-xl-6">
        <b-card header-tag="div">
          <h5 slot="header">Basic Card</h5>
          <b-card-text class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</b-card-text>
        </b-card>
      </div>

      <div class="col-sm-12 col-xl-6">
        <b-card header-tag="div">
          <h5 slot="header">Flat Card</h5>
          <b-card-text class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</b-card-text>
        </b-card>
      </div>

      <div class="col-sm-12 col-xl-6">
        <b-card header-tag="div" class="shadow-0 border">
          <h5 slot="header">Without shadow Card</h5>
          <b-card-text class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</b-card-text>
        </b-card>
      </div>

      <div class="col-sm-12 col-xl-6">
        <b-card header-tag="div">
          <h5 slot="header"> <i class="icofont icofont-truck mr-2"></i> Icon in Heading</h5>
          <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</b-card-text>
        </b-card>
      </div>

      <div class="col-sm-12 col-xl-6">
        <b-card header-tag="div">
          <div slot="header">
            <h5> Card sub Title</h5><span>Using the <a href="#">card</a> component, you can extend the default collapse behavior to create an accordion.</span>
          </div>                  
          <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</b-card-text>
        </b-card>
      </div>

      <div class="col-sm-12 col-xl-6" >
        <b-card header-tag="div" footer="Card Footer" footer-tag="h6" class="footer-tag">
          <h5 slot="header"> Card With Footer</h5>
          <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the the industry's standard dummy text ever.</b-card-text>
        </b-card>
      </div>

      <div class="col-sm-12 col-xl-6" >
        <b-card header-tag="div" footer="Card Footer" class="footer-tag" footer-tag="h6" text-variant="white" header-bg-variant="primary" body-bg-variant="primary" footer-bg-variant="primary">
          <h5 slot="header">Primary Color Card</h5>
          <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</b-card-text>
        </b-card>
      </div>

      <div class="col-sm-12 col-xl-6" >
        <b-card header-tag="div" footer="Card Footer" class="footer-tag" footer-tag="h6" text-variant="white" header-bg-variant="secondary" body-bg-variant="secondary" footer-bg-variant="secondary">
          <h5 slot="header">Secondary Color Card</h5>
          <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</b-card-text>
        </b-card>
      </div>

      <div class="col-sm-12 col-xl-6" >
        <b-card header-tag="div" footer="Card Footer" class="footer-tag" footer-tag="h6" text-variant="white" header-bg-variant="success" body-bg-variant="success" footer-bg-variant="success">
          <h5 slot="header">Success color Card</h5>
          <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</b-card-text>
        </b-card>
      </div>

      <div class="col-sm-12 col-xl-6" >
        <b-card header-tag="div" footer="Card Footer" class="footer-tag" footer-tag="h6" text-variant="dark" header-bg-variant="primary">
          <h5 slot="header">Primary Color Header</h5>
          <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</b-card-text>
        </b-card>
      </div>

      <div class="col-sm-12 col-xl-6" >
        <b-card header-tag="div" footer="Card Footer" class="footer-tag" footer-tag="h6" text-variant="white" header-text-variant="dark" body-bg-variant="primary" footer-text-variant="dark">
          <h5 slot="header">Primary Color Body</h5>
          <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</b-card-text>
        </b-card>
      </div>

      <div class="col-sm-12 col-xl-6" >
        <b-card header-tag="div" footer="Card Footer" class="footer-tag" footer-tag="h6" text-variant="white" header-text-variant="dark" body-text-variant="dark" footer-bg-variant="primary">
          <h5 slot="header">Primary Color Footer</h5>
          <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</b-card-text>
        </b-card>
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
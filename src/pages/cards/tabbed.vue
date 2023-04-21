<template>
    <div>
        <Breadcrumbs main="Cards" title="Tabbed Card"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">

                <div class="col-sm-12 col-xl-6 xl-100 box-col-12">
                    <b-card header-tag="div" no-body>
                        <h5 slot="header">Simple Tab</h5>
                        <b-card-body>
                            <b-tabs pills slot="header" class="tabbed-card">
                                <b-tab title="Home" active>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                                <b-tab title="Profile">
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                                <b-tab title="Contact">
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                            </b-tabs>
                        </b-card-body>
                    </b-card>
                </div>

                <div class="col-sm-12 col-xl-6 xl-100 box-col-12">
                    <b-card header-tag="div" no-body>

                        <h5 slot="header">Tab With Icon</h5>
                        <b-card-body>
                            <b-tabs pills slot="header" class="tabbed-card">
                                <b-tab title="Home" active>
                                    <template slot="title">
                                        <i class="fa fa-home"></i>Home
                                    </template>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                                <b-tab title="Profile">
                                    <template slot="title">
                                        <i class="fa fa-user"></i>Profile
                                    </template>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                                <b-tab title="Contact">
                                    <template slot="title">
                                        <i class="fa fa-address-book"></i>Contact
                                    </template>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                            </b-tabs>
                        </b-card-body>
                    </b-card>
                </div>

                <div class="col-sm-12 col-xl-6 xl-100 box-col-12">
                    <b-card header-tag="div" no-body>

                        <h5 slot="header">Color Tab</h5>

                        <b-card-body>
                            <b-tabs pills slot="header" class="tabbed-card">
                                <b-tab title="Home" active>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                                <b-tab title="Profile">
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                                <b-tab title="Contact">
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                            </b-tabs>
                        </b-card-body>
                    </b-card>
                </div>

                <div class="col-sm-12 col-xl-6 xl-100 box-col-12">
                    <b-card header-tag="div" no-body>

                        <h5 slot="header">Color Option</h5>

                        <b-card-body>
                            <b-tabs pills slot="header" class="tabbed-card nav-secondary">
                                <b-tab title="Home" active>
                                    <template slot="title">
                                        <i class="fa fa-home"></i>Home
                                    </template>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                                <b-tab title="Profile">
                                    <template slot="title">
                                        <i class="fa fa-user"></i>Profile
                                    </template>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                                <b-tab title="Contact">
                                    <template slot="title">
                                        <i class="fa fa-address-book"></i>Contact
                                    </template>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                            </b-tabs>
                        </b-card-body>
                    </b-card>
                </div>

                <div class="col-sm-12 col-xl-6 xl-100 box-col-12 material-tabbed-card">
                    <b-card header-tag="div" no-body>

                        <h5 slot="header">Material Tab</h5>

                        <b-card-body>
                            <b-tabs pills slot="header" class="tabbed-card border-tab nav-primary">
                                <b-tab title="Home" active>
                                    <template slot="title">
                                       Home
                                    </template>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                                <b-tab title="Profile">
                                    <template slot="title">
                                        Profile
                                    </template>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                                <b-tab title="Contact">
                                    <template slot="title">
                                        Contact
                                    </template>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                            </b-tabs>
                        </b-card-body>
                    </b-card>
                </div>

                <div class="col-sm-12 col-xl-6 xl-100 box-col-12 material-tabbed-card">
                    <b-card header-tag="div" no-body>

                        <h5 slot="header">Material Tab With Icon</h5>

                        <b-card-body>
                            <b-tabs pills slot="header" class="tabbed-card border-tab nav-primary">
                                <b-tab title="Home" active>
                                    <template slot="title">
                                        <i class="fa fa-home"></i>Home
                                    </template>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                                <b-tab title="Profile">
                                    <template slot="title">
                                        <i class="fa fa-user"></i>Profile
                                    </template>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                                <b-tab title="Contact">
                                    <template slot="title">
                                        <i class="fa fa-address-book"></i>Contact
                                    </template>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                            </b-tabs>
                        </b-card-body>
                    </b-card>
                </div>

                <div class="col-sm-12 col-xl-6 xl-100 box-col-12 material-tabbed-card">
                    <b-card header-tag="div" no-body>

                        <h5 slot="header">Material Tab With Icon</h5>

                        <b-card-body>
                            <b-tabs pills slot="header" class="tabbed-card border-tab nav-secondary">
                                <b-tab title="Home" active>
                                    <template slot="title">
                                        <i class="fa fa-home"></i>Home
                                    </template>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                                <b-tab title="Profile">
                                    <template slot="title">
                                        <i class="fa fa-user"></i>Profile
                                    </template>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                                <b-tab title="Contact">
                                    <template slot="title">
                                        <i class="fa fa-address-book"></i>Contact
                                    </template>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                            </b-tabs>
                        </b-card-body>
                    </b-card>
                </div>

                <div class="col-sm-12 col-xl-6 xl-100 box-col-12 material-tabbed-card">
                    <b-card header-tag="div" no-body>

                        <h5 slot="header">Material Tab With Icon</h5>

                        <b-card-body>
                            <b-tabs pills slot="header" class="tabbed-card border-tab nav-success">
                                <b-tab title="Home" active>
                                    <template slot="title">
                                        <i class="fa fa-home"></i>Home
                                    </template>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                                <b-tab title="Profile">
                                    <template slot="title">
                                        <i class="fa fa-user"></i>Profile
                                    </template>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                                <b-tab title="Contact">
                                    <template slot="title">
                                        <i class="fa fa-address-book"></i>Contact
                                    </template>
                                    <b-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</b-card-text>
                                </b-tab>
                            </b-tabs>
                        </b-card-body>
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
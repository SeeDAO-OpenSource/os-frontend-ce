<template>
    <div>
        <Breadcrumbs main="Bootstrap tables" title="Styling Tables"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Defult Styling</h5><span>use class <code>table table-styling</code>   inside table element</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table class="table-styling" :items="items"></b-table>
                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Table head options</h5><span>Use class<code>.table-primary</code> inside thead tr element.</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table thead-class="table-primary" :items="items"></b-table>
                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Table head options With Primary Background</h5><span>Use background classes<code>.bg-*</code>and <code>bg-primary</code>,<code>bg-secondary</code>,<code>bg-success</code>,<code>bg-danger</code> ,<code>bg-info</code>,<code>bg-warning</code>  to make custom <code>thead</code> background. You can also use Stack Admin color palette classes for background.</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table thead-class="bg-primary" :items="items"></b-table>
                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card o-hidden">
                    <div class="card-header">
                      <h5>Table Footer Styling</h5><span>Use class <code>table-info</code>,<code>table-success</code>,<code>table-success</code>,<code>table-info</code>,<code>table-danger</code>,<code>table-primary</code>,<code>table-secondary</code>,<code>table-light</code>,<code>table-active</code>and also use <code>bg-*</code> inside tfoot  element.</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table tfoot-tr-class="table-primary" :tbody-tr-class="rowClass" :items="items"></b-table>
                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card o-hidden">
                    <div class="card-header">
                      <h5>Custom Table Color</h5><span>Use class<code>table-*</code> inside table element.</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table class="table-styling table-primary" :items="items"></b-table>
                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card o-hidden">
                    <div class="card-header">
                      <h5>Custom Table Color with Hover and Stripped</h5><span>Use class<code>table-hover, table-striped table-*</code><code>table-info</code>,<code>table-success</code>,<code>table-success</code>,<code>table-info</code>,<code>table-danger</code>,<code>table-primary</code>,<code>table-secondary</code>,<code>table-light</code>,<code>table-active</code> inside table element.</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table hover striped class="table-styling table-primary" :items="items"></b-table>
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

        items: [
          { no:1, first_name:'Alexander', last_name:'Orton', username:'@mdorton' },
          { no:2, first_name:'John Deo', last_name:'Deo', username:'@johndeo' },
          { no:3, first_name:'Randy Orton', last_name:'the Bird', username:'@twitter' },
          { no:4, first_name:'Randy Mark', last_name:'Ottandy', username:'@mdothe' },
          { no:5, first_name:'Ram Jacob', last_name:'Thornton', username:'@twitter', status: 5 }
        ],

      };
    },
    methods: {
      rowClass(item) {
        if (!item) return;
        if (item.status === 5) return 'table-success';
      }
    }
  };
</script>
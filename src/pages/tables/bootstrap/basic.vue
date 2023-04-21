<template>
    <div>
        <Breadcrumbs main="Bootstrap Tables" title="Basic Tables"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Basic Table</h5><span>Use a class<code>table</code> to any table.</span>
                        </div>
                        <div class="table-responsive  mb-0">
                            <b-table striped hover :items="items"></b-table>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Inverse Table</h5><span>Use a class <code>table-inverse</code> inside table element.</span>
                        </div>
                        <div class="table-responsive  mb-0">
                          <b-table :items="items" class="table-inverse"></b-table>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Inverse Table with Primary background</h5><span>Use a class <code>.bg-info, .bg-success, .bg-warning and .bg-danger classes.</code> with light text on dark backgrounds inside table element.<br>To set the light background color use .bg-[color] class where [color] is the value of your selected color from stack color palette. So for teal color background class will be .bg-teal</span>
                        </div>
                        <div class="table-responsive  mb-0">
                            <b-table striped :items="items" class="bg-primary"></b-table>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Hoverable rows</h5><span>Use a class <code>table-hover</code> to enable a hover state on table rows within a <code>tbody</code>.</span>
                        </div>
                        <div class="table-responsive mb-0">
                            <b-table hover :items="items" ></b-table>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Contextual classes</h5><span>Use contextual classes to color table rows or individual cells. you may use Classes <code>table-primary</code>,<code>table-secondary</code>,<code>table-success</code>,<code>table-info</code>,<code>table-warning</code>,<code>table-danger</code>,<code>table-light</code>,<code>table-active</code> in<code>tr</code></span>
                        </div>
                        <div class="table-responsive mb-0">
                            <b-table :items="items2"></b-table>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Text or background utilities</h5><span>Regular table background variants are not available with the inverse table, however, you may use Classes <code>bg-dark</code>,<code>bg-warning</code>,<code>bg-success</code>,<code>bg-info</code>,<code>bg-danger</code>,<code>bg-primary</code>,<code>bg-secondary</code>,<code>bg-light</code> in<code>td</code></span>
                        </div>
                        <div class="table-responsive mb-0">
                            <b-table :items="items3" dark thead-class="thead-dark"></b-table>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Table head options</h5><span>Similar to tables and dark tables, use the modifier classes <code>.thead-dark</code>  to make <code>thead</code> appear light or dark gray.</span>
                        </div>
                        <div class="table-responsive mb-0">
                            <b-table :items="items" thead-class="thead-dark"></b-table>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Table head options</h5><span>Similar to tables and dark tables, use the modifier classes <code>.bg-*</code>and  <code>.thead-light</code> to make <code>thead</code> appear light or dark gray.</span>
                        </div>
                        <div class="table-responsive mb-0">
                            <b-table :items="items" thead-class="thead-light"></b-table>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Striped Row </h5><span>Use <code>.table-striped</code> to add zebra-striping to any table row within the <code></code>. This styling doesn't work in IE8 and below as :nth-child CSS selector isn't supported.</span>
                        </div>
                        <div class="table-responsive mb-0">
                            <b-table striped :items="items"></b-table>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Caption</h5><span>A <code>&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.</span>
                        </div>
                        <div class="table-responsive mb-0">
                            <b-table :items="items">
                                <template slot="table-caption">List of users</template>
                            </b-table>
                        </div>

                    </div>
                </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Responsive Tables</h5><span>A <code>&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.</span>
                        </div>
                        <div class="table-responsive mb-0">
                            <b-table :items="items4"></b-table>
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
          { no:1, first_name:'Alexander', last_name:'Orton', username:'@mdorton', role:'Admin', country:'USA' },
          { no:2, first_name:'John Deo', last_name:'Deo', username:'@johndeo', role:'User', country:'USA' },
          { no:3, first_name:'Randy Orton', last_name:'the Bird', username:'@twitter', role:'admin', country:'UK' },
          { no:4, first_name:'Randy Mark', last_name:'Ottandy', username:'@mdothe', role:'user', country:'AUS' },
          { no:5, first_name:'Ram Jacob', last_name:'Thornton', username:'@twitter', role:'admin', country:'IND' }
        ],

        items2: [
          { class:'table-primary', heading:'Cell', _rowVariant: 'primary' },
          { class:'table-secondary', heading:'Cell', _rowVariant: 'secondary' },
          { class:'table-success', heading:'Cell', _rowVariant: 'success' },
          { class:'table-info', heading:'Cell', _rowVariant: 'info' },
          { class:'table-warning', heading:'Cell', _rowVariant: 'warning' },
          { class:'table-danger', heading:'Cell', _rowVariant: 'danger' },
          { class:'table-light', heading:'Cell', _rowVariant: 'light' },
          { class:'table-active', heading:'Cell', _rowVariant: 'active' },
        ],

        items3: [
          { class:'bg-primary', heading:'Cell', _rowVariant: 'primary' },
          { class:'bg-secondary', heading:'Cell', _rowVariant: 'secondary' },
          { class:'bg-success', heading:'Cell', _rowVariant: 'success' },
          { class:'bg-info', heading:'Cell', _rowVariant: 'info' },
          { class:'bg-warning', heading:'Cell', _rowVariant: 'warning' },
          { class:'bg-danger', heading:'Cell', _rowVariant: 'danger' },
          { class:'bg-light', heading:'Cell', _rowVariant: 'light' },
        ],

        items4: [
          {
            'heading 1': 'table cell',
            'heading 2': 'table cell',
            'heading 3': 'table cell',
            'heading 4': 'table cell',
            'heading 5': 'table cell',
            'heading 6': 'table cell',
            'heading 7': 'table cell',
            'heading 8': 'table cell',
            'heading 9': 'table cell',
            'heading 10': 'table cell'
          },
          {
            'heading 1': 'table cell',
            'heading 2': 'table cell',
            'heading 3': 'table cell',
            'heading 4': 'table cell',
            'heading 5': 'table cell',
            'heading 6': 'table cell',
            'heading 7': 'table cell',
            'heading 8': 'table cell',
            'heading 9': 'table cell',
            'heading 10': 'table cell'
          },
          {
            'heading 1': 'table cell',
            'heading 2': 'table cell',
            'heading 3': 'table cell',
            'heading 4': 'table cell',
            'heading 5': 'table cell',
            'heading 6': 'table cell',
            'heading 7': 'table cell',
            'heading 8': 'table cell',
            'heading 9': 'table cell',
            'heading 10': 'table cell'
          }
        ]

      };
    }
  };
</script>
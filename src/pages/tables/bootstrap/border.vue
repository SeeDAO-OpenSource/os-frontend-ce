<template>
    <div>
        <Breadcrumbs main="Bootstrap Tables" title="Border Tables"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Horizontal Borders</h5><span>Example of <code>horizontal</code> table borders. This is a default table border style attached to <code> .table</code> class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using<code> .table-border-horizontal</code>class added to the table with <code>.table</code>class.</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table class="table-border-horizontal" :items="items"></b-table>
                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Vertical Borders</h5><span>Example of <code>Vertical </code> table borders. This is a default table border style attached to <code> .table</code> class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using<code> .table-border-vertical</code>class added to the table with <code>.table</code>class.</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table class="table-border-vertical" :items="items"></b-table>
                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Both Bordeds</h5><span>Example of <code>horizontal</code> table borders. This is a default table border style attached to <code> .table</code> class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using<code> .table-bordered</code>class added to the table with <code>.table</code>class.</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table class="table-bordered" :items="items"></b-table>
                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Borderless Table</h5><span>Example of <code>horizontal</code> table borders. This is a default table border style attached to <code> .table</code> class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using<code> .table-bordernone</code>class added to the table with <code>.table</code>class.</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table class="table-bordernone" :items="items"></b-table>
                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Default Table Border</h5><span>Example of <code>Default Table Border</code>.This is a default table border style attached to <code>.table</code> class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using<code> .table</code>class added to the table with <code>.table</code>class.</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table :items="items"></b-table>
                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Solid Border</h5><span>Example of a <code>solid</code> border inside table <code>thead</code>. This border inherits all styling options from the default border style, the only difference is it has <code>2px</code> width. Sometimes it could be useful for visual separation and addition highlight. To use this border add <code>.border-solid</code> to the table head row. This border style works only with row borders.</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table :items="items" thead-tr-class="border-solid"></b-table>
                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Double Border</h5><span>Example of a <code>double</code> border inside table head. This border has <code>3px</code> width, <code>double</code> style and inherits all styling options from the default border style. Visually it displays table <code>head</code> and <code>body</code> as 2 separated table areas. To use this border add <code>.border-double</code> to the table head row.</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table :items="items" thead-tr-class="double" tbody-tr-class="double"></b-table>
                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Dotted Border</h5><span>Example of a <code>dotted</code> border inside table head. This border has <code>3px</code> width, <code>dotted</code> style and inherits all styling options from the default border style. Visually it displays table <code>head</code> and <code>body</code> as 2 separated table areas. To use this border add <code>.border-dotted</code> to the table head row.</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table :items="items" thead-tr-class="dotted" tbody-tr-class="dotted"></b-table>
                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Dashed Border</h5><span>Example of a <code>dashed</code> border inside table head. This border has <code>3px</code> width, <code>dashed</code> style and inherits all styling options from the default border style. Visually it displays table <code>head</code> and <code>body</code> as 2 separated table areas. To use this border add <code>.border-dashed</code> to the table head row.</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table :items="items" thead-tr-class="dashed" tbody-tr-class="dashed"></b-table>
                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Border Bottom Color </h5><span>EExample of a table head border with<code>custom </code>  color. According to the custom color system options, you can set any of predefined colors by adding  <code>.border-bottom-*</code> class to the table head row. This technique works with all border styles demonstrated above.</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table :items="items2" thead-tr-class="border-bottom-primary" :tbody-tr-class="rowClass"></b-table>
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
          { no:5, first_name:'Ram Jacob', last_name:'Thornton', username:'@twitter' }
        ],

        items2: [
          { no:1, first_name:'Alexander', last_name:'Orton', username:'@mdorton', status: 1 },
          { no:2, first_name:'John Deo', last_name:'Deo', username:'@johndeo', status: 2 },
          { no:3, first_name:'Randy Orton', last_name:'the Bird', username:'@twitter', status: 3 },
          { no:4, first_name:'Randy Mark', last_name:'Ottandy', username:'@mdothe', status: 4 },
          { no:5, first_name:'Ram Jacob', last_name:'Thornton', username:'@twitter', status: 5 },
          { no:6, first_name:'Jacob', last_name:'Thornton', username:'@fat', status: 6 },
        ],

      };
    },
    methods: {
      rowClass(item) {
        if (!item) return;
        if (item.status === 1) return 'border-bottom-secondary';
        if (item.status === 2) return 'border-bottom-success';
        if (item.status === 3) return 'border-bottom-info';
        if (item.status === 4) return 'border-bottom-warning';
        if (item.status === 5) return 'border-bottom-danger';
      }
    }
  };
</script>
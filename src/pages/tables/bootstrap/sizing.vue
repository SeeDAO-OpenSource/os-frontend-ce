<template>
    <div>
        <Breadcrumbs main="Bootstrap Tables" title="Sizing Tables"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Extra Large Tables</h5><span>Example of Extra large table, Add <code>.table-xl</code> class to the <code>.table</code> to create a table with extra large spacing. Extra larger table all rows have <code>1.25rem</code> height.</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table striped hover :items="items" class="table-xl"></b-table>
                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Large Table</h5><span>Example of large table, Add <code>.table-lg</code>class to the <code>.table</code>to create a table with large spacing. larger table all rows have <code>0.9rem</code> height.</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table striped hover :items="items" class="table-lg"></b-table>
                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Default Table</h5><span>Example of large table, Add <code>.table-de</code>class to the <code>.table</code>to create a table with large spacing. larger table all rows have <code>0.75rem</code> height.</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table striped hover :items="items" class="table-de"></b-table>
                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Small table</h5><span>Example of small table, Add <code>.table-sm</code> class to the <code>.table</code> to create a table with small spacing. Small table all rows have <code>0.3rem</code> height</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table striped hover :items="items" class="table-sm"></b-table>
                    </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Extra Small table</h5><span>Example of small table, Add <code>.table-xs</code> class to the <code>.table</code> to create a table with extra small spacing. Small table all rows have <code>1.5rem</code> height</span>
                    </div>
                    <div class="table-responsive mb-0">
                        <b-table striped hover :items="items" class="table-xs"></b-table>
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
        ],

      };
    }
  };
</script>
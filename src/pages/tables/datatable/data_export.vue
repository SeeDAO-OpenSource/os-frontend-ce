<template>
    <div>
        <Breadcrumbs main="Data Tables" title="Data Export"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">


              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5>Zero Configuration</h5><span>DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function:<code>$().DataTable();</code>.</span><span>Searching, ordering and paging goodness will be immediately added to the table, as shown in this example.</span>
                    </div>

                    <div class="card-body">
                        <b-row>
                            <b-col xl="6">

                                <b-input-group class="datatable-btn">
                                    <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
                                    <b-input-group-append>
                                        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                                    </b-input-group-append>
                                </b-input-group>

                            </b-col>

                            <b-col xl="6">
                                <b-form-group label-cols="2" label="Per page" class="mb-0 datatable-select">
                                    <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
                                </b-form-group>
                            </b-col>
                        </b-row>
                      <div class="table-responsive datatable-vue">
                        <b-table
                          show-empty
                          stacked="md"
                          :items="items"
                          :fields="tablefields"
                          :filter="filter"
                          :current-page="currentPage"
                          :per-page="perPage"
                          @filtered="onFiltered"
                        >
                        </b-table>
                      </div>

                      <b-col md="6" class="my-1 p-0">
                        <b-pagination
                          v-model="currentPage"
                          :total-rows="totalRows"
                          :per-page="perPage"
                          class="my-0"
                        ></b-pagination>
                      </b-col>


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

        tablefields: [
          { key: 'name', label: 'name', sortable: true, },
          { key: 'position', label: 'position', sortable: true, },
          { key: 'office', label: 'office', sortable: true, },
          { key: 'startdate', label: 'startdate', sortable: true, },
          { key: 'salary', label: 'salary', sortable: true, },
          { key: 'age', label: 'age', sortable: true, },
        ],

        items: [
          { name:'Tiger Nixon',position:'System Architect',office:'Edinburgh',age:61,startdate:'2011/04/25',salary:'$320,800', },
          { name:'Garrett Winters',position:'Accountant',office:'Tokyo',age:63,startdate:'2011/07/25',salary:'$170,750', },
          { name:'Ashton Cox',position:'Junior Technical Author',office:'San Francisco',age:66,startdate:'2009/01/12',salary:'$86,000', },
          { name:'Cedric Kelly',position:'Senior Javascript Developer',office:'Edinburgh',age:22,startdate:'2012/03/29',salary:'$433,060', },
          { name:'Airi Satou',position:'Accountant',office:'Tokyo',age:33,startdate:'2008/11/28',salary:'$162,700', },
          { name:'Brielle Williamson',position:'Integration Specialist',office:'New York',age:61,startdate:'2012/12/02',salary:'$372,000', },
          { name:'Herrod Chandler',position:'Sales Assistant',office:'San Francisco',age:59,startdate:'2012/08/06',salary:'$137,500', },
          { name:'Rhona Davidson',position:'Integration Specialist',office:'Tokyo',age:55,startdate:'2010/10/14',salary:'$327,900', },
          { name:'Colleen Hurst',position:'Javascript Developer',office:'San Francisco',age:39,startdate:'2009/09/15',salary:'$205,500', },
          { name:'Sonya Frost',position:'Software Engineer',office:'Edinburgh',age:23,startdate:'2008/12/13',salary:'$103,600', },
          { name:'Jena Gaines',position:'Office',age:33,office:'London',startdate:'2008/12/19',salary:'$90,560', },
          { name:'Quinn Flynn',position:'Support Lead',office:'Edinburgh',age:22,startdate:'2013/03/03',salary:'$342,000', },
          { name:'Charde Marshall',position:'Regional Director',office:'San Francisco',age:36,startdate:'2008/10/16',salary:'$470,600', },
          { name:'Haley Kennedy',position:'Senior Marketing Designer',office:'London',age:43,startdate:'2012/12/18',salary:'$313,500', },
          { name:'Tatyana Fitzpatrick',position:'Regional Director',office:'London',age:19,startdate:'2010/03/17',salary:'$385,750', },
          { name:'Michael Silva',position:'Marketing Designer',office:'London',age:66,startdate:'2012/11/27',salary:'$198,500', },
          { name:'Paul Byrd',position:'Chief FinanciOfficer (CFO)',office:'New York',age:64,startdate:'2010/06/09',salary:'$725,000', },
          { name:'Gloria Little',position:'Systems Administrator',office:'New York',age:59,startdate:'2009/04/10',salary:'$237,500', },
          { name:'Bradley Greer',position:'Software Engineer',office:'London',age:41,startdate:'2012/10/13',salary:'$132,000', },
          { name:'Dai Rios',position:'Personnel Lead',office:'Edinburgh',age:35,startdate:'2012/09/26',salary:'$217,500', },
          { name:'Jenette Caldwell',position:'Development Lead',office:'New York',age:30,startdate:'2011/09/03',salary:'$345,000', },
          { name:'Yuri Berry',position:'Chief MarketiOfficer (CMO)',office:'New York',age:40,startdate:'2009/06/25',salary:'$675,000', },
          { name:'Caesar Vance',position:'Pre-Sales Support',office:'New York',age:21,startdate:'2011/12/12',salary:'$106,450', },
          { name:'Doris Wilder',position:'Sales Assistant',office:'Sidney',age:23,startdate:'2010/09/20',salary:'$85,600', },
          { name:'Angelica Ramos',position:'Chief ExecutiOfficer (CEO)',office:'London',age:47,startdate:'2009/10/09',salary:'$1,200,000', },
          { name:'Gavin Joyce',position:'Developer',office:'Edinburgh',age:42,startdate:'2010/12/22',salary:'$92,575', },
          { name:'Jennifer Chang',position:'Regional Director',office:'Singapore',age:28,startdate:'2010/11/14',salary:'$357,650', },
          { name:'Brenden Wagner',position:'Software Engineer',office:'San Francisco',age:28,startdate:'2011/06/07',salary:'$206,850', },
          { name:'Fiona Green',position:'Chief OperatiOfficer (COO)',office:'San Francisco',age:48,startdate:'2010/03/11',salary:'$850,000', },
          { name:'Shou Itou',position:'Regional Marketing',office:'Tokyo',age:20,startdate:'2011/08/14',salary:'$163,000', },
          { name:'Michelle House',position:'Integration Specialist',office:'Sidney',age:37,startdate:'2011/06/02',salary:'$95,400', },
          { name:'Suki Burks',position:'Developer',office:'London',age:53,startdate:'2009/10/22',salary:'$114,500', },
          { name:'Prescott Bartlett',position:'Technical Author',office:'London',age:27,startdate:'2011/05/07',salary:'$145,000', },
          { name:'Gavin Cortez',position:'Team Leader',office:'San Francisco',age:22,startdate:'2008/10/26',salary:'$235,500', },
          { name:'Martena Mccray',position:'Post-Sales support',office:'Edinburgh',age:46,startdate:'2011/03/09',salary:'$324,050', },
          { name:'Unity Butler',position:'Marketing Designer',office:'San Francisco',age:47,startdate:'2009/12/09',salary:'$85,675', },
          { name:'Howard Hatfield',position:'Office ager',office:'San Francisco',age:51,startdate:'2008/12/16',salary:'$164,500', },
          { name:'Hope Fuentes',position:'Secretary',office:'San Francisco',age:41,startdate:'2010/02/12',salary:'$109,850', },
          { name:'Vivian Harrell',position:'Financial Controller',office:'San Francisco',age:62,startdate:'2009/02/14',salary:'$452,500', },
          { name:'Timothy Mooney', position:'Office ager',office:'London',age:37,startdate:'2008/12/11',salary:'$136,200', },
          { name:'Jackson Bradshaw',position:'Director',office:'New York',age:65,startdate:'2008/09/26',salary:'$645,750', },
          { name:'Olivia Liang',position:'Support Engineer',office:'Singapore',age:64,startdate:'2011/02/03',salary:'$234,500', },
          { name:'Bruno Nash',position:'Software Engineer',office:'London',age:38,startdate:'2011/05/03',salary:'$163,500', },
          { name:'Sakura Yamamoto',position:'Support Engineer',office:'Tokyo',age:37,startdate:'2009/08/19',salary:'$139,575', },
          { name:'Thor Walton',position:'Developer',office:'New York',age:61,startdate:'2013/08/11',salary:'$98,540', },
          { name:'Finn Camacho',position:'Support Engineer',office:'San Francisco',age:47,startdate:'2009/07/07',salary:'$87,500', },
          { name:'Serge Baldwin',position:'Data Coordinator',office:'Singapore',age:64,startdate:'2012/04/09',salary:'$138,575', },
          { name:'Zenaida Frank',position:'Software Engineer',office:'New York',age:63,startdate:'2010/01/04',salary:'$125,250', },
          { name:'Zorita Serrano',position:'Software Engineer',office:'San Francisco',age:56,startdate:'2012/06/01',salary:'$115,000', },
          { name:'Jennifer Acosta',position:'Junior Javascript Developer',office:'Edinburgh',age:43,startdate:'2013/02/01',salary:'$75,650', },
          { name:'Cara Stevens',position:'Sales Assistant',office:'New York',age:46,startdate:'2011/12/06',salary:'$145,600', },
          { name:'Hermione Butler',position:'Regional Director',office:'London',age:47,startdate:'2011/03/21',salary:'$356,250', },
          { name:'Lael Greer',position:'Systems Administrator',office:'London',age:21,startdate:'2009/02/27',salary:'$103,500', },
          { name:'Jonas Alexander',position:'Developer',office:'San Francisco',age:30,startdate:'2010/07/14',salary:'$86,500', },
          { name:'Shad Decker',position:'Regional Director',office:'Edinburgh',age:51,startdate:'2008/11/13',salary:'$183,000', },
          { name:'Michael Bruce',position:'Javascript Developer',office:'Singapore',age:29,startdate:'2011/06/27',salary:'$183,000', },
          { name:'Donna Snider',position:'Customer Support',office:'New York',age:27,startdate:'2011/01/25',salary:'$112,000', }
        ],

        filter: null,

        totalRows: 1,
        currentPage: 1,
        perPage: 10,
        pageOptions: [5, 10, 15],
      };
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.tablefields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key };
          });
      }
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length;
    },
    methods: {
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length;
        this.currentPage = 1;
      }
    }
  };
</script>
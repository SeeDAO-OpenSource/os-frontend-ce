<template>
	<div>
		<Breadcrumbs main="Tables" title="VueJs Smart Table"/>
		<!-- Container-fluid starts-->
		<div class="container-fluid">
			<div class="row">

				<div class="col-md-12">
					<div class="card">
						<div class="card-header">
							<h5 class="card-title">Basic</h5>
						</div>
						<div class="card-body">
							<div class="table-responsive datatable-vue m-0 vue-smart">
								<v-table
										:data="users.data" class="table"
										:currentPage.sync="basic.currentPage"
										:pageSize="10"
										@totalPagesChanged="basic.totalPages = $event"
								>
									<thead slot="head">
									<v-th sortKey="name">Name</v-th>
									<v-th sortKey="position">Position</v-th>
									<v-th sortKey="office">Office</v-th>
									<v-th sortKey="age">Age</v-th>
									<v-th sortKey="startdate">Start date</v-th>
									<v-th sortKey="salary">Salary</v-th>
									</thead>
									<tbody slot="body" slot-scope="{displayData}">
									<tr v-for="row in displayData" :key="row.id">
										<td>{{ row.name }}</td>
										<td>{{ row.position }}</td>
										<td>{{ row.office }}</td>
										<td>{{ row.age }}</td>
										<td>{{ row.startdate }}</td>
										<td>{{ row.salary }}</td>
									</tr>
									</tbody>
								</v-table>

								<smart-pagination
										:currentPage.sync="basic.currentPage"
										:totalPages="basic.totalPages"
								/>
							</div>
						</div>
				</div>
			</div>

				<div class="col-md-12">
					<div class="card">
						<div class="card-header">
							<h5 class="card-title">Filter</h5>
						</div>
						<div class="card-body">
							<div class="datatable-vue m-0">

							<div class="row filter-smart">
								<div class="col-sm-2">
									<input class="form-control" v-model="filters.name.value" placeholder="Name"/>
								</div>
								<div class="col-sm-2">
									<input class="form-control" v-model="filters.position.value" placeholder="Position" />
								</div>
								<div class="col-sm-2">
									<input class="form-control" v-model="filters.office.value" placeholder="Office" />
								</div>
								<div class="col-sm-2">
									<input class="form-control" v-model="filters.age.value" placeholder="Age" />
								</div>
								<div class="col-sm-2">
									<input class="form-control" v-model="filters.startdate.value" placeholder="Start Date" />
								</div>
								<div class="col-sm-2">
									<input class="form-control" v-model="filters.salary.value" placeholder="Salary" />
								</div>
							</div>
							<div class="table-responsive vue-smart">

							<v-table
							:data="users.data" class="table"
							:currentPage.sync="filter.currentPage"
							:pageSize="10"
							@totalPagesChanged="filter.totalPages = $event"
							:filters="filters"
							>

							<thead slot="head">
								<v-th sortKey="name">Name</v-th>
								<v-th sortKey="position">Position</v-th>
								<v-th sortKey="office">Office</v-th>
								<v-th sortKey="age">Age</v-th>
								<v-th sortKey="startdate">Start date</v-th>
								<v-th sortKey="salary">Salary</v-th>
							</thead>
							<tbody slot="body" slot-scope="{displayData}">
								<tr v-for="row in displayData" :key="row.id">
									<td>{{ row.name }}</td>
									<td>{{ row.position }}</td>
									<td>{{ row.office }}</td>
									<td>{{ row.age }}</td>
									<td>{{ row.startdate }}</td>
									<td>{{ row.salary }}</td>
								</tr>
							</tbody>
						</v-table>
						</div>

						<smart-pagination
						:currentPage.sync="filter.currentPage"
						:totalPages="filter.totalPages"
						/>
					</div>
						</div>
				</div>
			</div>

				<div class="col-md-12">
				<div class="card">
					<div class="card-header">
						<h5 class="card-title">Age Filter</h5>
					</div>
					<div class="card-body">

						<div class="row age-filter">
							<div class="col-sm-6">
								<b-input-group class="datatable-label">
									<label class="mr-2">Min Age: </label>
									<b-input-group-prepend>
										<b-button class="btn-square bootstrap-touchspin-down" type="button" @click="subMin" variant="primary"><i class="fa fa-minus"></i></b-button>
									</b-input-group-prepend>
									<b-form-input class="touchspin" type="text" v-model="agefilters.age.value.min"></b-form-input>
									<b-input-group-append>
										<b-button class="btn-square bootstrap-touchspin-down" type="button" @click="addMin" variant="primary"><i class="fa fa-plus"></i></b-button>
									</b-input-group-append>
								</b-input-group>
							</div>
							<div class="col-sm-6">
								<b-input-group class="datatable-label pull-right mb-0">
									<label class="mr-2">Max Age: </label>
									<b-input-group-prepend>
										<b-button class="btn-square bootstrap-touchspin-down" type="button" @click="subMax" variant="primary"><i class="fa fa-minus"></i></b-button>
									</b-input-group-prepend>
									<b-form-input class="touchspin" type="text" v-model="agefilters.age.value.max"></b-form-input>
									<b-input-group-append>
										<b-button class="btn-square bootstrap-touchspin-down" type="button" @click="addMax" variant="primary"><i class="fa fa-plus"></i></b-button>
									</b-input-group-append>
								</b-input-group>
							</div>

						</div>
						<div class="table-responsive datatable-vue mb-0 vue-smart">
							<v-table
									:data="users.data" class="table"
									:currentPage.sync="agefilter.currentPage"
									:pageSize="10"
									@totalPagesChanged="agefilter.totalPages = $event"
									:filters="agefilters"
							>


								<thead slot="head">
								<v-th sortKey="name">Name</v-th>
								<v-th sortKey="position">Position</v-th>
								<v-th sortKey="office">Office</v-th>
								<v-th sortKey="age">Age</v-th>
								<v-th sortKey="startdate">Start date</v-th>
								<v-th sortKey="salary">Salary</v-th>
								</thead>
								<tbody slot="body" slot-scope="{displayData}">
								<tr v-for="row in displayData" :key="row.id">
									<td>{{ row.name }}</td>
									<td>{{ row.position }}</td>
									<td>{{ row.office }}</td>
									<td>{{ row.age }}</td>
									<td>{{ row.startdate }}</td>
									<td>{{ row.salary }}</td>
								</tr>
								</tbody>
							</v-table>
							<smart-pagination
									:currentPage.sync="agefilter.currentPage"
									:totalPages="agefilter.totalPages"
							/>
						</div>

				</div>
					</div>
			</div>
				<div class="col-md-12">
						<div class="card">
							<div class="card-header">
								<h5 class="card-title">Row Select</h5>
							</div>
							<div class="card-body">
								<div class="table-responsive datatable-vue m-0 vue-smart">
									<v-table
											:data="users.data" class="table"
											:currentPage.sync="selectrow.currentPage"
											:pageSize="10"
											@totalPagesChanged="selectrow.totalPages = $event"
											selectionMode="multiple"
											selectedClass="table-primary"
											@selectionChanged="selectedRows = $event"
									>

										<thead slot="head">
										<v-th sortKey="name">Name</v-th>
										<v-th sortKey="position">Position</v-th>
										<v-th sortKey="office">Office</v-th>
										<v-th sortKey="age">Age</v-th>
										<v-th sortKey="startdate">Start date</v-th>
										<v-th sortKey="salary">Salary</v-th>
										</thead>
										<tbody slot="body" slot-scope="{displayData}">
										<v-tr
												v-for="row in displayData"
												:key="row.id"
												:row="row"
										>
											<td>{{ row.name }}</td>
											<td>{{ row.position }}</td>
											<td>{{ row.office }}</td>
											<td>{{ row.age }}</td>
											<td>{{ row.startdate }}</td>
											<td>{{ row.salary }}</td>
										</v-tr>
										</tbody>
									</v-table>

									<smart-pagination
											:currentPage.sync="selectrow.currentPage"
											:totalPages="selectrow.totalPages"
									/>
								</div>
							</div>
						</div>
					</div>
	</div>


</div>
    </div>
<!-- Container-fluid Ends-->
</template>

<script>
  import users from '../../../data/users';

  export default {
    data(){
      return{
        users,
			
        basic:{
          currentPage: 1,
          totalPages: 0,
        },

        filter:{
          currentPage: 1,
          totalPages: 0,
        },

        agefilter:{
          currentPage: 1,
          totalPages: 0,
        },

        selectrow:{
          currentPage: 1,
          totalPages: 0,
        },

        selectedRows: [],

        filters: {
          name: { value: '', keys: ['name'] },
          position: { value: '', keys: ['position'] },
          office: { value: '', keys: ['office'] },
          age: { value: '', keys: ['age'] },
          startdate: { value: '', keys: ['startdate'] },
          salary: { value: '', keys: ['salary'] },
        },

        agefilters:{
          age: { value: { min: 19, max: 22 }, custom: this.ageFilter }
        }
      };
    },
    methods:{
      addMin:function(){
        if(this.agefilters.age.value.min<this.agefilters.age.value.max) {
          this.agefilters.age.value.min++;
        }
      },
      subMin:function(){
        if(this.agefilters.age.value.min>0) {
          this.agefilters.age.value.min--;
        }
      },
      addMax:function(){
        if(this.agefilters.age.value.max<99) {
          this.agefilters.age.value.max++;
        }
      },
      subMax:function(){
        if(this.agefilters.age.value.max>this.agefilters.age.value.min) {
          this.agefilters.age.value.max--;
        }
      },
      ageFilter (filterValue, row) {
        return row.age >= filterValue.min && row.age <= filterValue.max;
      }
    }
  };
</script>

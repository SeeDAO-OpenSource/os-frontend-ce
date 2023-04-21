<template>
    <div>
        <Breadcrumbs main="Users" title="Edit Profile"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="edit-profile">
              <div class="row">
                <div class="col-xl-4">
                  <div class="card">
                    <div class="card-header">
                      <h4 class="card-title mb-0">My Profile</h4>
                      <div class="card-options"><a class="card-options-collapse" href="#" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a><a class="card-options-remove" href="#" data-toggle="card-remove"><i class="fe fe-x"></i></a></div>
                    </div>
                    <div class="card-body">
                      <form>
                        <div class="row mb-2">
                          <div class="col-auto"><img class="img-70 rounded-circle" alt="" src="../../assets/images/user/7.jpg"></div>
                          <div class="col">
                            <h3 class="mb-1">MARK JECNO</h3>
                            <p class="mb-4">DESIGNER</p>
                          </div>
                        </div>
                        <div class="form-group">
                          <h6 class="form-label">Bio</h6>
                          <textarea class="form-control" rows="5">On the other hand, we denounce with righteous indignation</textarea>
                        </div>
                        <div class="form-group">
                          <label class="form-label">Email-Address</label>
                          <input class="form-control" placeholder="your-email@domain.com">
                        </div>
                        <div class="form-group">
                          <label class="form-label">Password</label>
                          <input class="form-control" type="password" value="password">
                        </div>
                        <div class="form-group">
                          <label class="form-label">Website</label>
                          <input class="form-control" placeholder="http://Uplor .com">
                        </div>
                        <div class="form-footer">
                          <button class="btn btn-primary btn-block">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="col-xl-8">
                  <form class="card">
                    <div class="card-header">
                      <h4 class="card-title mb-0">Edit Profile</h4>
                      <div class="card-options"><a class="card-options-collapse" href="#" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a><a class="card-options-remove" href="#" data-toggle="card-remove"><i class="fe fe-x"></i></a></div>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-5">
                          <div class="form-group">
                            <label class="form-label">Company</label>
                            <input class="form-control" type="text" placeholder="Company">
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="form-group">
                            <label class="form-label">Username</label>
                            <input class="form-control" type="text" placeholder="Username">
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                          <div class="form-group">
                            <label class="form-label">Email address</label>
                            <input class="form-control" type="email" placeholder="Email">
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-6">
                          <div class="form-group">
                            <label class="form-label">First Name</label>
                            <input class="form-control" type="text" placeholder="Company">
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-6">
                          <div class="form-group">
                            <label class="form-label">Last Name</label>
                            <input class="form-control" type="text" placeholder="Last Name">
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="form-label">Address</label>
                            <input class="form-control" type="text" placeholder="Home Address">
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                          <div class="form-group">
                            <label class="form-label">City</label>
                            <input class="form-control" type="text" placeholder="City">
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="form-group">
                            <label class="form-label">Postal Code</label>
                            <input class="form-control" type="number" placeholder="ZIP Code">
                          </div>
                        </div>
                        <div class="col-md-5">
                          <div class="form-group">
                            <label class="form-label">Country</label>
                            <select class="form-control btn-square">
                              <option value="0">--Select--</option>
                              <option value="1">Germany</option>
                              <option value="2">Canada</option>
                              <option value="3">Usa</option>
                              <option value="4">Aus</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group mb-0">
                            <label class="form-label">About Me</label>
                            <textarea class="form-control" rows="5" placeholder="Enter About your description"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer text-right">
                      <button class="btn btn-primary" type="submit">Update Profile</button>
                    </div>
                  </form>
                </div>
                <div class="col-md-12">
                  <div class="card">
                    <div class="card-header">
                      <h4 class="card-title mb-0">Add projects And Upload</h4>
                      <div class="card-options"><a class="card-options-collapse" href="#" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a><a class="card-options-remove" href="#" data-toggle="card-remove"><i class="fe fe-x"></i></a></div>
                    </div>
                    <div class="table-responsive mb-0">
                      <table class="table card-table table-vcenter text-nowrap">
                        <thead>
                          <tr>
                            <th>Project Name</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><a class="text-inherit" href="#">Untrammelled prevents </a></td>
                            <td>28 May 2018</td>
                            <td><span class="status-icon bg-success"></span> Completed</td>
                            <td>$56,908</td>
                            <td class="text-right"><a class="icon" href="javascript:void(0)"></a><a class="btn btn-primary btn-sm" href="javascript:void(0)"><i class="fa fa-pencil"></i> Edit</a><a class="icon" href="javascript:void(0)"></a><a class="btn btn-transparent btn-sm" href="javascript:void(0)"><i class="fa fa-link"></i> Update</a><a class="icon" href="javascript:void(0)"></a><a class="btn btn-danger btn-sm" href="javascript:void(0)"><i class="fa fa-trash"></i> Delete</a></td>
                          </tr>
                          <tr>
                            <td><a class="text-inherit" href="#">Untrammelled prevents</a></td>
                            <td>12 June 2018</td>
                            <td><span class="status-icon bg-danger"></span> On going</td>
                            <td>$45,087</td>
                            <td class="text-right"><a class="icon" href="javascript:void(0)"></a><a class="btn btn-primary btn-sm" href="javascript:void(0)"><i class="fa fa-pencil"></i> Edit</a><a class="icon" href="javascript:void(0)"></a><a class="btn btn-transparent btn-sm" href="javascript:void(0)"><i class="fa fa-link"></i> Update</a><a class="icon" href="javascript:void(0)"></a><a class="btn btn-danger btn-sm" href="javascript:void(0)"><i class="fa fa-trash"></i> Delete</a></td>
                          </tr>
                          <tr>
                            <td><a class="text-inherit" href="#">Untrammelled prevents</a></td>
                            <td>12 July 2018</td>
                            <td><span class="status-icon bg-warning"></span> Pending</td>
                            <td>$60,123</td>
                            <td class="text-right"><a class="icon" href="javascript:void(0)"></a><a class="btn btn-primary btn-sm" href="javascript:void(0)"><i class="fa fa-pencil"></i> Edit</a><a class="icon" href="javascript:void(0)"></a><a class="btn btn-transparent btn-sm" href="javascript:void(0)"><i class="fa fa-link"></i> Update</a><a class="icon" href="javascript:void(0)"></a><a class="btn btn-danger btn-sm" href="javascript:void(0)"><i class="fa fa-trash"></i> Delete</a></td>
                          </tr>
                          <tr>
                            <td><a class="text-inherit" href="#">Untrammelled prevents</a></td>
                            <td>14 June 2018</td>
                            <td><span class="status-icon bg-warning"></span> Pending</td>
                            <td>$70,435</td>
                            <td class="text-right"><a class="icon" href="javascript:void(0)"></a><a class="btn btn-primary btn-sm" href="javascript:void(0)"><i class="fa fa-pencil"></i> Edit</a><a class="icon" href="javascript:void(0)"></a><a class="btn btn-transparent btn-sm" href="javascript:void(0)"><i class="fa fa-link"></i> Update</a><a class="icon" href="javascript:void(0)"></a><a class="btn btn-danger btn-sm" href="javascript:void(0)"><i class="fa fa-trash"></i> Delete</a></td>
                          </tr>
                          <tr>
                            <td><a class="text-inherit" href="#">Untrammelled prevents</a></td>
                            <td>25 June 2018</td>
                            <td><span class="status-icon bg-success"></span> Completed</td>
                            <td>$15,987</td>
                            <td class="text-right"><a class="icon" href="javascript:void(0)"></a><a class="btn btn-primary btn-sm" href="javascript:void(0)"><i class="fa fa-pencil"></i> Edit</a><a class="icon" href="javascript:void(0)"></a><a class="btn btn-transparent btn-sm" href="javascript:void(0)"><i class="fa fa-link"></i> Update</a><a class="icon" href="javascript:void(0)"></a><a class="btn btn-danger btn-sm" href="javascript:void(0)"><i class="fa fa-trash"></i> Delete</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
  };
</script>
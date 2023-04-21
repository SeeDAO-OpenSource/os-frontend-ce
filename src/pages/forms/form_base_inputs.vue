<template>
    <div>
        <Breadcrumbs main="Form Controls" title="Base Inputs"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">

                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Basic form control</h5>
                        </div>
                        <form class="form theme-form">
                            <div class="card-body">

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Email address</label>
                                            <b-form-input type="email" placeholder="name@example.com" ></b-form-input>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Password</label>
                                            <b-form-input type="password" placeholder="Password" ></b-form-input>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Example select</label>
                                            <b-form-select v-model="numberSelectedBasicForm" :options="numberOptions"></b-form-select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Example multiple select</label>
                                            <b-form-select v-model="multipleSelectedBasicInput" :options="numberOptions" multiple ></b-form-select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group mb-0">
                                            <label>Example textarea</label>
                                            <b-form-textarea rows="3"></b-form-textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card-footer">
                                <b-button type="submit" variant="primary" class="mr-1">Submit</b-button>
                                <b-button type="reset" variant="light">Cancel</b-button>
                            </div>
                        </form>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5>Basic HTML input control</h5>
                        </div>
                        <form class="form theme-form">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Simple Input</label>
                                            <div class="col-sm-9">
                                                <b-form-input type="text" ></b-form-input>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Placeholder</label>
                                            <div class="col-sm-9">
                                                <b-form-input type="text" placeholder="Type your title in Placeholder"></b-form-input>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Password</label>
                                            <div class="col-sm-9">
                                                <b-form-input type="password" placeholder="Password input"></b-form-input>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Number</label>
                                            <div class="col-sm-9">
                                                <b-form-input type="number" placeholder="Number"></b-form-input>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Telephone</label>
                                            <div class="col-sm-9">
                                                <b-form-input type="tel" value="91-(999)-999-999"></b-form-input>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">URL</label>
                                            <div class="col-sm-9">
                                                <b-form-input type="url" value="https://getbootstrap.com"></b-form-input>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Date and time</label>
                                            <div class="col-sm-9">
                                                <b-form-input type="datetime-local" value="2018-01-19T18:45:00"></b-form-input>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Date</label>
                                            <div class="col-sm-9">
                                                <b-form-input type="date" value="2018-01-01" ></b-form-input>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Month</label>
                                            <div class="col-sm-9">
                                                <b-form-input type="month" value="2018-01" ></b-form-input>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Week</label>
                                            <div class="col-sm-9">
                                                <b-form-input type="week" value="2018-W09" ></b-form-input>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Time</label>
                                            <div class="col-sm-9">
                                                <b-form-input type="time" value="21:45:00" ></b-form-input>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Color picker</label>
                                            <div class="col-sm-9">
                                                <b-form-input type="color" value="#563d7c" ></b-form-input>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Maximum Length</label>
                                            <div class="col-sm-9">
                                                <b-form-input type="text" placeholder="Content must be in 6 characters" maxlength="6" ></b-form-input>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Static Text</label>
                                            <div class="col-sm-9">
                                                <div class="form-control-static pt-2">
                                                    Hello !... This is
                                                    static text
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group row mb-0">
                                            <label class="col-sm-3 col-form-label">Textarea</label>
                                            <div class="col-sm-9">
                                                <b-form-textarea rows="6" placeholder="Default textarea"></b-form-textarea>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="card-footer">
                                <div class="col-sm-9 offset-sm-3">
                                    <b-button type="submit" variant="primary" class="mr-1">Submit</b-button>
                                    <b-button type="reset" variant="light">Cancel</b-button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5>Edges input style</h5>
                        </div>
                        <form class="form theme-form">
                            <div class="card-body">

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Email address</label>
                                            <b-form-input type="email" class="btn-pill" placeholder="name@example.com" ></b-form-input>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Password</label>
                                            <b-form-input type="password" class="btn-pill" placeholder="Password" ></b-form-input>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Example select</label>
                                            <b-form-select v-model="numberSelectedEdgeInput" class="btn-pill" :options="numberOptions"></b-form-select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Example multiple select</label>
                                            <b-form-select v-model="multipleSelectedEdgeInput" class="btn-pill" :options="numberOptions" multiple ></b-form-select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group mb-0">
                                            <label>Example textarea</label>
                                            <b-form-textarea rows="3" class="btn-pill" ></b-form-textarea>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                        <div class="card-footer">
                            <b-button type="submit" variant="primary" class="mr-1">Submit</b-button>
                            <b-button type="reset" variant="light">Cancel</b-button>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5>Flat input style</h5>
                        </div>
                        <form class="form theme-form">
                            <div class="card-body">

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Email address</label>
                                            <b-form-input type="email" class="btn-square" placeholder="name@example.com" ></b-form-input>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Password</label>
                                            <b-form-input type="password" class="btn-square" placeholder="Password" ></b-form-input>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Example select</label>
                                            <b-form-select v-model="numberSelectedFlatInput" class="btn-square" :options="numberOptions"></b-form-select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Example multiple select</label>
                                            <b-form-select v-model="multipleSelectedFlatInput" class="btn-square" :options="numberOptions" multiple ></b-form-select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group mb-0">
                                            <label>Example textarea</label>
                                            <b-form-textarea rows="3" class="btn-square" ></b-form-textarea>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                        <div class="card-footer">
                            <b-button type="submit" variant="primary" class="mr-1">Submit</b-button>
                            <b-button type="reset" variant="light">Cancel</b-button>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5>Raise input style</h5>
                        </div>
                        <form class="form theme-form">
                            <div class="card-body">

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Email address</label>
                                            <b-form-input type="email" class="input-air-primary" placeholder="name@example.com" ></b-form-input>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Password</label>
                                            <b-form-input type="password" class="input-air-primary" placeholder="Password" ></b-form-input>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Example select</label>
                                            <b-form-select v-model="numberSelectedRaiseInput" class="input-air-primary" :options="numberOptions"></b-form-select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Example multiple select</label>
                                            <b-form-select v-model="multipleSelectedRaiseInput" class="input-air-primary" :options="numberOptions" multiple ></b-form-select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group mb-0">
                                            <label>Example textarea</label>
                                            <b-form-textarea rows="3" class="input-air-primary" ></b-form-textarea>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                        <div class="card-footer">
                            <b-button type="submit" variant="primary" class="mr-1">Submit</b-button>
                            <b-button type="reset" variant="light">Cancel</b-button>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5>Solid input style</h5>
                        </div>
                        <form class="form theme-form">
                            <div class="card-body">

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Email address</label>
                                            <b-form-input type="email" placeholder="name@example.com" ></b-form-input>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Password</label>
                                            <b-form-input type="password" placeholder="Password" ></b-form-input>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Disabled</label>
                                            <b-form-input type="text" disabled placeholder="Disabled"></b-form-input>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Example select</label>
                                            <b-form-select v-model="numberSelectedSolidInput" :options="numberOptions"></b-form-select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Example multiple select</label>
                                            <b-form-select v-model="multipleSelectedSolidInput" :options="numberOptions" multiple ></b-form-select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group mb-0">
                                            <label>Example textarea</label>
                                            <b-form-textarea rows="3" ></b-form-textarea>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                        <div class="card-footer">
                            <b-button type="submit" variant="primary" class="mr-1">Submit</b-button>
                            <b-button type="reset" variant="light">Cancel</b-button>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5>Input sizing</h5>
                        </div>
                        <form class="form theme-form">
                            <div class="card-body">

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Large input</label>
                                            <b-form-input type="text" placeholder="col-form-label-lg" size="lg" ></b-form-input>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Default input</label>
                                            <b-form-input type="text" placeholder="form-control" ></b-form-input>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Small input</label>
                                            <b-form-input type="text" placeholder="col-form-label-sm" size="sm" ></b-form-input>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Large select</label>
                                            <b-form-select v-model="numberSelectedLargeInput" :options="numberOptions" size="lg"></b-form-select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label>Default select</label>
                                            <b-form-select v-model="numberSelectedDefaultInput" :options="numberOptions"></b-form-select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group mb-0">
                                            <label>Small select</label>
                                            <b-form-select v-model="numberSelectedSmallInput" :options="numberOptions" size="sm"></b-form-select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                        <div class="card-footer">
                            <b-button type="submit" variant="primary" class="mr-1">Submit</b-button>
                            <b-button type="reset" variant="light">Cancel</b-button>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5>Custom controls</h5>
                        </div>
                        <form class="form theme-form">
                            <div class="card-body">

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Upload File</label>
                                            <div class="col-sm-9">
                                                <b-form-file class="form-control" plain></b-form-file>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div class="form-group row mb-0">
                                            <label class="col-sm-3 col-form-label">Custom select</label>
                                            <div class="col-sm-9">
                                                <b-form-select v-model="alfanumberSelected" :options="alfanumberOptions"></b-form-select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                        <div class="card-footer">
                            <b-button type="submit" variant="primary" class="mr-1">Submit</b-button>
                            <b-button type="reset" variant="light">Cancel</b-button>
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
        numberSelectedBasicForm: 1,
        numberSelectedEdgeInput: 1,
        numberSelectedRaiseInput: 1,
        numberSelectedFlatInput: 1,
        numberSelectedSolidInput: 1,
        numberSelectedSmallInput: 1,
        numberSelectedDefaultInput: 1,
        numberSelectedLargeInput: 1,

        alfanumberSelected: null,
        multipleSelectedBasicInput:[],
        multipleSelectedEdgeInput:[],
        multipleSelectedRaiseInput:[],
        multipleSelectedFlatInput:[],
        multipleSelectedSolidInput:[],

        numberOptions:[
          { value:1, text: 1 },
          { value:2, text: 2 },
          { value:3, text: 3 },
          { value:4, text: 4 },
          { value:5, text: 5 }
        ],

        alfanumberOptions:[
          { value:null, text: 'Open this select menu' },
          { value:1, text: 'One' },
          { value:2, text: 'Two' },
          { value:3, text: 'Three' },
        ]
      };
    }
  };
</script>

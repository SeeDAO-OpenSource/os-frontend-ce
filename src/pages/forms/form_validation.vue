<template>
    <div>
        <Breadcrumbs main="Form Controls" title="Validation Forms"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
         <div class="row">
            <div class="col-sm-12">
                <px-card :actions="false">
                    <div slot="headerCustom">
                        <h5>Custom styles</h5>
                        <span>For custom Bootstrap form validation messages, you’ll need to add the 
                            <code class="text-danger">novalidate</code> boolean attribute to your 
                            <code class="text-danger">&lt;form&gt;</code>.
                            This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you.</span><span>When attempting to submit, you’ll see the <code class="text-danger">:invalid </code> and <code class="text-danger">:valid </code> styles applied to your form controls.</span>
                    </div>
                    <div slot="with-padding">
                        <b-form class="needs-validation" @submit="onCustomStyleSubmit">
                            <div class="form-row">
                                <div class="col-md-4 mb-3">
                                    <label for="c_form_first_name">First name</label>
                                    <b-form-input type="text" id="c_form_first_name" v-model="c_form.first_name" :state="c_form_result.first_name" placeholder="First name"></b-form-input>
                                    <b-form-valid-feedback :state="c_form_result.first_name">Lock Good</b-form-valid-feedback>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="c_form_last_name">Last name</label>
                                    <b-form-input type="text" id="c_form_last_name" v-model="c_form.last_name" :state="c_form_result.last_name" placeholder="Last name"></b-form-input>
                                    <b-form-valid-feedback :state="c_form_result.last_name">Lock Good</b-form-valid-feedback>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="c_form_username">Username</label>
                                    <b-input-group prepend="@">
                                        <b-form-input type="text" id="c_form_username" v-model="c_form.username" :state="c_form_result.username" placeholder="Username"></b-form-input>
                                    </b-input-group>
                                    <b-form-invalid-feedback :state="c_form_result.username">Please choose a unique and valid username.</b-form-invalid-feedback>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                    <label for="c_form_city">City</label>
                                    <b-form-input type="text" id="c_form_city" v-model="c_form.city" :state="c_form_result.city" placeholder="City"></b-form-input>
                                    <b-form-invalid-feedback :state="c_form_result.city">Please provide a valid city.</b-form-invalid-feedback>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="c_form_state">State</label>
                                    <b-form-input type="text" id="c_form_state" v-model="c_form.state" :state="c_form_result.state" placeholder="State"></b-form-input>
                                    <b-form-invalid-feedback :state="c_form_result.state">Please provide a valid state.</b-form-invalid-feedback>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="c_form_zipcode">Zip</label>
                                    <b-form-input type="text" id="c_form_zipcode" v-model="c_form.zip" :state="c_form_result.zip" placeholder="Zip"></b-form-input>
                                    <b-form-invalid-feedback :state="c_form_result.zip">Please provide a valid zip.</b-form-invalid-feedback>
                                </div>
                            </div>
                            <b-button type="submit" variant="primary">Submit Form</b-button>
                        </b-form>
                    </div>
                </px-card>

                <px-card :actions="false">
                    <div slot="headerCustom">
                        <h5>Browser defaults</h5><span>Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.</span><span>While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.</span>
                    </div>
                    <div slot="with-padding">
                        <b-form class="needs-validation">
                            <div class="form-row">
                                <div class="col-md-4 mb-3">
                                    <label for="browser_first_name">First name</label>
                                    <b-form-input type="text" id="browser_first_name" required placeholder="First name"></b-form-input>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="browser_last_name">Last name</label>
                                    <b-form-input type="text" id="browser_last_name" required placeholder="Last name"></b-form-input>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="browser_username">Username</label>
                                    <b-input-group prepend="@">
                                        <b-form-input type="text" id="browser_username" required placeholder="Username"></b-form-input>
                                    </b-input-group>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                    <label for="browser_city">City</label>
                                    <b-form-input type="text" id="browser_city" required placeholder="City"></b-form-input>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="browser_state">State</label>
                                    <b-form-input type="text" id="browser_state" required placeholder="State"></b-form-input>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="browser_zipcode">Zip</label>
                                    <b-form-input type="text" id="browser_zipcode" required placeholder="Zip"></b-form-input>
                                </div>
                            </div>
                            <div class="form-group checkbox">
                                <b-form-checkbox class="form-check" id="browser_agree" name="" value="" required >
                                  Agree to terms and conditions
                                </b-form-checkbox>
                            </div>
                            <b-button type="submit" variant="primary">Submit Form</b-button>
                        </b-form>
                    </div>
                </px-card>

                <!-- <px-card :actions="false">
                    <div slot="headerCustom">
                        <h5>Supported elements</h5><span>Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.</span><span>While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.</span>
                    </div>
                    <div slot="with-padding">

                    </div>
                </px-card> -->

                <div class="card">
                  <div class="card-header">
                    <h5>Supported elements</h5><span>Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.</span><span>While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.</span>
                  </div>
                  <div class="card-body">
                    <b-form>
                        <div class="custom-control custom-checkbox mb-3 pl-0">
                            <b-form-checkbox id="supported_checkbox" name="supported_checkbox" v-model="supported_form.checkbox" :state="supported_checkbox_state" >
                              Check this custom checkbox
                            </b-form-checkbox>
                            <b-form-invalid-feedback :state="supported_checkbox_state">Example invalid feedback text</b-form-invalid-feedback>
                        </div>

                        <div class="custom-control custom-radio mb-3 pl-0">
                            <b-form-radio-group v-model="supported_form.radio" stacked :options="supported_form_radio_options" :state="supported_radio_state" name="supported_radio_validation">
                              <b-form-invalid-feedback :state="supported_radio_state">More example invalid feedback text</b-form-invalid-feedback>
                            </b-form-radio-group>
                        </div>

                        <div class="form-group">
                            <b-form-select v-model="supported_form.selected" :options="supported_form_select_options" :state="supported_select_state"></b-form-select>
                            <b-form-invalid-feedback :state="supported_select_state">Example invalid custom select feedback</b-form-invalid-feedback>
                        </div>

                        <div class="custom-file">
                            <b-form-file v-model="supported_form.file" :state="supported_file_state" placeholder="Choose file..." drop-placeholder="Drop file here..."></b-form-file>
                            <b-form-invalid-feedback :state="supported_file_state">Example invalid custom select feedback</b-form-invalid-feedback>
                        </div>
                    </b-form>
                  </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h5>Tooltips</h5><span>If your form layout allows it, you can swap the <code class="text-danger">.{valid|invalid}-feedback</code> classes for <code class="text-danger">.{valid|invalid}-tooltip</code> classes to display validation feedback in a styled tooltip. Be sure to have a parent with <code class="text-danger">position: relative</code> on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.</span>
                    </div>
                    <div class="card-body">
                        <b-form class="needs-validation" @submit="onTooltipSubmit">
                            <div class="form-row">
                                <div class="col-md-4 mb-3">
                                    <label for="tooltip_form_first_name">First name</label>
                                    <b-form-input type="text" id="tooltip_form_first_name" v-model="tooltip_form.first_name" :state="tooltip_form_result.first_name" placeholder="First name"></b-form-input>
                                    <b-form-valid-feedback :state="tooltip_form_result.first_name" tooltip>Lock Good</b-form-valid-feedback>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="tooltip_form_last_name">Last name</label>
                                    <b-form-input type="text" id="tooltip_form_last_name" v-model="tooltip_form.last_name" :state="tooltip_form_result.last_name" placeholder="Last name"></b-form-input>
                                    <b-form-valid-feedback :state="tooltip_form_result.last_name" tooltip>Lock Good</b-form-valid-feedback>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="tooltip_form_username">Username</label>
                                    <b-input-group prepend="@">
                                        <b-form-input type="text" id="tooltip_form_username" v-model="tooltip_form.username" :state="tooltip_form_result.username" placeholder="Username"></b-form-input>
                                    </b-input-group>
                                    <b-form-invalid-feedback :state="tooltip_form_result.username" tooltip>Please choose a unique and valid username.</b-form-invalid-feedback>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                    <label for="tooltip_form_city">City</label>
                                    <b-form-input type="text" id="tooltip_form_city" v-model="tooltip_form.city" :state="tooltip_form_result.city" placeholder="City"></b-form-input>
                                    <b-form-invalid-feedback :state="tooltip_form_result.city" tooltip>Please provide a valid city.</b-form-invalid-feedback>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="tooltip_form_state">State</label>
                                    <b-form-input type="text" id="tooltip_form_state" v-model="tooltip_form.state" :state="tooltip_form_result.state" placeholder="State"></b-form-input>
                                    <b-form-invalid-feedback :state="tooltip_form_result.state" tooltip>Please provide a valid state.</b-form-invalid-feedback>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="tooltip_form_zipcode">Zip</label>
                                    <b-form-input type="text" id="tooltip_form_zipcode" v-model="tooltip_form.zip" :state="tooltip_form_result.zip" placeholder="Zip"></b-form-input>
                                    <b-form-invalid-feedback :state="tooltip_form_result.zip" tooltip>Please provide a valid zip.</b-form-invalid-feedback>
                                </div>
                            </div>
                            <b-button type="submit" variant="primary">Submit Form</b-button>
                        </b-form>
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

        email: '',
        supported_form:{
          checkbox:false,
          radio:null,
          selected: null,
          file:null
        },
        supported_form_radio_options: [
          { text: 'Toggle this custom radio', value: 'first' },
          { text: 'Or toggle this other custom radio', value: 'second' }
        ],
        supported_form_select_options: [
          { value: null, text:'Open this select menu' },
          { value: '1', text:'One' },
          { value: '2', text:'Two' },
          { value: '3', text:'Three' },
        ],
        c_form:{
          first_name:'',
          last_name:'',
          username:'',
          city:'',
          state:'',
          zip:''
        },
        c_form_result:{
          first_name:null,
          last_name:null,
          username:null,
          city:null,
          state:null,
          zip:null
        },
        tooltip_form:{
          first_name:'',
          last_name:'',
          username:'',
          city:'',
          state:'',
          zip:''
        },
        tooltip_form_result:{
          first_name:null,
          last_name:null,
          username:null,
          city:null,
          state:null,
          zip:null
        },
            
      };
    },
    computed:{
      supported_checkbox_state(){
        return this.supported_form.checkbox;
      },
      supported_radio_state(){
        return Boolean(this.supported_form.radio);
      },
      supported_select_state(){
        if(this.supported_form.selected == null) {
          return false;
        } else {
          return true;
        }
      },
      supported_file_state(){
        if(this.supported_form.file === null) {
          return false;
        } else {
          return true;
        }
      },
    },
    methods:{
      onCustomStyleSubmit(evt){            
        evt.preventDefault();
        if(this.c_form.first_name !== '') {
          this.c_form_result.first_name = true;
        } else {
          this.c_form_result.first_name = false;
        }

        if(this.c_form.last_name !== '') {
          this.c_form_result.last_name = true;
        } else {
          this.c_form_result.last_name = false;
        }

        if(this.c_form.username !== '') {
          this.c_form_result.username = true;
        } else {
          this.c_form_result.username = false;
        }

        if(this.c_form.city !== '') {
          this.c_form_result.city = true;
        } else {
          this.c_form_result.city = false;
        }

        if(this.c_form.state !== '') {
          this.c_form_result.state = true;
        } else {
          this.c_form_result.state = false;
        }

        if(this.c_form.zip !== '') {
          this.c_form_result.zip = true;
        } else {
          this.c_form_result.zip = false;
        }
      },

      onTooltipSubmit(evt){
        evt.preventDefault();
        if(this.tooltip_form.first_name !== '') {
          this.tooltip_form_result.first_name = true;
        } else {
          this.tooltip_form_result.first_name = false;
        }

        if(this.tooltip_form.last_name !== '') {
          this.tooltip_form_result.last_name = true;
        } else {
          this.tooltip_form_result.last_name = false;
        }

        if(this.tooltip_form.username !== '') {
          this.tooltip_form_result.username = true;
        } else {
          this.tooltip_form_result.username = false;
        }

        if(this.tooltip_form.city !== '') {
          this.tooltip_form_result.city = true;
        } else {
          this.tooltip_form_result.city = false;
        }

        if(this.tooltip_form.state !== '') {
          this.tooltip_form_result.state = true;
        } else {
          this.tooltip_form_result.state = false;
        }

        if(this.tooltip_form.zip !== '') {
          this.tooltip_form_result.zip = true;
        } else {
          this.tooltip_form_result.zip = false;
        }
      }
    }
  };
</script>

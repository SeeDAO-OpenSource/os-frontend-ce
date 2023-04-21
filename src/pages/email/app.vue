<template>
    <div>
        <Breadcrumbs title="Email"/>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
        <div class="email-wrap">
            <div class="row">
                <div class="col-xl-3 col-md-6">
                    <div class="email-left-aside">
                        <div class="card">
                            <div class="card-body">
                                <div class="email-app-sidebar">
                                    <div class="media">
                                        <div class="media-size-email"><img class="mr-3 rounded-circle img-50"  :src='"../../assets/images/user/1.jpg"' alt=""></div>
                                        <div class="media-body">
                                            <h6 class="f-w-600">MARKJENCO</h6>
                                            <p>Markjecno@gmail.com</p>
                                        </div>
                                    </div>
                                    <ul class="nav main-menu" role="tablist">
                                        <li @click="setactiveemails(0)" class="nav-item"><a class="btn-primary btn-block btn-mail" id="pills-darkhome-tab" data-toggle="pill" href="#pills-darkhome" role="tab" aria-controls="pills-darkhome" aria-selected="true"><i class="icofont icofont-envelope mr-2"></i> NEW MAIL</a></li>
                                        <li @click='type = "inbox"' class="nav-item"><a class="show" id="pills-darkprofile-tab" data-toggle="pill" href="#pills-darkprofile" role="tab" aria-controls="pills-darkprofile" aria-selected="false"><span class="title"><i class="icon-import"></i> Inbox</span><span class="badge pull-right digits">({{index}})</span></a></li>
                                        <li @click='type = "all mail"' ><a href="#"><span class="title"><i class="icon-folder"></i> All mail</span></a></li>
                                        <li @click='type = "sent"'><a href="#"><span class="title"><i class="icon-new-window"></i> Sent</span><span class="badge pull-right digits">({{send}})</span></a></li>
                                        <li @click='type = "draft"'><a href="#"><span class="title"><i class="icon-pencil-alt"></i> DRAFT</span><span class="badge pull-right digits">({{draft}})</span></a></li>
                                        <li @click='type = "trash"'><a href="#"><span class="title"><i class="icon-trash"></i> TRASH</span><span class="badge pull-right digits">({{trash}})</span></a></li>
                                        <li><a href="#"><span class="title"><i class="icon-info-alt"></i> IMPORTANT</span></a></li>
                                        <li @click='type = "starred"'><a href="#"><span class="title"><i class="icon-star"></i> Starred</span><span class="badge pull-right digits">({{starred}})</span></a></li>
                                        <li>
                                            <hr>

                                        </li>
                                        <li><a href="#"><span class="title"><i class="icon-email"></i> UNREAD</span></a></li>
                                        <li><a href="#"><span class="title"><i class="icon-export"></i> SPAM</span></a></li>
                                        <li><a href="#"><span class="title"><i class="icon-share"></i> OUTBOX</span></a></li>
                                        <li><a href="#"><span class="title"><i class="icon-file"></i> UPDATE</span></a></li>
                                        <li><a href="#"><span class="title"><i class="icon-bell"></i> ALERT</span></a></li>
                                        <li><a href="#"><span class="title"><i class="icon-notepad"></i> NOTES</span><span class="badge pull-right digits">(20)</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="email-right-aside">
                        <div class="card email-body">
                            <div class="pr-0 b-r-light">
                                <div class="email-top">
                                    <div class="row">
                                        <div class="col">
                                            <h5 class="text-capitalize">{{type}}</h5>
                                        </div>
                                        <div class="col text-right d-flex">
                                            <div class="dropdown">
                                                <button class="btn bg-transparent dropdown-toggle p-0 text-muted" id="dropdownMenuButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-on:click="menutoogle = !menutoogle">More</button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" :class="{ show: menutoogle }">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="inbox custom-scrollbar">
                                    <div class="media active" v-for="(list,index) in emaillist" :key="index" @click="setactiveemails(list.id)">
                                        <div class="media-size-email">
                                            <img class="mr-3 rounded-circle img-fluid img-50" :src='getImgUrl(list.image)' alt=""></div>
                                        <div class="media-body">
                                            <h6>{{list.name}}<small><span class="digits">({{ new Date(list.date) | moment("D") }}</span> {{ new Date(list.date) | moment("MMMM") }}<span class="digits"> {{ new Date(list.date) | moment("YYYY") }})</span></small></h6>
                                            <p>{{list.subject}}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-md-12">
                    <div class="email-right-aside">
                        <div class="card email-body radius-left">
                            <div class="pl-0">
                                <div class="tab-content">
                                    <div class="tab-pane fade active show" v-if="newmail != 0 "   id="pills-darkhome" role="tabpanel" aria-labelledby="pills-darkhome-tab">
                                        <div class="email-compose">
                                            <div class="email-top compose-border">
                                                <div class="row">
                                                    <div class="col-sm-8 xl-50">
                                                        <h4 class="mb-0">New Message</h4>
                                                    </div>
                                                    <div class="col-sm-4 btn-middle xl-50">
                                                        <button class="btn btn-primary btn-block btn-mail text-center mb-0 mt-0" type="button"><i class="fa fa-paper-plane mr-2"></i> SEND</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="email-wrapper">
                                                <form class="theme-form">
                                                    <div class="form-group">
                                                        <label class="col-form-label pt-0" for="exampleInputEmail1">To</label>
                                                        <input class="form-control" id="exampleInputEmail1" type="email">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Subject</label>
                                                        <input class="form-control" id="exampleInputPassword1" type="text">
                                                    </div>
                                                    <div class="form-group mb-0">
                                                        <label class="text-muted">Message</label>
                                                        <ckeditor :editor="editor"  v-model="editorData" :config="editorConfig"></ckeditor>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade active show " v-if="newmail == 0 " id="pills-darkprofile" role="tabpanel" aria-labelledby="pills-darkprofile-tab">
                                        <div class="email-content">
                                            <div class="email-top">
                                                <div class="row">
                                                    <div class="col-md-6 xl-100 col-sm-12">
                                                        <div class="media"><img class="mr-3 rounded-circle img-fluid img-50" :src='getImgUrl(activeemail.image)' alt="">
                                                            <div class="media-body">
                                                                <h6>{{activeemail.name}}<small><span class="digits">({{ new Date(activeemail.date) | moment("D") }}</span> {{ new Date(activeemail.date) | moment("MMMM") }}<span class="digits"> {{ new Date(activeemail.date) | moment("YYYY") }})</span></small></h6>
                                                                <p>{{activeemail.subject}}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-sm-12">
                                                        <div class="float-right d-flex">
                                                            <p class="user-emailid">{{activeemail.email}}</p>
                                                            <span><samp @click="addfavorites(activeemail.id)" :class='{"text-warning":activeemail.favourite}'><i class="fa fa-star-o f-18 mt-1"></i></samp></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="email-wrapper">
                                                <div v-html="activeemail.text"></div>
                                               <hr/>
                                                <div class="d-inline-block">
                                                    <h6 class="text-muted"><i class="icofont icofont-clip"></i> ATTACHMENTS</h6><a class="text-muted text-right right-download" href="#"><i class="fa fa-long-arrow-down mr-2"></i>Download All</a>
                                                    <div class="clearfix"></div>
                                                </div>
                                               <div class="attachment">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item"><img class="img-fluid" :src='"../../assets/images/email/1.jpg"' alt=""></li>
                                                        <li class="list-inline-item"><img class="img-fluid" :src='"../../assets/images/email/2.jpg"' alt=""></li>
                                                        <li class="list-inline-item"><img class="img-fluid" :src='"../../assets/images/email/3.jpg"' alt=""></li>
                                                    </ul>
                                                </div>
                                                <div class="action-wrapper">
                                                    <ul class="actions">
                                                       <li><a class="text-muted" href="#"><i class="fa fa-reply mr-2"></i>Reply</a></li>
                                                        <li><a class="text-muted" href="#"><i class="fa fa-reply-all mr-2"></i>Reply All</a></li>
                                                        <li><a class="text-muted" href="#"><i class="fa fa-share mr-2"></i></a>Forward</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
  import { mapState,mapGetters } from 'vuex';
  import CKEditor from '@ckeditor/ckeditor5-vue';
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

  export default {
    name:'Email',
    components: { ckeditor: CKEditor.component },

    data(){
      return {
        type: 'inbox',
        editor: ClassicEditor,
        editorData: '<p>Content of the editor.</p>',
        editorConfig: {
          config:{ height: '300px' }
        },
        menutoogle:false,
      };
    },
    computed: {
      newmail () {
        if(this.$store.state.email.activeemail === 0)
          return true;
        else
          return false;
      },
      ...mapState({
        emaillist (state) {
          return state.email.emaillist.filter(list => {
            if (this.type === 'starred' && list.favourite === true)
              return list;
            else if (list.type === this.type)
              return list;
            else if (this.type === 'all mail')
              return list;
          });
        }
      }),
      ...mapGetters({
        activeemail: 'email/activeemail',
        index: 'email/index',
        send: 'email/send',
        draft: 'email/draft',
        trash: 'email/trash',
        starred: 'email/starred',
      })
    },
    methods: {
      getImgUrl(path) {
        return require('../../assets/images/'+path);
      },
      setactiveemails(id) {
        this.$store.dispatch('email/setactiveemails',id);
      },
      addfavorites(id) {
        this.$store.dispatch('email/addfavorites',id);
      }

    }
  };
</script>

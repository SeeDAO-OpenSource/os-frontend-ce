<template>
  <li class="onhover-dropdown">
    <feather type="message-square" @click="message_open()"></feather>
    <div class="chat-dropdown onhover-show-div" :class="{ active: message }">
      <h6 class="f-18 mb-0 dropdown-title">Messages</h6>
      <ul>
        <li>
          <div class="media">
            <img
              class="img-fluid b-r-5 mr-2"
              src="../../assets/images/user/1.jpg"
              alt=""
            />
            <div class="media-body">
              <h6>Teressa</h6>
              <p>
                Reference site about Lorem Ipsum, give information on its
                origins.
              </p>
              <p class="f-8 font-primary mb-0">3 hours ago</p>
            </div>
            <span class="badge rounded-circle badge-primary">2</span>
          </div>
        </li>
        <li>
          <div class="media">
            <img
              class="img-fluid b-r-5 mr-2"
              src="../../assets/images/user/2.jpg"
              alt=""
            />
            <div class="media-body">
              <h6>Kori Thomas</h6>
              <p>Lorem Ipsum is simply dummy...</p>
              <p class="f-8 font-primary mb-0">1 hr ago</p>
            </div>
            <span class="badge rounded-circle badge-primary">1</span>
          </div>
        </li>
        <li>
          <div class="media">
            <img
              class="img-fluid b-r-5 mr-2"
              src="../../assets/images/user/6.jpg"
              alt=""
            />
            <div class="media-body">
              <h6>Ain Chavez</h6>
              <p>Lorem Ipsum is simply dummy...</p>
              <p class="f-8 font-primary mb-0">32 mins ago</p>
            </div>
            <span class="badge rounded-circle badge-primary">2</span>
          </div>
        </li>
        <li class="text-center">
          <a href="#" class="f-w-700">View All </a>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'Message',
    data() {
      return {
        message: false,
      };
    },
    methods: {
      message_open() {
        this.message = !this.message;
      },
    },
  };
</script>

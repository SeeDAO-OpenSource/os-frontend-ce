<template>
  <li class="onhover-dropdown">
    <div class="notification-box">
      <feather type="bell" @click="notification_open()"></feather
      ><span class="badge badge-pill badge-secondary">4 </span>
    </div>
    <div
      class="onhover-show-div notification-dropdown"
      :class="{ active: notification }"
    >
      <h6 class="f-18 mb-0 dropdown-title">Notitications</h6>
      <ul>
        <li class="b-l-primary border-4">
          <p>Delivery processing <span class="font-danger">10 min.</span></p>
        </li>
        <li class="b-l-success border-4">
          <p>Order Complete<span class="font-success">1 hr</span></p>
        </li>
        <li class="b-l-info border-4">
          <p>Tickets Generated<span class="font-info">3 hr</span></p>
        </li>
        <li class="b-l-warning border-4">
          <p>Delivery Complete<span class="font-warning">6 hr</span></p>
        </li>
        <li><a class="f-w-700" href="#">Check all</a></li>
      </ul>
    </div>
  </li>
</template>

<script>

  export default {
    name: 'Notifications',
    data() {
      return {
        notification: false,
      };
    },
    methods: {
      notification_open() {
        this.notification = !this.notification;
      },
    },
  };
</script>

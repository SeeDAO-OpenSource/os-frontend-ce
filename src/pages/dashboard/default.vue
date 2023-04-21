<template>
  <div>
    <Breadcrumbs main="Dashboard" title="default" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row second-chart-list third-news-update">
        <div class="col-xl-4 col-lg-12 xl-50 morning-sec box-col-12">
          <px-card class="profile-greeting">
            <div slot="with-padding">
              <div class="media">
                <div class="media-body">
                  <div class="greeting-user">
                    <h4 class="f-w-600 font-primary" id="greeting">
                      {{ greeting }}
                    </h4>
                    <p>Here whats happing in your account today</p>
                    <div class="whatsnew-btn">
                      <a href="javascript:void(0)" class="btn btn-primary"
                        >Whats New !</a
                      >
                      <b-button v-b-modal.basicinfo variant="primary"
                        >Vertically centered</b-button
                      >
                    </div>
                  </div>
                </div>
                <div class="badge-groups">
                  <div class="badge f-10">
                    <feather type="clock" class="mr-1"></feather>
                    <span id="txt">{{ time }}</span>
                  </div>
                </div>
              </div>
              <div class="cartoon">
                <img
                  class="img-fluid"
                  src="../../assets/images/dashboard/cartoon.png"
                  alt=""
                />
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-xl-8 xl-100 dashboard-sec box-col-12">
          <px-card class="earning-card">
            <div class="row m-0">
              <div class="col-xl-3 earning-content p-0">
                <div class="row m-0 chart-left">
                  <div class="col-xl-12 p-0 left_side_earning">
                    <h5>Dashboard</h5>
                    <p class="font-roboto">Overview of last month</p>
                  </div>
                  <div class="col-xl-12 p-0 left_side_earning">
                    <h5>$4055.56</h5>
                    <p class="font-roboto">This Month Earning</p>
                  </div>
                  <div class="col-xl-12 p-0 left_side_earning">
                    <h5>$1004.11</h5>
                    <p class="font-roboto">This Month Profit</p>
                  </div>
                  <div class="col-xl-12 p-0 left_side_earning">
                    <h5>90%</h5>
                    <p class="font-roboto">This Month Sale</p>
                  </div>
                  <div class="col-xl-12 p-0 left-btn">
                    <a class="btn btn-gradient">Summary</a>
                  </div>
                </div>
              </div>
              <div class="col-xl-9 p-0">
                <div class="chart-right">
                  <div class="row m-0 p-tb">
                    <div class="col-xl-8 col-md-8 col-sm-8 col-12 p-0">
                      <div class="inner-top-left">
                        <ul class="d-flex list-unstyled">
                          <li>Daily</li>
                          <li class="active">Weekly</li>
                          <li>Monthly</li>
                          <li>Yearly</li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="col-xl-4 col-md-4 col-sm-4 col-12 p-0 justify-content-end"
                    >
                      <div class="inner-top-right">
                        <ul class="d-flex list-unstyled justify-content-end">
                          <li>Online</li>
                          <li>Store</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="card-body p-0">
                        <div class="current-sale-container">
                          <div id="chart-currently">
                            <apexchart
                              height="290"
                              type="area"
                              :options="apexDashboard.options"
                              :series="apexDashboard.series"
                            ></apexchart>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row border-top m-0">
                  <div class="col-xl-4 pl-0 col-md-6 col-sm-6">
                    <div class="media p-0">
                      <div class="media-left">
                        <i class="icofont icofont-crown"></i>
                      </div>
                      <div class="media-body">
                        <h6>Referral Earning</h6>
                        <p>$5,000.20</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-6 col-sm-6">
                    <div class="media p-0">
                      <div class="media-left bg-secondary">
                        <i class="icofont icofont-heart-alt"></i>
                      </div>
                      <div class="media-body">
                        <h6>Cash Balance</h6>
                        <p>$2,657.21</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-12 pr-0">
                    <div class="media p-0">
                      <div class="media-left">
                        <i class="icofont icofont-cur-dollar"></i>
                      </div>
                      <div class="media-body">
                        <h6>Sales forcasting</h6>
                        <p>$9,478.50</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-xl-9 xl-100 chart_data_left box-col-12">
          <px-card>
            <div class="row m-0 chart-main">
              <div class="col-xl-3 col-md-6 col-sm-6 p-0 box-col-6">
                <div class="media align-items-center">
                  <div class="hospital-small-chart">
                    <div class="small-bar">
                      <div class="small-chart flot-chart-container">
                        <chartist
                          type="Bar"
                          :data="smallchart1.chartData_1"
                          :options="smallchart1.chartOptions"
                          :event-handlers="smallchart1.eventHandlers"
                        ></chartist>
                      </div>
                    </div>
                  </div>
                  <div class="media-body">
                    <div class="right-chart-content">
                      <h4>1001</h4>
                      <span>purchase</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 col-sm-6 p-0 box-col-6">
                <div class="media align-items-center">
                  <div class="hospital-small-chart">
                    <div class="small-bar">
                      <div class="small-chart1 flot-chart-container">
                        <chartist
                          type="Bar"
                          :data="smallchart2.chartData_1"
                          :options="smallchart2.chartOptions"
                          :event-handlers="smallchart2.eventHandlers"
                        ></chartist>
                      </div>
                    </div>
                  </div>
                  <div class="media-body">
                    <div class="right-chart-content">
                      <h4>1005</h4>
                      <span>Sales</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 col-sm-6 p-0 box-col-6">
                <div class="media align-items-center">
                  <div class="hospital-small-chart">
                    <div class="small-bar">
                      <div class="small-chart2 flot-chart-container">
                        <chartist
                          type="Bar"
                          :data="smallchart3.chartData_1"
                          :options="smallchart3.chartOptions"
                          :event-handlers="smallchart3.eventHandlers"
                        ></chartist>
                      </div>
                    </div>
                  </div>
                  <div class="media-body">
                    <div class="right-chart-content">
                      <h4>100</h4>
                      <span>Sales return</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 col-sm-6 p-0 box-col-6">
                <div class="media border-none align-items-center">
                  <div class="hospital-small-chart">
                    <div class="small-bar">
                      <div class="small-chart3 flot-chart-container">
                        <chartist
                          type="Bar"
                          :data="smallchart4.chartData_1"
                          :options="smallchart4.chartOptions"
                          :event-handlers="smallchart4.eventHandlers"
                        ></chartist>
                      </div>
                    </div>
                  </div>
                  <div class="media-body">
                    <div class="right-chart-content">
                      <h4>101</h4>
                      <span>Purchase ret</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-xl-3 xl-50 chart_data_right box-col-12">
          <px-card>
            <div slot="with-padding">
              <div class="media align-items-center">
                <div class="media-body right-chart-content">
                  <h4>
                    $95,900
                    <span class="new-box">Hot</span>
                  </h4>
                  <span>Purchase Order Value</span>
                </div>
                <div class="knob-block text-center" id="ordervalue"></div>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-xl-3 xl-50 chart_data_right second d-none">
          <px-card>
            <div slot="with-padding">
              <div class="media align-items-center">
                <div class="media-body right-chart-content">
                  <h4>
                    $95,000
                    <span class="new-box">New</span>
                  </h4>
                  <span>Product Order Value</span>
                </div>
                <div class="knob-block text-center" id="productvalue"></div>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-xl-4 xl-50 news box-col-6">
          <px-card :actions="false">
            <div slot="headerCustom">
              <div class="header-top">
                <h5 class="m-0">News & Update</h5>
                <div class="card-header-right-icon">
                  <select class="button btn btn-primary">
                    <option>Today</option>
                    <option>Tomorrow</option>
                    <option>Yesterday</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div class="news-update media">
                <img
                  class="img-fluid mr-3 b-r-10"
                  src="../../assets/images/dashboard/update/1.jpg"
                  alt=""
                />
                <div class="media-body">
                  <h6>36% off For pixel Couslations Types.</h6>
                  <span>Lorem Ipsum is simply dummy...</span
                  ><span class="time-detail d-block"
                    ><i data-feather="clock"></i>10 Minutes Ago</span
                  >
                </div>
              </div>
              <div class="news-update media">
                <img
                  class="img-fluid mr-3 b-r-10"
                  src="../../assets/images/dashboard/update/2.jpg"
                  alt=""
                />
                <div class="media-body">
                  <h6>We are produce new product this</h6>
                  <span> Lorem Ipsum is simply text of the printing... </span
                  ><span class="time-detail d-block"
                    ><i data-feather="clock"></i>1 Hour Ago</span
                  >
                </div>
              </div>
              <div class="news-update media">
                <img
                  class="img-fluid mr-3 b-r-10"
                  src="../../assets/images/dashboard/update/3.jpg"
                  alt=""
                />
                <div class="media-body">
                  <h6>50% off For COVID Couslations Types.</h6>
                  <span>Lorem Ipsum is simply dummy...</span
                  ><span class="time-detail d-block"
                    ><i data-feather="clock"></i>8 Hours Ago</span
                  >
                </div>
              </div>
            </div>
            <div slot="footer">
              <div class="bottom-btn">
                <a href="#">See all</a>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-xl-4 xl-50 appointment-sec box-col-6">
          <div class="row">
            <div class="col-xl-12">
              <px-card :actions="false" class="card-no-border">
                <div slot="headerCustom">
                  <div class="header-top">
                    <h5 class="m-0">Appointment</h5>
                    <div class="card-header-right-icon">
                      <select class="button btn btn-primary">
                        <option>Today</option>
                        <option>Tomorrow</option>
                        <option>Yesterday</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="appointment-table table-responsive">
                    <table class="table table-bordernone">
                      <tbody>
                        <tr>
                          <td>
                            <img
                              class="img-fluid img-40 rounded-circle mb-3"
                              src="../../assets/images/appointment/app-ent.jpg"
                              alt="Image description"
                            />
                            <div class="status-circle bg-primary"></div>
                          </td>
                          <td class="img-content-box">
                            <span class="d-block">Venter Loren</span>
                            <span class="font-roboto">Now</span>
                          </td>
                          <td>
                            <p class="m-0 font-primary">28 Sept</p>
                          </td>
                          <td class="text-right">
                            <div class="button btn btn-primary">Done</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              class="img-fluid img-40 rounded-circle"
                              src="../../assets/images/appointment/app-ent.jpg"
                              alt="Image description"
                            />
                            <div class="status-circle bg-primary"></div>
                          </td>
                          <td class="img-content-box">
                            <span class="d-block">John Loren</span>
                            <span class="font-roboto">11:00</span>
                          </td>
                          <td>
                            <p class="m-0 font-primary">22 Sept</p>
                          </td>
                          <td class="text-right">
                            <div class="button btn btn-warning">Pending</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </px-card>
            </div>

            <div class="col-xl-12 alert-sec">
              <px-card :actions="false" class="bg-img">
                <div slot="headerCustom">
                  <div class="header-top">
                    <h5 class="m-0">Alert</h5>
                    <div class="dot-right-icon">
                      <feather type="more-horizontal"></feather>
                    </div>
                  </div>
                </div>
                <div slot="with-padding">
                  <div class="body-bottom">
                    <h6>10% off For drama lights Couslations...</h6>
                    <span class="font-roboto"
                      >Lorem Ipsum is simply dummy...It is a long established
                      fact that a reader will be distracted by</span
                    >
                  </div>
                </div>
              </px-card>
            </div>
          </div>
        </div>
        <div class="col-xl-4 xl-50 notification box-col-6">
          <px-card :actions="false" class="card-no-border">
            <div slot="headerCustom">
              <div class="header-top">
                <h5 class="m-0">notification</h5>
                <div class="card-header-right-icon">
                  <select class="button btn btn-primary">
                    <option>Today</option>
                    <option>Tomorrow</option>
                    <option>Yesterday</option>
                  </select>
                </div>
              </div>
            </div>
            <div slot="with-padding">
              <div class="media">
                <div class="media-body">
                  <p>
                    20-04-2020
                    <span>10:10</span>
                  </p>
                  <h6>
                    Updated Product
                    <span class="dot-notification"></span>
                  </h6>
                  <span>Quisque a consequat ante sit amet magna...</span>
                </div>
              </div>
              <div class="media">
                <div class="media-body">
                  <p>
                    20-04-2020
                    <span class="pl-1">Today</span>
                    <span class="badge badge-secondary">New</span>
                  </p>
                  <h6>
                    Tello just like your product
                    <span class="dot-notification"></span>
                  </h6>
                  <span>Quisque a consequat ante sit amet magna...</span>
                </div>
              </div>
              <div class="media">
                <div class="media-body">
                  <div class="d-flex mb-3">
                    <div class="inner-img">
                      <img
                        class="img-fluid"
                        src="../../assets/images/notification/1.jpg"
                        alt="Product-1"
                      />
                    </div>
                    <div class="inner-img">
                      <img
                        class="img-fluid"
                        src="../../assets/images/notification/2.jpg"
                        alt="Product-2"
                      />
                    </div>
                  </div>
                  <span class="mt-3"
                    >Quisque a consequat ante sit amet magna...</span
                  >
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-xl-4 xl-50 appointment box-col-6">
          <px-card :actions="false">
            <div slot="headerCustom">
              <div class="header-top">
                <h5 class="m-0">notification</h5>
                <div class="card-header-right-icon">
                  <select class="button btn btn-primary">
                    <option>Today</option>
                    <option>Tomorrow</option>
                    <option>Yesterday</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div class="radar-chart">
                <div id="marketchart">
                  <apexchart
                    height="380"
                    type="radar"
                    :options="apexMarketValue.options"
                    :series="apexMarketValue.series"
                  ></apexchart>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-xl-4 xl-100 chat-sec box-col-6">
          <px-card :actions="false" class="chat-default card-no-border">
            <div slot="headerCustom">
              <div class="media media-dashboard">
                <div class="media-body">
                  <h5 class="mb-0">Chat</h5>
                </div>
                <div class="icon-box">
                  <i class="fa fa-ellipsis-h"></i>
                </div>
              </div>
            </div>
            <div slot="with-padding" class="chat-box">
              <div class="chat">
                <div class="media left-side-chat">
                  <div class="media-body d-flex">
                    <div class="img-profile">
                      <img
                        class="img-fluid"
                        src="../../assets/images/User.jpg"
                        alt="Profile"
                      />
                    </div>
                    <div class="main-chat">
                      <div class="message-main">
                        <span class="mb-0">Hi deo, Please send me link.</span>
                      </div>
                      <div class="sub-message message-main">
                        <span class="mb-0">Right Now</span>
                      </div>
                    </div>
                  </div>
                  <p class="f-w-400">7:28 PM</p>
                </div>
                <div class="media right-side-chat">
                  <p class="f-w-400">7:28 PM</p>
                  <div class="media-body text-right">
                    <div class="message-main pull-right">
                      <span class="mb-0 text-left">How can do for you</span>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div class="media left-side-chat">
                  <div class="media-body d-flex">
                    <div class="img-profile">
                      <img
                        class="img-fluid"
                        src="../../assets/images/User.jpg"
                        alt="Profile"
                      />
                    </div>
                    <div class="main-chat">
                      <div class="sub-message message-main mt-0">
                        <span>It's argenty</span>
                      </div>
                    </div>
                  </div>
                  <p class="f-w-400">7:28 PM</p>
                </div>
                <div class="media right-side-chat">
                  <div class="media-body text-right">
                    <div class="message-main pull-right">
                      <span class="loader-span mb-0 text-left" id="wave">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="input-group">
                  <input
                    class="form-control"
                    id="mail"
                    type="text"
                    placeholder="Type Your Message..."
                    name="text"
                  />
                  <div class="send-msg">
                    <feather type="send"></feather>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-xl-4 col-lg-12 xl-50 calendar-sec box-col-6">
          <px-card>
            <div slot="with-padding" class="chat-box">
              <div class="setting-dot">
                <div
                  class="setting-bg-primary date-picker-setting position-set pull-right"
                >
                  <i class="fa fa-spin fa-cog"></i>
                </div>
              </div>
              <functional-calendar></functional-calendar>
            </div>
          </px-card>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
    <BasicPersonalInfoForm />
  </div>
</template>
<script>
import BasicPersonalInfoForm from "../../components/modals/basicinfo.vue"

var primary = localStorage.getItem("primary_color") || "#7366ff"
var secondary = localStorage.getItem("secondary_color") || "#f73164"

var Knob = require("knob")
var ordervalue = Knob({
  value: 35,
  angleOffset: 90,
  className: "review",
  thickness: 0.2,
  width: 65,
  height: 65,
  fgColor: primary
})
var productvalue = Knob({
  value: 60,
  angleOffset: 90,
  className: "review",
  thickness: 0.2,
  width: 65,
  height: 65,
  fgColor: primary
})

export default {
  data() {
    return {
      events: [
        {
          title: "event1",
          start: "2010-01-01"
        },
        {
          title: "event2",
          start: "2010-01-05",
          end: "2010-01-07"
        },
        {
          title: "event3",
          start: "2010-01-09T12:30:00",
          allDay: false
        }
      ],
      smallchart1: {
        chartData_1: {
          labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7"],
          series: [
            [400, 900, 800, 1000, 700, 1200, 300],
            [1000, 500, 600, 400, 700, 200, 1100]
          ]
        },
        chartOptions: {
          stackBars: true,
          axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0
          },
          axisY: {
            low: 0,
            showGrid: false,
            showLabel: false,
            offset: 0,
            labelInterpolationFnc: function (value) {
              return value / 1000 + "k"
            }
          }
        },
        eventHandlers: [
          {
            event: "draw",
            fn(data) {
              if (data.type === "bar") {
                data.element.attr({
                  style: "stroke-width: 3px"
                })
              }
            }
          }
        ]
      },
      smallchart2: {
        chartData_1: {
          labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7"],
          series: [
            [400, 600, 900, 800, 1000, 1200, 500],
            [1000, 800, 500, 600, 400, 200, 900]
          ]
        },
        chartOptions: {
          stackBars: true,
          axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0
          },
          axisY: {
            low: 0,
            showGrid: false,
            showLabel: false,
            offset: 0,
            labelInterpolationFnc: function (value) {
              return value / 1000 + "k"
            }
          }
        },
        eventHandlers: [
          {
            event: "draw",
            fn(data) {
              if (data.type === "bar") {
                data.element.attr({
                  style: "stroke-width: 3px"
                })
              }
            }
          }
        ]
      },
      smallchart3: {
        chartData_1: {
          labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7"],
          series: [
            [1100, 900, 600, 1000, 700, 1200, 300],
            [300, 500, 800, 400, 700, 200, 1100]
          ]
        },
        chartOptions: {
          stackBars: true,
          axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0
          },
          axisY: {
            low: 0,
            showGrid: false,
            showLabel: false,
            offset: 0,
            labelInterpolationFnc: function (value) {
              return value / 1000 + "k"
            }
          }
        },
        eventHandlers: [
          {
            event: "draw",
            fn(data) {
              if (data.type === "bar") {
                data.element.attr({
                  style: "stroke-width: 3px"
                })
              }
            }
          }
        ]
      },
      smallchart4: {
        chartData_1: {
          labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7"],
          series: [
            [400, 600, 800, 1000, 700, 1100, 300],
            [1000, 500, 600, 300, 700, 200, 1100]
          ]
        },
        chartOptions: {
          stackBars: true,
          axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0
          },
          axisY: {
            low: 0,
            showGrid: false,
            showLabel: false,
            offset: 0,
            labelInterpolationFnc: function (value) {
              return value / 1000 + "k"
            }
          }
        },
        eventHandlers: [
          {
            event: "draw",
            fn(data) {
              if (data.type === "bar") {
                data.element.attr({
                  style: "stroke-width: 3px"
                })
              }
            }
          }
        ]
      },
      apexDashboard: {
        options: {
          chart: {
            width: 685,
            height: 240,
            type: "area",
            toolbar: {
              show: false
            }
          },
          colors: [primary, secondary],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "smooth"
          },
          xaxis: {
            type: "category",
            low: 0,
            offsetX: 0,
            offsetY: 0,
            show: false,
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
              "Jan"
            ],
            labels: {
              low: 0,
              offsetX: 0,
              show: false
            },
            axisBorder: {
              low: 0,
              offsetX: 0,
              show: false
            }
          },
          yaxis: {
            low: 0,
            offsetX: 0,
            offsetY: 0,
            show: false,
            labels: {
              low: 0,
              offsetX: 0,
              show: false
            },
            axisBorder: {
              low: 0,
              offsetX: 0,
              show: false
            }
          },
          markers: {
            strokeWidth: 3,
            colors: "#ffffff",
            strokeColors: [primary, secondary],
            hover: {
              size: 6
            }
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.5,
              stops: [0, 80, 100]
            }
          },
          legend: {
            show: false
          },
          tooltip: {
            x: {
              format: "MM"
            }
          },
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0,
              bottom: -15,
              top: -40
            }
          }
        },
        series: [
          {
            name: "series1",
            data: [6, 20, 15, 40, 18, 20, 18, 23, 18, 35, 30, 55, 0]
          },
          {
            name: "series2",
            data: [2, 22, 35, 32, 40, 25, 50, 38, 42, 28, 20, 45, 0]
          }
        ]
      },
      apexMarketValue: {
        options: {
          chart: {
            width: 505,
            height: 380,
            type: "radar",
            toolbar: {
              show: false
            }
          },
          colors: [primary],
          dataLabels: {
            enabled: false
          },
          labels: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          stroke: {
            width: 3,
            curve: "smooth"
          },
          plotOptions: {
            radar: {
              size: 140,
              polygons: {
                fill: {
                  colors: ["#fcf8ff", "#f7eeff"]
                }
              }
            }
          },
          markers: {
            size: 6,
            colors: ["#fff"],
            strokeColor: [primary],
            strokeWidth: 3
          },
          yaxis: {
            tickAmount: 7,
            labels: {
              formatter: function (val, i) {
                if (i % 2 === 0) {
                  return val
                } else {
                  return ""
                }
              }
            }
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val
              }
            }
          }
        },
        series: [
          {
            name: "Market value",
            data: [20, 100, 40, 30, 50, 80, 33]
          }
        ]
      },
      greeting: "",
      time: ""
    }
  },
  mounted() {
    var d = new Date()
    var curHr = this.addZero(d.getHours())
    var curMi = this.addZero(d.getMinutes())
    var meridiem = curHr >= 12 ? "PM" : "AM"
    this.time = curHr + ":" + curMi + " " + meridiem
    if (curHr < 12) {
      this.greeting = "Good morning!"
    } else if (curHr < 18) {
      this.greeting = "Good afternoon!"
    } else {
      this.greeting = "Good evening!"
    }
    document.getElementById("ordervalue").append(ordervalue)
    document.getElementById("productvalue").append(productvalue)
  },
  methods: {
    addZero(i) {
      if (i < 10) {
        i = "0" + i
      }
      return i
    }
  },
  components: {
    BasicPersonalInfoForm
  }
}
</script>

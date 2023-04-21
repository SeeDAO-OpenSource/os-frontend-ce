<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid" style="padding-top: 40px">
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
                    <p>{{ $t("Today-Welcome") }}</p>
                    <div class="whatsnew-btn">
                      <a href="javascript:void(0)" class="btn btn-primary">{{
                        $t("Today-Headlines")
                      }}</a>
                      <!-- <b-button v-b-modal.basicinfo variant="primary"
                          >Vertically centered</b-button
                        > -->
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
                    <h5>Level 3</h5>
                    <p class="font-roboto">
                      <b>{{ $t("Contributor-Level") }}</b>
                    </p>
                  </div>
                  <div class="col-xl-12 p-0 left_side_earning">
                    <h5>124,568 <small>/ 300,000</small></h5>
                    <p class="font-roboto">
                      <b>{{ $t("Score-Total") }}</b>
                    </p>
                  </div>
                  <div class="col-xl-12 p-0 left_side_earning">
                    <h5>4353 <small>/ 3000</small></h5>
                    <p class="font-roboto">
                      <b>{{ $t("Score-Earned-This-Season") }}</b>
                    </p>
                  </div>
                  <div class="col-xl-12 p-0 left_side_earning">
                    <h5>2342342 <small>/ 20000</small></h5>
                    <p class="font-roboto">
                      <b>{{ $t("Effective-Score") }}</b>
                    </p>
                  </div>
                  <div class="col-xl-12 p-0 left-btn">
                    <a class="btn btn-gradient"
                      ><b>{{ $t("Earn-Score-Now") + " !" }}</b></a
                    >
                  </div>
                </div>
              </div>
              <div class="col-xl-9 p-0">
                <div class="chart-right">
                  <div class="row m-0 p-tb">
                    <div class="col-xl-8 col-md-8 col-sm-8 col-12 p-0">
                      <div class="inner-top-left">
                        <ul class="d-flex list-unstyled">
                          <li>{{ $t("This-Season") }}</li>
                          <li>{{ $t("This-Week") }}</li>
                          <li>{{ $t("This-Month") }}</li>
                          <li class="active">{{ $t("All") }}</li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="col-xl-4 col-md-4 col-sm-4 col-12 p-0 justify-content-end"
                    >
                      <div class="inner-top-right">
                        <ul class="d-flex list-unstyled justify-content-end">
                          <li>{{ $t("Score-Total-abbr") }}</li>
                          <li>{{ $t("Effective-Score-abbr") }}</li>
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
                        <h6>
                          <b>{{ $t("Score-Total-Ranking") }}</b>
                        </h6>
                        <p>#52 <small>/ 10000</small></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-12 pr-0">
                    <div class="media p-0">
                      <div class="media-left">
                        <i class="icofont icofont-cur-dollar"></i>
                      </div>
                      <div class="media-body">
                        <h6>
                          <b>L3 {{ $t("Score-Total-Ranking") }}</b>
                        </h6>
                        <p>#52 <small>/ 10000</small></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-6 col-sm-6">
                    <div class="media p-0">
                      <div class="media-left bg-secondary">
                        <i class="icofont icofont-heart-alt"></i>
                      </div>
                      <div class="media-body">
                        <h6>
                          <b>S2 {{ $t("Score-This-Season-Ranking") }}</b>
                        </h6>
                        <p>#3 <small>/ 300</small></p>
                      </div>
                    </div>
                  </div>
                </div>
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
                <h5 class="m-0">
                  <b>{{ $t("Latest-Activity") }}</b>
                </h5>
                <div class="card-header-right-icon">
                  <select class="button btn btn-primary">
                    <option>{{ $t("Today") }}</option>
                    <option>{{ $t("Yesterday") }}</option>
                    <option>{{ $t("Tomorrow") }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div class="news-update media">
                <div class="media-body">
                  <h6>
                    <a href="#"
                      ><b>{{ $t("Activity-ex1") }}</b></a
                    >
                  </h6>
                  <span
                    ><b>{{ $t("Activity-ex1-Action-Item") }} ...</b></span
                  ><span class="time-detail d-block text-right"
                    ><i data-feather="clock"></i>10 Minutes Ago</span
                  >
                </div>
              </div>
              <div class="news-update media">
                <div class="media-body">
                  <h6>
                    <a href="#"
                      ><b>{{ $t("Activity-ex2") }}</b></a
                    >
                  </h6>
                  <span
                    ><b>{{ $t("Activity-ex2-Action-Item") }} ...</b></span
                  ><span class="time-detail d-block text-right"
                    ><i data-feather="clock"></i>1 Hour Ago</span
                  >
                </div>
              </div>
              <div class="news-update media">
                <div class="media-body">
                  <h6>
                    <a href="#"
                      ><b>{{ $t("Activity-ex3") }}</b></a
                    >
                  </h6>
                  <span
                    ><b>{{ $t("Activity-ex3-Action-Item") }} ...</b></span
                  ><span class="time-detail d-block text-right"
                    ><i data-feather="clock"></i>8 Hour Ago</span
                  >
                </div>
              </div>
            </div>
            <div slot="footer">
              <div class="bottom-btn">
                <a href="#">{{ $t("See-More") }}</a>
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
                    <h5 class="m-0">
                      <b>{{ $t("Get-Invited") }}</b>
                    </h5>
                    <div class="card-header-right-icon">
                      <select class="button btn btn-primary">
                        <option>{{ $t("All") }}</option>
                        <option>{{ $t("Proposals") }}</option>
                        <option>{{ $t("Projects") }}</option>
                        <option>{{ $t("Guilds") }}</option>
                        <option>{{ $t("City-Hall") }}</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="appointment-table table-responsive">
                    <table class="table table-bordernone">
                      <tbody>
                        <tr>
                          <td class="img-content-box">
                            <span class="d-block">Venter Loren</span>
                            <span class="font-roboto"
                              ><b>{{ $t("Invited-ex1") }}</b></span
                            >
                          </td>
                          <td class="text-right">
                            <div class="button btn btn-success">
                              {{ $t("Accept") }}
                            </div>
                            &nbsp;
                            <div class="button btn btn-outline-primary">
                              <font color="gray">X</font>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="img-content-box">
                            <span class="d-block mt-4">John Loren</span>
                            <span class="font-roboto"
                              ><b>{{ $t("Invited-ex2") }}</b></span
                            >
                          </td>
                          <td class="text-right">
                            <div class="button btn btn-primary mt-4">
                              {{ $t("Review") }}
                            </div>
                            &nbsp;
                            <div class="button btn btn-outline-primary mt-4">
                              <font color="gray">X</font>
                            </div>
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
                    <h5 class="m-0">
                      <font color="black" size="5"
                        ><b>{{ $t("Announcement") }}</b></font
                      >
                    </h5>
                    <div class="dot-right-icon">
                      <feather type="more-horizontal"></feather>
                    </div>
                  </div>
                </div>
                <div slot="with-padding">
                  <div class="body-bottom">
                    <h6>{{ $t("Announcement-ex1-title") }}</h6>
                    <span class="font-roboto"
                      >{{ $t("Announcement-ex1-details") }}...</span
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
                <h5 class="m-0">
                  <b>{{ $t("Notifications") }}</b>
                </h5>
                <div class="card-header-right-icon">
                  <select class="button btn btn-primary">
                    <option>{{ $t("All") }}</option>
                    <option>{{ $t("Events") }}</option>
                    <option>{{ $t("Governance") }}</option>
                    <option>{{ $t("Personal-Info") }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div slot="with-padding">
              <div class="media">
                <div class="media-body">
                  <p>
                    20-04-2023
                    <span>22:10</span>
                  </p>
                  <h6>
                    <a href="#"><b>{{ $t("Notifications-ex1-title") }}</b></a>
                    <span class="dot-notification"></span>
                  </h6>
                  <span>{{ $t("Notifications-ex1-details") }}</span>
                </div>
              </div>
              <div class="media">
                <div class="media-body">
                  <p>
                    20-04-2023
                    <span class="pl-1">20:00</span>
                    <span class="badge badge-secondary">{{ $t("Online-Event") }}</span>
                  </p>
                  <h6>
                    <a href="#"><b>{{ $t("Notifications-ex2-title") }}</b></a>
                    <span class="dot-notification"></span>
                  </h6>
                  <span>{{ $t("Notifications-ex2-details") }}</span>
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
                </div>
              </div>
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
            [400, 400+900, 400+900+800, 400+900+800+1000, 400+900+800+1000+700, 400+900+800+1000+700+1200, 400+900+800+1000+700+1200+300],
            [1000, 1000+500, 1000+500+600, 1000+500+600+400, 1000+500+600+400+700, 1000+500+600+400+700+200, 1000+500+600+400+700+200+1100]
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
          [400, 400+900, 400+900+800, 400+900+800+1000, 400+900+800+1000+700, 400+900+800+1000+700+1200, 400+900+800+1000+700+1200+300],
            [1000, 1000+500, 1000+500+600, 1000+500+600+400, 1000+500+600+400+700, 1000+500+600+400+700+200, 1000+500+600+400+700+200+1100]
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
          [400, 400+900, 400+900+800, 400+900+800+1000, 400+900+800+1000+700, 400+900+800+1000+700+1200, 400+900+800+1000+700+1200+300],
            [1000, 1000+500, 1000+500+600, 1000+500+600+400, 1000+500+600+400+700, 1000+500+600+400+700+200, 1000+500+600+400+700+200+1100]
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
          [400, 400+900, 400+900+800, 400+900+800+1000, 400+900+800+1000+700, 400+900+800+1000+700+1200, 400+900+800+1000+700+1200+300],
            [1000, 1000+500, 1000+500+600, 1000+500+600+400, 1000+500+600+400+700, 1000+500+600+400+700+200, 1000+500+600+400+700+200+1100]
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
            name: this.$t("Score-Total-abbr"),
            data: [400, 400+900, 400+900, 400+900+800, 400+900+800+1000+700, 400+900+800+1000+700+1200, 400+900+800+1000+700+1200+300]
          },
          {
            name: this.$t("Effective-Score-abbr"),
            data: [1000, 1000+500, 1000+500+600, 1000+500+400, 1000+500+600+400+700, 1000+500+600+400+700, 1000+500+600+400+700+200+1100]
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
      this.greeting = this.$t("Good-Morning") + "!"
    } else if (curHr < 18) {
      this.greeting = this.$t("Good-Afternoon") + "!"
      this.greeting = "Good afternoon!"
    } else {
      this.greeting = this.$t("Good-Evening") + "!"
    }
    // document.getElementById("ordervalue").append(ordervalue)
    // document.getElementById("productvalue").append(productvalue)
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


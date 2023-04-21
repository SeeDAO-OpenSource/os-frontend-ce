<template>
    <div>
        <Breadcrumbs title="Calendar"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
              <div class="col-xl-3">
                <div class="card calender-form">
                  <div class="card-body">
                    <form @submit.prevent="addEvent" method="post" class="form theme-form">
                      <div class="row">
                        <div class="col-12">
                          <div class="form-group">
                            <label class="f-w-600">Title:</label>
                            <input class="form-control" type="text" v-model="newevent.title">
                          </div>
                        </div>
                        <div class="col-12">
                          <label class="f-w-600">Start Date:</label>
                          <div class="form-group">
                            <datepicker input-class="datepicker-here form-control digits" :format="format" v-model="newevent.startDate" ></datepicker>
                          </div>
                        </div>
                        <div class="col-12">
                          <label class="f-w-600">End Date:</label>
                          <div class="form-group">
                            <datepicker input-class="datepicker-here form-control digits" :format="format" v-model="newevent.endDate" ></datepicker>
                          </div>
                        </div>
                        <div class="col-12">
                          <button class="btn btn-primary">Add Event</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-xl-9">
                <div class="card">
                    <div class="card-header">
                      <h5 class="card-title">Basic</h5>
                      <span>This is the basic example having navigation button to navigate next and previous months and today button. This basic example lists all the events on the calendar.</span>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-12">

                          <calendar-view
                            :show-date="showDate"
                            :events="events"
                            :enable-drag-drop="true"
                            @drop-on-date="onDrop"
                            class="theme-default holiday-us-traditional holiday-us-official">

                            <calendar-view-header slot="header" slot-scope="t" :header-props="t.headerProps" @input="setShowDate" />
                          </calendar-view>

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
  import { CalendarView, CalendarViewHeader, CalendarMathMixin } from 'vue-simple-calendar';
  import Datepicker from 'vuejs-datepicker';

  export default {
    components: {
      CalendarView,
      CalendarViewHeader,
      Datepicker
    },
    mixins: [CalendarMathMixin],
    data() {
      return {
        format: 'yyyy-MM-dd',

        newevent:{
          title:'',
          startDate:'',
          endDate:''
        },
        showDate: new Date(),
        events: [
          {
            startDate: '2019-4-17',
            endDate: '2019-4-19',
            title: 'Sample event 1',
          },
          {
            startDate: '2019-4-21',
            endDate: '2019-4-21',
            title: 'Sample event 2',
          },
          {
            startDate: '2019-4-23',
            endDate: '2019-4-23',
            title: 'Sample event 3',
          },
          {
            startDate: '2019-4-25',
            endDate: '2019-4-25',
            title: 'Sample event 4',
          },
          {
            startDate: '2019-4-29',
            endDate: '2019-4-29',
            title: 'Sample event 5',
          },
        ]
      };
    },
    methods: {
      setShowDate(d) {
        this.showDate = d;
      },
      onDrop(event, date) {
        this.message = `You dropped ${event.id} on ${date.toLocaleDateString()}`;
        // Determine the delta between the old start date and the date chosen,
        // and apply that delta to both the start and end date to move the event.
        const eLength = this.dayDiff(event.startDate, date);
        event.originalEvent.startDate = this.addDays(event.startDate, eLength);
        event.originalEvent.endDate = this.addDays(event.endDate, eLength);
      },
      addEvent(){
        this.events.push({
          title:this.newevent.title,
          startDate:this.newevent.startDate,
          endDate:this.newevent.endDate,
        });
        this.newevent.title = '',
        this.newevent.startDate = '',
        this.newevent.endDate = '';
      }
    }
  };
</script>
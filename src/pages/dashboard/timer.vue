<template>
  <div>
    <span><span class="time digits" v-text="days"></span
    ><span class="title">:</span>
    <span class="time digits" v-text="String(hours).padStart(2,'0')"></span
    ><span class="title">:</span>
    <span class="time digits" v-text="String(minutes).padStart(2,'0')"></span
    ><span class="title">:</span>
    <span class="time digits" v-text="String(seconds).padStart(2,'0')"></span
    ></span>
  </div>
</template>
<script>
export default {
  props: ["startTime", "endTime"],
  data() {
    return {
      td: 0,
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1
    }
  },
  mounted() {
    if (this.startTime !== undefined) {
      this.td =
        Date.parse(new Date(this.endTime)) -
        Date.parse(new Date(this.startTime))
    } else if (this.startTime === undefined) {
      this.td = Date.parse(new Date(this.endTime)) - Date.parse(new Date())
    }

    if (this.td >= 0) {
      this.seconds = this.td
      this.minutes = this.seconds * 60
      this.hours = this.minutes * 60
      this.days = this.hours * 24
      this.timer()
    } else {
      this.seconds = this.minutes = this.hours = this.days = 0
    }
  },
  methods: {
    timer: function () {
      this.td = Date.parse(new Date(this.endTime)) - Date.parse(new Date())

      if (this.td >= 0) {
        this.seconds = Math.floor((this.td / 1000) % 60)
        this.minutes = Math.floor((this.td / 1000 / 60) % 60)
        this.hours = Math.floor((this.td / (1000 * 60 * 60)) % 24)
        this.days = Math.floor(this.td / (1000 * 60 * 60 * 24))
        setTimeout(this.timer, 1000)
      } else {
        this.seconds = this.minutes = this.hours = this.days = 0
      }
    }
  }
}
</script>

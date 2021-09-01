import Vue from 'vue'
import moment from 'moment'
moment.locale('es')


Vue.filter('date', val => {
  return moment(val, 'YYYY-MM-DD').format("DD MMMM YYYY")
})

Vue.filter('hora', val => {
  return moment(val, 'HH:mm:ss').format("HH:mm A")
})

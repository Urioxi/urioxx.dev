// Barre des tâches

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick = () => {
    navigation.classList.toggle('open');
}

const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
    item.onclick = () => {
        listItems.forEach(item => item.classList.remove('active'))
    item.classList.add('active')
}
})


Vue.config.productionTip = false

Vue.component('start', {
  template: '#start'
})

Vue.component('next', {
  template: '#next'
})

new Vue({
  el: '#app',
  
  data: {
    page: 'start'
  },
  
  methods: {
    onChangePage(to) {
      this.page = to
    }
  }
})
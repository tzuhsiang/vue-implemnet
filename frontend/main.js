// frontend/main.js
const { createApp } = Vue

createApp({
  template: '#app-template',
  data() {
    return {
      message: 'Vue 前端運作中',
      backendMsg: '',
      currentView: 'home'
    }
  },
  methods: {
    async fetchBackend() {
      try {
        const res = await fetch('/api/hello')
        const data = await res.json()
        console.log('Backend response:', data)
        this.backendMsg = data.message
      } catch (e) {
        console.log('Fetch error:', e)
        this.backendMsg = '無法連線到後端'
      }
    }
  }
}).mount('#app')

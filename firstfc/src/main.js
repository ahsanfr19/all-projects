import { createApp } from 'vue'

import App from './App.vue'
// import FoodItem from './components/FoodItem.vue'
import Comptwo from './components/Comptwo.vue'

const app = createApp(App)
app.component('Comp-two', Comptwo)
// app.component('food-item', FoodItem)
app.mount('#app');
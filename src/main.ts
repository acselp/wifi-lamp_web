import { createApp } from 'vue'
import App from './App.vue'
import naive from "naive-ui";

const app = createApp(App);

app.mount('#app');
app.use(naive);

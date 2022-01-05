import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);

const app = createApp({
  render: () => h(App),
});
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(store);
app.use(router);
app.mount('#app');

app.mixin({
  created() {
    this.setRem();
    window.addEventListener('resize',this.setRem)
  },
  methods: {
    setRem() {
      let width = window.innerWidth;
      if (width < 768) {
        if (width > 414) {
          document.documentElement.style.fontSize = '10px';
        } else {
          document.documentElement.style.fontSize = (width / 414)*10 + 'px';
        }
      }
      else{
        document.documentElement.style.fontSize = '10px';
      }
    },
  },
});

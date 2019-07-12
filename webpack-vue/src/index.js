import Vue from 'vue';
import App from './app.vue';

import './assets/style/common.css';
import './assets/style/common.styl';
import './assets/images/tim1.gif';

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render: h => h(App)
}).$mount(root);

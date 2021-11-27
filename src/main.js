import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import ContactMe from './components/ContactMe.vue';
import KiraExistance from './components/KiraExistance.vue'
import SayHi from './components/SayHi.vue'
const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('contact-me', ContactMe);
app.component('kira-existance', KiraExistance);
app.component('say-hi', SayHi);
app.mount('#app');

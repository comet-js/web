import { createApp } from 'vue'
import App from './App.vue'
import PrimaryButton from './components/PrimaryButton.vue';
import router from './router'
import TerminalCommand from './components/TerminalCommand.vue';
import SecondaryButton from './components/SecondaryButton.vue';

createApp(App)
    .component('primary-button', PrimaryButton)
    .component('secondary-button', SecondaryButton)
    .component('terminal-command', TerminalCommand)
    .use(router)
    .mount('#app')

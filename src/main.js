import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBell, faUser, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faBell, faUser, faMagnifyingGlass, faStar, faFacebookF, faInstagram, faTwitter, faYoutube)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')

import './styles/main.css';
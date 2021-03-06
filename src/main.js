// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Add global components
import DefaultLayout from '~/layouts/Default.vue'
import DocsLayout from '~/layouts/Docs.vue'

import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faKeyboard, faRss, faCaretLeft, faCaretRight, faUserNinja, faHeart} from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '~/assets/css/tailwind.css'

// Make sure you tell Font Awesome to skip auto-inserting CSS into the <head>
config.autoAddCss = false
library.add(faGithub, faKeyboard, faRss, faCaretLeft, faCaretRight, faWindowClose, faUserNinja, faHeart)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('DocsLayout', DocsLayout)
  Vue.component('font-awesome', FontAwesomeIcon)
  
  if (isClient) {
    // prevent tracking on development
    if (!window.location.host.startsWith('localhost')) {
      // Fathom
      (function(f, a, t, h, o, m){
        a[h]=a[h]||function(){
          (a[h].q=a[h].q||[]).push(arguments)
        };
        o=f.createElement('script'),
        m=f.getElementsByTagName('script')[0];
        o.async=1; o.src=t; o.id='fathom-script';
        m.parentNode.insertBefore(o,m)
      })(document, window, '//analytics.panapro.de/tracker.js', 'fathom');
      fathom('set', 'siteId', 'XQYAD');
      fathom('trackPageview');
    }
  }
}



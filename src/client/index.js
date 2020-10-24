import './styles/style.scss'
import './styles/mediaQuery.scss'
import './media/pexels-porapak-apichodilok-346885.jpg'
import { retrieveGeoData } from './js/RetrieveGeoData'

import { myListeners } from './js/addListeners'

window.addEventListener('DOMContentLoaded', function () {
    myListeners()
});

export { myListeners }
export { retrieveGeoData }

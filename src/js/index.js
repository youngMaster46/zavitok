import '../sass/style.scss'
import Gallery from './gallery'
import {
    getFirstClassName
} from './helpers'
import menu from './menu'
import answer from './form'
console.log(answer)
console.log(menu)

const location = window.location.pathname
const mainPage = location == '/' || location == '/index.html'
const galleryPage = location == '/gallery.html'
if (mainPage || galleryPage) {
    const bagda = new Gallery('gallery__wrapper')
    // set up auto slide on main page
    if (mainPage) {
        bagda.moveGallery(5000)

        const leftBut = getFirstClassName('gallery__arrowLeft')
        const rightBut = getFirstClassName('gallery__arrowRight')

        // on user click auto slide will be stopped via this.stopGallery()
        leftBut.addEventListener('click', () => {
            bagda.moveLeft()
            bagda.stopGallery()
        })
        rightBut.addEventListener('click', () => {
            bagda.moveRight()
            bagda.stopGallery()

        })
    }
}
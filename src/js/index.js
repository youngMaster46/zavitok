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
    if (mainPage) {
        const bagda = new Gallery('gallery__wrapper')
        // set up auto slide on main page
        bagda.moveGallery(5000)

        const leftBut = getFirstClassName('gallery__arrowLeft', 0)
        const rightBut = getFirstClassName('gallery__arrowRight', 0)

        // on user click auto slide will be stopped via this.stopGallery()
        leftBut.addEventListener('click', () => {
            bagda.moveLeft()
            bagda.stopGallery()
        })
        rightBut.addEventListener('click', () => {
            bagda.moveRight()
            bagda.stopGallery()

        })
    } else if (galleryPage) {

        const leftButtons = document.getElementsByClassName('gallery__arrowLeft')
        const rightButtons = document.getElementsByClassName('gallery__arrowRight')
        for (let i = 0; i < leftButtons.length; i++) {
            let gallery = new Gallery('gallery__wrapper', i)

            let leftBut = leftButtons[i]
            let rightBut = rightButtons[i]
            leftBut.addEventListener('click', () => {
                gallery.moveLeft()
                gallery.stopGallery()
            })
            rightBut.addEventListener('click', () => {
                gallery.moveRight()
                gallery.stopGallery()

            })
        }

    }
}
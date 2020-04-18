import '../sass/style.scss'
import Gallery from './gallery'
import {
    getFirstClassName
} from './helpers'

console.log(answer)
const bagda = new Gallery('gallery__wrapper')

const leftBut = getFirstClassName('gallery__arrowLeft')
const rightBut = getFirstClassName('gallery__arrowRight')

leftBut.addEventListener('click', () => {
    bagda.moveLeft()
})
rightBut.addEventListener('click', () => {
    bagda.moveRight();
})
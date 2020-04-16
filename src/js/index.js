import '../sass/style.scss'
import Gallery from './gallery'

function getFirstClassName(elem) {
    return document.getElementsByClassName(elem)[0]
}

const bagda = new Gallery('gallery__wrapper')

const leftBut = getFirstClassName('arrowLeft')
const rightBut = getFirstClassName('arrowRight')

leftBut.addEventListener('click', () => {
    bagda.moveLeft()
})
rightBut.addEventListener('click', () => {
    bagda.moveRight();
})





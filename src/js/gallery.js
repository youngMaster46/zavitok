import {
    getFirstClassName
} from "./helpers";

class Gallery {
    constructor(galleryName) {
        // get parent
        this.parentWrapper = getFirstClassName(galleryName);
        // get array of children
        this.childrensElems = getFirstClassName(galleryName).childNodes;
        // transform nodelist into array
        this._transformElems();
        // automatically moving gallery
        // get hidden element (helper) for animation of gallery
        this.translateBlock = getFirstClassName('gallery__translateBlock');
        this.interval = '';

    }
    moveGallery(ms) {
        this.interval = setInterval(() => {
            this.moveRight()
        }, ms)
    }
    stopGallery() {
        clearInterval(this.interval)
    }
    _transformElems() {
        // mutable
        this.childrensElems.forEach(e => e.className !== 'gallery__elem' ? e.remove() : '')
        this.childrensElems = Array.from(this.childrensElems)

    }
    moveLeft() {
        const firstElem = this.childrensElems.shift();
        this.childrensElems.push(firstElem);
        this.insertDOM();
        debugger;
    }
    insertDOM() {
        this.parentWrapper.innerHTML = ''

        for (let i = 0; i < this.childrensElems.length; i++) {
            this.parentWrapper.insertAdjacentElement('beforeend', this.childrensElems[i])
        }
    }
    moveRight() {
        const lastElem = this.childrensElems.pop();
        this.childrensElems.unshift(lastElem);
        this.insertDOM();

    }
}


export default Gallery;
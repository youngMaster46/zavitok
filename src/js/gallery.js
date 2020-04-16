class Gallery {
    constructor(galleryName) {
        this.childrensElemsArray
        // get parent
        this.parentWrapper = document.getElementsByClassName(galleryName)[0];
        // get array of children
        this.childrensElems = document.getElementsByClassName(galleryName)[0].childNodes;
        this._transformElems();
        this._moveGallery();
    }
    _moveGallery() {
        setInterval(() => {
            this.moveRight();
        }, 5000)
    }
    _transformElems() {
        // mutable
        this.childrensElems.forEach(e => e.className !== 'gallery__elem' ? e.remove() : '')
        this.childrensElemsArray = Array.from(this.childrensElems)

    }

    moveLeft() {

        const firstElem = this.childrensElemsArray.shift();
        this.childrensElemsArray.push(firstElem);
        this.insertDOM();
    }
    insertDOM() {
        this.parentWrapper.innerHTML = ''

        for (let i = 0; i < this.childrensElemsArray.length; i++) {
            this.parentWrapper.insertAdjacentElement('beforeend', this.childrensElemsArray[i])
        }
    }
    moveRight() {
        const lastElem = this.childrensElemsArray.pop();
        this.childrensElemsArray.unshift(lastElem);
        this.insertDOM();

    }



}

export default Gallery;
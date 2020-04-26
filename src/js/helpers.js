export const getFirstClassName = (elem, number = 0) => {
    return document.getElementsByClassName(elem)[number]
}
export const reduceImages = (parent) => {
    let mainListchld = Array.from(getFirstClassName(parent).children)
    mainListchld.forEach(child => child.addEventListener('click', () => {
        funcImg(child)
    }))
}

function funcImg(child) {
    if (child.children[0].tagName.toLowerCase() == 'img') {
        child.children[0].classList.toggle('scale2x')
    } else if (child.children[0].children[0].tagName.toLowerCase() == 'img') {
        child.children[0].children[0].classList.toggle('scale2x')
    }
}
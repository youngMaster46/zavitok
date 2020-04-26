import {
    getFirstClassName
} from "./helpers"

const menuBtn = getFirstClassName('menu-btn')
const mymenu = getFirstClassName('header-navigation')
const createBack = () => {
    let back = document.createElement('div')
    back.style.position = 'fixed'
    back.style.zIndex = 1
    back.style.top = 0
    back.style.right = 0
    back.style.bottom = 0
    back.style.left = 0
    back.classList.add('max')
    back.style.background = "rgba(0,0,0,.8)"
    document.body.append(back)
}
const deleteBack = () => {
    const back = getFirstClassName('max')
    if (back) {
        back.remove()
    }
}
const toggleBack = () => {
    const back = getFirstClassName('max')
    if (!back) {
        createBack()
    } else if (back) {
        deleteBack()
    }
}
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-btn_active')
    mymenu.classList.toggle('header-navigation_active')
    toggleBack()
})
export default menuBtn
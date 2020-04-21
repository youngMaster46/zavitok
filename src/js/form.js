import {
    getFirstClassName
} from "./helpers";
import InputError from "./errors";
const answer = '';
const form = document.forms['my-form']
const checkName = (n) => {
    if (n.value.length > 2) {
        return true;
    }
}
const checkTel = (t) => {
    let res = /(^[7|8]{0,1}\d{10}$)|(^\+7{1}\d{10}$)/.test(t.value)
    return res;
}
const nameElem = new InputError('name', "Некорректное имя")
const telElem = new InputError('tel', "Некорректный телефон")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = form.elements.name
    const tel = form.elements.tel
    const text = form.elements.text
    if (checkName(name) && checkTel(tel)) {
        InputError.removeError('name')
        InputError.removeError('tel')
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'request.php')
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                getFirstClassName('contact-us__heading', 1).innerHTML = xhr.response;
                name.value = ''
                tel.value = ''
                text.value = ''
            }
        }
        xhr.send(`name=${name.value}&tel=${tel.value}&text=${text.value}`)
    } else if (!checkName(name) && !checkTel(tel)) {
        nameElem.createError()
        telElem.createError()
    } else if (!checkName(name) && checkTel(tel)) {
        nameElem.createError()
        InputError.removeError('tel')
    }
    else if (checkName(name) && !checkTel(tel)) {
        telElem.createError()
        InputError.removeError('name')
    }
})
export default answer
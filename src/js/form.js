import {
    getFirstClassName
} from "./helpers";
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

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements.name
    const tel = form.elements.tel
    const text = form.elements.text
    if (checkName(name) && checkTel(tel)) {
        alert('check')
        //const request = `Клиент по имени '${name.value}' просит связаться по телефону '${tel.value}' и говорит '${text.value}'.`
        //ajax
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'request.php')
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                //answer
                alert('200')
                getFirstClassName('contact-us__heading', 1).textContent = xhr.response;
                name.value = '';
                tel.value = '';
                text.value = '';
            }
        }
        xhr.send(`Клиент по имени '${name.value}' просит связаться по телефону '${tel.value}' и говорит '${text.value}'.`)
    }
})
export default answer
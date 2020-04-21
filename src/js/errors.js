import { getFirstClassName } from "./helpers"
const form = document.forms['my-form']

class InputError {
    constructor (elemName, errorMessage) {
        this.elemName = elemName
        this.errorMessage = errorMessage
    }
    createError() {
        InputError.removeError(this.elemName)
        console.log('createError()')
        let errorDiv = document.createElement('div')
        errorDiv.style.color = 'red'
        errorDiv.style.textShadow = '1px 1px 1px black'
        errorDiv.innerHTML = this.errorMessage
        errorDiv.className = `${this.elemName}error`
        form.elements[`${this.elemName}`].insertAdjacentElement('afterend', errorDiv)
    }
    static removeError(elemName) {
        console.log('removeError()')
        const errorDiv = getFirstClassName(`${elemName}error`)
        if (errorDiv) {
            errorDiv.remove()
        }
    }
    
}

export default InputError
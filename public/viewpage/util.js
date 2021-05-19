import { resolve } from 'path/posix';
import * as Element from './element.js'
export function info(title, body, closeModal){
    if(closeModal) closeModal.hide() // if there's another modal up, then close the modal for another one to appear
    Element.modalInfoboxTitleElement.innerHTML = title;
    Element.modalInfoboxBodyElement.innerHTML = body;
    Element.modalInfobox.show();
}

//disables button temporarily after clicking
// export function disableButton(button){
//     button.disabled = true;
//     const label = button.innerHTML;
//     button.innerHTML = 'Wait...'
//     return label;
// }

// export function enableButton(button){
//     if(label) button.innerHTML = label;
//     button.disabled = false;
// }

// //time delay
// export function sleep(ms){
//     return new Promise(resolve=> setTimeout(resolve, ms));
// }

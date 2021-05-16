import * as Element from './element.js'
export function info(title, body, closeModal){
    if(closeModal) closeModal.hide() // if there's another modal up, then close the modal for another one to appear
    Element.modalInfoboxTitleElement.innerHTML = title;
    Element.modalInfoboxBodyElement.innerHTML = body;
    Element.modalInfobox.show();
}
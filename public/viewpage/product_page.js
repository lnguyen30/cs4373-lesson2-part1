import * as Element from './element.js'

export function addEventListeners(){
    //event listener when Product button is clicked, function is called in app.js
    Element.menuProducts.addEventListener('click', async ()=>{
        await product_page();
    })
}

export function product_page(){
    let html = `
        <div>
            <button id="button-add-product" class="btn btn-outline-danger">+ Add Product></button>
        <div>
    `;

    //inserts product page in the root tag of index html file
    Element.root.innerHTML = html;
}
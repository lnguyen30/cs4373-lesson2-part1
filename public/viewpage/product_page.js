import * as Element from './element.js'

export function addEventListeners(){
    //event listener when Product button is clicked, function is called in app.js
    Element.menuProducts.addEventListener('click', async ()=>{
        await product_page();
    });

    Element.formAddProduct.form.addEventListener('submit', e =>{
        e.preventDefault();
        //passes the form into addNewProduct
        addNewProduct(e.target);
    })
}

export function product_page(){
    let html = `
        <div>
            <button id="button-add-product" class="btn btn-outline-danger">+ Add Product></button>
        <div>
    `;

    //inserts add product button in the root tag of index html file
    Element.root.innerHTML = html;

    document.getElementById('button-add-product').addEventListener('click', ()=>{
        //triggers the add product modal to page
        Element.modalAddProduct.show();
    })
}

function addNewProduct(form){
    const name = form.name.value;
    const price = form.price.value;
    const summary = form.summary.value;
}
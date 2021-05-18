import { Product } from '../model/product.js';
import * as Element from './element.js'

let imageFile2Upload

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

    Element.formAddProduct.imageButton.addEventListener('change', e=>{
        imageFile2Upload = e.target.files[0]; // form file attribute at index 0
        //if image is null, dont proceed
        if(!imageFile2Upload) {
            //resets image tag after trying to add then cancel 
            Element.formAddProduct.imageTag.src = null;
            return
        };
        //reads the img file uploaded
        const reader = new FileReader();
        //loads image src file to tag and previews the pic
        reader.onload = () => Element.formAddProduct.imageTag.src = reader.result
        reader.readAsDataURL(imageFile2Upload);
    });

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

    //creates new product
    const product = new Product({name, price, summary});
    //validate product form, if errors occurs then messages are returned
    const errors =  product.validate(imageFile2Upload);

    Element.formAddProduct.errorName.innerHTML = errors.name ? errors.name : '';
    Element.formAddProduct.errorPrice.innerHTML = errors.price ? errors.price : '';
    Element.formAddProduct.errorSummary.innerHTML = errors.summary ? errors.summary : '';
    Element.formAddProduct.errorImage.innerHTML = errors.image ? errors.image : '';

    if (Object.keys(errors).length !=0) return; //if errors exists


}


import * as Constant from '../model/constant.js'
export async function signIn (email, password){
    await firebase.auth().signInWithEmailAndPassword(email, password);
}

export async function signOut(){
    await firebase.auth().signOut();
}

//imports cloud function from to client side
const cf_addProduct = firebase.functions().httpsCallable('cf_addProduct')
export async function addProduct(product){
    await cf_addProduct(product);

}

//upload image to firestore
export async function uploadImage(imageFile, imageName){
    //if image name does not exist, then assign one to imageName
    if(!imageName)
        imageName = Date.now() + imageFile.name;
    
    const ref = firebase.storage().ref()
                        .child(Constant.storageFolderNames.PRODUCT_IMAGES + imageName);//where the image will be stored

    const taskSnapShot = await ref.put(imageFile); //uploads file with the path name
    const imageURL = await taskSnapShot.ref.getDownloadURL(); // gets url of uploaded image 
    return {imageName, imageURL};
}


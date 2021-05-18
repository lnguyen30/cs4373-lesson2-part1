const functions = require("firebase-functions");


const admin = require("firebase-admin");

const serviceAccount = require("./account_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

//imports js file
const Constant = require('./constant.js')

//cf_addProduct will reference addProduct, client will call on cf_addProduct 
exports.cf_addProduct = functions.https.onCall(addProduct);

//context is implicitly provided, gives context on who is calling function
async function addProduct(data, context){
    // data: serialized product object
    try{
        await admin.firestore().collection(Constant.collectionNames.PRODUCT)
                    addProduct(data);
    }catch (e){
        if(Constant.DEV) console.log(e);
    }
    
}




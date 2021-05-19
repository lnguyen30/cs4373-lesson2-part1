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

//returns true or false if the email passed in is an admin account
function isAdmin(email){
    return Constant.adminEmails.includes(email);
}

//context is implicitly provided, gives context on who is calling function
async function addProduct(data, context){

    //displays error message if function is invoked by non-admin
    if(!isAdmin(context.auth.token.email)){
        if(Constant.DEV) console.log('not admin', context.auth.token.email);
        throw new functions.https.HttpsError('unauthenticated', 'Only admins may invoke this function');
    }


    // data: serialized product object
    try{
        await admin.firestore().collection(Constant.collectionNames.PRODUCT)
                    .add(data);
    }catch (e){
        if(Constant.DEV) console.log(e);
        throw new functions.https.HttpsError('internal', 'addProduct Failed');
    }
    
}




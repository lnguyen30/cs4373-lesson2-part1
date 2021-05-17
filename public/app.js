import * as Route from './controller/route.js'
import * as Auth from './controller/auth.js'

window.onload = ()=>{
    const pathname = window.location.pathname;
    const hash = window.location.hash;

    Route.routing(pathname, hash);
}

Auth.addEventListeners();
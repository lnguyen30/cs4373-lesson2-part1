import * as Element from './element.js'
import * as Route from '../controller/route.js'

export function addEventListeners(){
    Element.menuUsers.addEventListener('click', ()=>{
        history.pushState(null, null, Route.routePathname.USERS)
        user_page();
    })
}

export function user_page(){
    Element.root.innerHTML = `
         <h1>Welcome to User Management Page</h1>
    `
 }
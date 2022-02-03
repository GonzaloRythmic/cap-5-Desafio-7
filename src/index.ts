import "./components/text/text"
import "./components/header/header"
import "./components/cards/cards"
import "./components/todo-item/todoitem"
import { formInput } from "./components/input/input"
import {initRouter} from "./router"
import {initPage} from "./components/page/page"

function main () {
    
    const root = document.querySelector(".root");
    const page = initPage();
    initRouter(root, page)
    formInput();
}

main ();
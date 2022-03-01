
customElements.define(
    "my-todo-item", 
    class extends HTMLElement {
        shadow: ShadowRoot;
        title: string;
        checked: boolean = false;
        todoId: string;

        constructor() {
            super();
            this.shadow = this.attachShadow({mode: "open"});
            this.title = this.getAttribute("title") || "";
            this.checked = this.hasAttribute("checked");
            this.todoId = this.getAttribute("todo-id");
            
            const style = document.createElement("style");
            style.innerHTML = `
            .root {

            }
           
            .checkbox {
                display: flex;
                flex-direction: row-reverse;
            }
            .custom-text.checked{
                font-family: "Roboto";
                font-size: 18px;
                text-decoration: 

            }
            `;
            this.shadow.appendChild(style);
            this.render();

        }

        render() {
            const trashImage = require("../imagen/delete1.png");
            const div = document.createElement("div")
            div.innerHTML = `
            <div class = "root">
                <div class="custom-text ${this.checked ? "checked" : ""}">
                ${this.title}
                </div>
                <div class = "checkbox">
                <input type= "checkbox" ${this.checked ? "checked" : ""}> 
                </div>
                <div class = "trash-img">
                <img src=${trashImage} alt="">
                </div>
            </div>`
            console.log(div.querySelector(".root"))
        ;
        }
    }
)


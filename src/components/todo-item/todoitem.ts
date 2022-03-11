import { state } from "../../state";

customElements.define(
    "todo-item", 
    class extends HTMLElement {
        shadow: ShadowRoot;
        title: string;
        checked: boolean | string;
        todoId: string;
        completed: boolean | string;

        constructor() {
            super();
            this.shadow = this.attachShadow({mode: "open"});
            this.render();
        }
        
        conecetedCallback () {
            this.title = this.getAttribute("title") || "";
            this.checked = JSON.parse(this.getAttribute("checked"));
            this.todoId = this.getAttribute("todo-id");
            this.completed = this.getAttribute("completed");
            
            const style = document.createElement("style");
            style.innerHTML = `
            .checkbox {
                display: flex;
                flex-direction: row-reverse;
            }
            .custom-text{
                font-family: "Roboto";
                font-size: 18px;
                
    
            }
            .trash-img{
                display: flex;
                flex-direction: row-reverse;
            }
            .checkbox-el{
    
            }
            .todo-item{
                display: grid;
                grid-template: 1fr / minmax(0, 1fr) 25px;
                column-gap: 7.5px;
                margin-top: 30px;
            }
            `;
            this.render();
            this.shadow.appendChild(style);

        }

        addCallbacks() {
            const checkboxEl = this.shadow.querySelector(".checkbox-el  ");
            checkboxEl.addEventListener("click", (e)=>{ 
                const target = e.target as any;
                console.log(target)
                // state.changeState()
            })

        }

        
        render() {
            const trashImage = require("../imagen/delete1.png");
            const div = document.createElement("div")
            div.innerHTML = `
            <div class = "todo-item" completed = "false">
                <div class="custom-text ${this.checked ? "checked" : ""}">
                    ${this.title}
                </div>
                <div class = "interactive-container">
                    <div class = "checkbox">
                        <input class = "checkbox-el" type= "checkbox" ${this.checked ? "checked" : ""}> 
                    </div>
                    <div class = "trash-img">
                        <img src=${trashImage} alt="">
                    </div>
                </div>
            </div>
            `;
            this.shadow.appendChild(div);
            this.addCallbacks();
            console.log(this.checked)
        }
    }
)
            
        
        


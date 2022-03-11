import { state } from "../../state";
import { initPage } from "../page/page";

export function formInput () {
    class Input extends HTMLElement {
        constructor (){
            super();
            this.render();
        }
        render (){
            const div = document.createElement("div");
            const shadow = this.attachShadow({ mode: "open"});
            const style = document.createElement("style");
        
            style.innerHTML = `
                *{
                    box-sizing: border-box;
                }
                .input { 
                    width: 100% ;
                    height: 55px;
                    padding: 3px;
                    border-radius: 4px;
                }
                .label {
                    font-family: "Roboto";
                    font-size: 18px;
                }
                .button {
                    background-color: #9CBBE9;
                    max-width: 100%;
                    font-family: "Roboto";
                    font-size: 22px;
                    margin-top: 12px;
                }
                `;
            
            div.innerHTML = `
           <label class = "label">Nuevo pendiente</label>
           <input class = "input" type = text placeholder = "Ingrese nueva tarea"/>
           <button class = "button">Agregar</button> `;


           
           shadow.appendChild(div);
           shadow.appendChild(style);
           
           const butEl = shadow.querySelector("button");
           butEl.addEventListener("click", (e)=>{
               e.preventDefault();
               const inputEl = shadow.querySelector("input");
               const value = inputEl.value;
               state.addTask(value);
               console.log(value)

               const items = state.getActiveTasks();
               function createTasks (task){
                    const listaDeItemsHtml = task.map((item)=>{
                        return `<my-todo-item title="${item.title}" checked= ${item.completed ? "checked" : ""} ></my-todo-item> `
                    });
                    const listaEl = div.querySelector(".lista");
                    listaEl.innerHTML = listaDeItemsHtml.join("");
                    console.log(listaEl);
                    state.suscribe(()=>{
                        createTasks(items)
                    });
                    createTasks (items);
                }
            })
           

        }
    }
        customElements.define ("input-component", Input);

        
}
import { state } from "../../state";

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
            div.className = "input"
    
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
           butEl.addEventListener("submit", (e)=>{
            e.preventDefault();
            const f = e.target as any;
            // state.addItem(f.text.value);
           })
           console.log(butEl);

        }
    }
        customElements.define ("input-component", Input);
    
}
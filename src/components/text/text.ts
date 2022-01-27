import {state} from "../../state"

// export function initText () {  >>> estaría exportando la funcion entera. 
class TextComponent extends HTMLElement {
    shadow: ShadowRoot;
    tagName: string;
    tags: string [] = ["h1", "p"];
    tag: string = "p";

    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open"})

        if (this.tags.includes(this.getAttribute("tag"))) {
            this.tag = this.getAttribute("tag") || this.tag;
        }
        // console.log(this.tag);

        this.render();
    }

    render (){
        const style = document.createElement ("style");
        style.innerHTML = `
            .title {
                font-family: "Roboto";
                font-size: 52px;
            }
            .paragraph {
                font-family: "Roboto";
                font-size: 18px;
            }
        `
        const rootEl = document.createElement(this.tag);
        if (this.tag == "h1") {
            rootEl.className = "title";
        } else {
            rootEl.className = "paragraph"
        }
        rootEl.textContent = this.textContent;
        this.shadow.appendChild(rootEl);
        this.shadow.appendChild(style);
    }
}

customElements.define("my-text", TextComponent);
// }

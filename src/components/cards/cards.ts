class CardComponent extends HTMLElement {
    shadow: ShadowRoot;
    constructor (){
        super();    
        this.shadow = this.attachShadow({mode: "open"}); 

        this.render();
        
        const style = document.createElement("style");
        style.innerHTML = `
        .card { 
            border-radius: 4px;
            padding: 22px 13px;
            background-color:#FFF599;
        }
        .trash-img {
            display: flex;
            flex-direction: row-reverse;
        }
    `;
    
    this.shadow.appendChild(style);
    }
    render (){
        const trashImage = require("../imagen/delete1.png");
        this.shadow.innerHTML = `
            <div class = "card">
            ${this.innerHTML}
            <div class = "trash-img">
                <img src=${trashImage} alt="">
            </div>
            </div>
        `
    }
}
    customElements.define ("card-component", CardComponent);

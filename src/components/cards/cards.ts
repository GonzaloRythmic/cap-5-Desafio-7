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
    `;
    
    this.shadow.appendChild(style);
    }
    render (){
        const trashImage = require("url:../../components/imagen/delete1.png");
        this.shadow.innerHTML = `
            <div class = "card">
            ${this.innerHTML}
            </div>
            <div>
                <img src="src="${trashImage}"" alt="">
            </div>
        `
    }
}
    customElements.define ("card-component", CardComponent);

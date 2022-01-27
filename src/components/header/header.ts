

class HeaderComponent extends HTMLElement {
    constructor (){
        super();
        this.render();
    }
    render (){
        const header = document.createElement("header");
        const shadow = this.attachShadow({ mode: "open"});
        const style = document.createElement("style");
        header.className = "header"

        style.innerHTML = `
            .header { 
                width: 100% ;
                height: 60px;
                background-color:#FF8282;
                font-family: "Roboto";
                font-size: 22px;
                display: flex;
                align-items: center;
                justify-content: center;


            }`;

        header.textContent = this.textContent;

        shadow.appendChild(header);
        shadow.appendChild(style);
            
    }
}
    customElements.define ("header-component", HeaderComponent);

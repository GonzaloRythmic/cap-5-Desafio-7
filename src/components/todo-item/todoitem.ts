
customElements.define(
    "my-todo-item", 
    class extends HTMLElement {
        shadow: ShadowRoot;
        title: string;
        checked: boolean;

        constructor() {
            super();
            this.shadow = this.attachShadow({mode: "open"});
            this.title = this.getAttribute("title") || "";
            this.checked = JSON.parse(this.getAttribute("checked")) || "";

            const style = document.createElement("style");
            style.innerHTML = `
            .root {
                font-size: 18px;
            }
            `;
            this.shadow.appendChild(style);
            this.render();
        }

        render() {
            this.shadow.innerHTML =`
                <card-component>
                    <h4>${this.title}</h4>
                    <div>
                    <input type="checkbox" ${this.checked ? "checked" : ""}/>
                    </div>
                </card-component>
            `;
        }
    }
)
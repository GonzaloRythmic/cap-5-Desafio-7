
customElements.define(
    "my-todo-item", 
    class extends HTMLElement {
        shadow: ShadowRoot;
        title: string;
        checked: boolean;
        todoId: string;

        constructor() {
            super();
            this.shadow = this.attachShadow({mode: "open"});
            this.title = this.getAttribute("title") || "";
            this.checked = JSON.parse(this.getAttribute("checked")) || "false";
            console.log(this.checked)
            this.todoId = this.getAttribute("todo-id");

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
            this.shadow.innerHTML = `
            <div class="todo-item">
                <p class="todo-item__text ${
                    this.checked ? "checked-text" : ""
                }">${this.title}</p>
                <div class="todo-item__interactive">
                    <input type="checkbox" ${
                        this.checked ? "checked" : ""
                    } class="interactive-checkbox" />
                </div>
            </div>`
        ;
        }
    }
)


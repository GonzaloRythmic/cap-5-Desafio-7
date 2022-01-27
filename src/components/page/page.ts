import { state } from "../../state";

export function initPage(elemento?) {
  const div = document.createElement("div");
  const currentState = state.getState();
  const tasks = currentState.tasks;
  console.log("soy los tasks", tasks);
  const listaTasks = tasks.map((t)=>{
    `<my-todo-item title = "${t.title}" checked = "${t.completed}">hola</my-todo-item>`
  })
  console.log("soy la lista de tasks" , listaTasks);

  div.innerHTML = `
    <header-component>Header</header-component>
    <my-text class = "title" tag ="h1">Mis pendientes</my-text>
    <ul>
      ${listaTasks.join("")}
    </ul>
    `;

  return div
}
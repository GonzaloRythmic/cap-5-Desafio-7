import { state } from "../../state";
// import { formInput } from "../../components/input/input"


export function initPage(elemento?) {
  const div = document.createElement("div");
  state.init;
  const currentState = state.getState();
  const tasks = currentState.tasks;
  console.log("soy los tasks", tasks);
  const listaTasks = tasks.map((t)=>{
   return  `<my-todo-item title = ${t.title} checked = ${t.checked}></my-todo-item>`
  })
  console.log("soy la lista de tasks" , listaTasks);
  

  div.innerHTML = `
    <header-component>Header</header-component>
    <my-text class = "title" tag ="h1">Mis pendientes</my-text>
    <input-component></input-component>
    <ul class = "ul-list">
      ${listaTasks.join("")}
    </ul>
    `;

  return div
}
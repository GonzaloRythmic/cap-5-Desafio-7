import { state } from "../../state";
// import { formInput } from "../../components/input/input"


export function initPage(elemento?) {
  const div = document.createElement ("div");

  const items = state.getActiveTasks();

  const style = document.createElement("style");
  style.innerHTML = `
  .lista {
    border-radius: 4px;
    padding: 22px 13px;
    background-color:#FFF599;
    font-size: 18px;
    }
  `
  
  div.innerHTML = `
  <header-component>Header</header-component>
  <my-text class = "title" tag ="h1">Mis pendientes</my-text>
  <input-component></input-component>
  <ul class="lista"></ul>
  `;
 
  
  div.appendChild(style);
  
  function createTasks (task){
    const listaDeItemsHtml = task.map((item)=>{
      return `<my-todo-item title="${item.title}" checked= ${item.completed ? "checked" : ""} ></my-todo-item> `
    });
    const listaEl = div.querySelector(".lista");
    listaEl.innerHTML = listaDeItemsHtml.join("");
    console.log(listaEl);
  }

  createTasks (items);
  
  
  state.suscribe(()=>{createTasks(items)});
  

  return div
}
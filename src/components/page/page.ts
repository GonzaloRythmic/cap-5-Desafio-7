import { state } from "../../state";
// import { formInput } from "../../components/input/input"


export function initPage(elemento?) {
  const div = document.createElement ("div");

  const items = state.getActiveTasks();

  const style = document.createElement("style");
  style.innerHTML = `
  *{
    box-sizing: border-box;
    }
  .lista {
    border-radius: 4px;
    padding: 22px 13px;
    background-color:#FFF599;
    font-size: 18px;
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
  }`
  
  div.innerHTML = `
  <header-component>Header</header-component>
  <my-text class = "title" tag ="h1">Mis pendientes</my-text>
  <label class = "label">Nuevo pendiente</label>
  <input class = "input" type = text placeholder = "Ingrese nueva tarea"/>
  <button class = "button">Agregar</button>
  <ul class="lista"></ul>
  `;
 
  div.appendChild(style);

  function createTasks (task){
    const listaDeItemsHtml = task.map((item)=>{
      return `<my-todo-item title="${item.title}" checked= ${item.completed ? "checked" : ""} ></my-todo-item> `});
      const listaEl = div.querySelector(".lista");
      listaEl.innerHTML = listaDeItemsHtml.join("");
    }

  state.suscribe(()=>{createTasks(state.getActiveTasks())});
  createTasks (items);
  
  const butEl = div.querySelector("button");
  
  butEl.addEventListener("click", (e)=>{
    e.preventDefault();
    const inputEl = div.querySelector("input");
    const value = inputEl.value;
    state.addItem(value + Math.random())
  });
      
return div;
} 
    
    
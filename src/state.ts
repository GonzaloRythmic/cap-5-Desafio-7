const state = {
    data: {
        tasks:[ {title: "Tarea 1" , completed: true },
                {title: "Tarea 2" , completed: false },
                {title: "Tarea 3" , completed: false,  deleted: true }
        ],
    },
    listener: [], 
    // Initializer
    init() {
        // Get the local data
        const localData = JSON.parse(localStorage.getItem("saved-tasks"));

        // If localData returns "null", do nothing
        if (!localData) {
            return;
        } else {
            this.setState(localData);
        }
    },
    getState(){
        return this.data;
    },
    setState(newState) {
        this.data = newState;

        // Save the changes made to the state
        localStorage.setItem("saved-tasks", JSON.stringify(this.data));

        for (const cbFunction of this.listener) {
            cbFunction(newState);
        }
    },
    suscribe(callback: (any)=> any ){   //recibe una función (callback)
        this.listener.push(callback);   //agrega lo que tiene que hacer el listener. 
        for (const cb of this.listener) {
            cb();
        }
    },
    addItem(title){
        const currentState = this.getState();
        currentState.tasks.push({title: title});
        this.setState(currentState);
        console.log("soy el estate y me agregaron esto:",currentState);
    },
    // Only active/existing tasks getter
    getActiveTasks() {
        const currentState = this.getState();

        return currentState.tasks.filter((t) => !t.deleted);
    },   

    // Delete task method
    deleteTask(taskId: string) {
        // Get the current state
        const currentState = this.getState();

        // Find the task that needs to be deleted
        const foundTask = currentState.tasks.find(
            (t) => t.id == parseInt(taskId)
        );

        // Change the task deleted property
        foundTask.deleted = true;

        this.setState(currentState);
    },
};

export {state};

// ... el triple punto se conoce como "spread" y sirve para mezclar los datos
//es decir, si utilizo por ejemplo:
//state.setState({apellido: cortez}) y quiero mezclarlo con lo que ya estaba dentro del state
//deberia escribirlo asi:

// state.setState({...lastState
//                    apellido: cortez});

//si lo escribiese al reves ganaria el apellido que está escrito ya en el "lastState"
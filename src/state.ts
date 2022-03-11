const state = {
    data: {
        tasks:[],
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
    changeState (newState){
        const currentState = state.getActiveTasks()
        currentState.task.checked = newState.checked

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
    addTask(taskText: string) {
        // Get the current state
        const currentState = this.getState();

        // Aux variables
        const TASK_LIMIT = 200;
        const currentIds = currentState.tasks.map((t) => t.id);

        // Just a test
        if (currentIds.length == TASK_LIMIT) {
            alert(
                "You have reached the tasks limit!\nExecute localStorage.clear() (Only for devs ;))"
            );

            return;
        }

        // Generate the task id
        let taskId = Math.floor(Math.random() * TASK_LIMIT) + 1;

        // In case that the task id is repeated, generate other until it is not
        while (currentIds.includes(taskId)) {
            taskId = Math.floor(Math.random() * TASK_LIMIT) + 1;
        }

        // Create the new task
        const newTask = {
            id: taskId,
            text: taskText,
            completed: false,
            deleted: false,
        };

        // Push the new task to the current tasks collection
        currentState.tasks.push(newTask);

        this.setState(currentState);
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
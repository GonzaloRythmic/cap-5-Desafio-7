const state = {
    data: {
        tasks:[{title: "primer item", completed: false},
        {title: "segundo item", completed: true}]
    },
    listener: [], 
    getState(){
        return this.data;
    },
    setState(newState){
        this.data = newState;
    },
    suscribe(callback: (any)=> any ){   //recibe una función (callback)
        this.listener.push(callback);   //agrega lo que tiene que hacer el listener. 
        for (const cb of this.listener) {
            cb();
        }
    },
    addItem(item){
        const currentState = this.getState();
        currentState.list.push(item);
        this.setState(currentState);
    }   
};

export {state};

// ... el triple punto se conoce como "spread" y sirve para mezclar los datos
//es decir, si utilizo por ejemplo:
//state.setState({apellido: cortez}) y quiero mezclarlo con lo que ya estaba dentro del state
//deberia escribirlo asi:

// state.setState({...lastState
//                    apellido: cortez});

//si lo escribiese al reves ganaria el apellido que está escrito ya en el "lastState"
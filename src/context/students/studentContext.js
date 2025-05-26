import React, { useReducer } from "react"

export const StudentContext = React.createContext()
const studentReducer =(state, action)=>{
    switch (action.type) {
        case 'fetch':
            state=[...action.payload]
        case 'search':
            state=[...action.payload]
        case 'delete':
            const newState = state.filter(elem => elem.id !==action.id)
            state = [...newState]   
        default:
            return state
    }
}

const StudentContextProvider = (props)=>{
    const [students, dispatch] = useReducer(studentReducer, [])
    return(
        <StudentContext.Provider value={{students, dispatch}}>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentContextProvider
import React, {useState, useContext} from "react"

const  globalContext  = React.createContext()

const AppProvider = ({children}) => {
  const [tasks, setTasks] =useState ([])

  const addTask = (task) => {
    console.log("addTask")
    const id= Math.floor(Math.random() * 1000 ) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
    return <globalContext.Provider value={{
        tasks,
        setTasks,
        addTask,
    }}>
        {children}
    </globalContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(globalContext)
}

export { globalContext, AppProvider }
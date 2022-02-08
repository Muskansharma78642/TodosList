import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddTask from "./AddTask"
import Header from "./Header"
import Tasks from "./Tasks"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>  
          <Route index element={<Header />} /> 
          <Route path="/addTask" element={<AddTask />} />      
          <Route path="/tasks" element={<Tasks />} />      
        </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;

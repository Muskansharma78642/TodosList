import React from 'react';

const Task = ({id, text, day, removeTask}) => {
  return (
    <div className='task'>
      <h3>{text}</h3>
      <h3>{day}</h3>
      <button onClick={()=>removeTask(id)} className="btn">REMOVE TASK</button>
    </div>
  );
}

export default Task;

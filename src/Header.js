import React from 'react';
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
        <h1>TASK TRACKER</h1>
      <ul>
          <li>
              <Link to="addTask">ADD TASK</Link>
          </li>
          <li>
              <Link to="tasks">SHOW TASKS</Link>
          </li>
      </ul>
    </div>
  );
}

export default Header;

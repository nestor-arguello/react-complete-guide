import React from "react";
import Radium from 'radium';

import './Person.css';

const person = ({ 
  name, 
  age, 
  handleDeletePerson, 
  handleChangeName, 
  children 
}) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }
  
  return (
    <div className="Person" style={style}>
      <p onClick={handleDeletePerson}>
        I'm {name} and I am {age}!
      </p>
      <p>{children}</p>
      <input 
        type="text" 
        onChange={handleChangeName}
        value={name}
      />
    </div>
  );
}

export default Radium(person);
import React, { component } from 'react';
import PropTypes from 'prop-types';

const TextInputField = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.title}:</label>
      <input type="text" 
         id={props.name} 
         name={props.name} 
         value={props.value} 
         className="form-control" 
         onChange={props.onChange} />
    </div>
  )
}

export default TextInputField;

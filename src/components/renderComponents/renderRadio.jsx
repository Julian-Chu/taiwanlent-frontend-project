
import React from 'react';

  const renderRadio = (field) => {
    const { meta: { touched, error }, className, input, options } = field;
    const divClassName = `form-group ${touched && error ? 'alert-danger' : ''}`;
    // const inputClassName = `form-control ${touched && error ? 'alert-danger' : ''} `;
    return (
      <div className={className}>
        {options.map( o=> 
          <label key={o.value}>
            <input type="radio" {...input} value={o.value} checked={o.value === input.value} disabled={field.disabled}/>
             {o.title}
          </label>)}
            <div className={`text-help ${divClassName}`}>
               {touched ? error : ''}
            </div>
      </div>
    )
  }

  export default renderRadio;
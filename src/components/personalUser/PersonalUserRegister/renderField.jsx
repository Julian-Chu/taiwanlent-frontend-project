
import React from 'react';

  const renderField = (field) => {
    const { meta: { touched, error }, className } = field;
    const divClassName = `form-group ${touched && error ? 'alert-danger' : ''}`;
    const inputClassName = `form-control ${touched && error ? 'alert-danger' : ''} `;
    return (
      <div className={className}>
        <label htmlFor={field.name}>{field.title}:</label>
        <input type={field.type || "text"}
          className={inputClassName}
          {...field.input}
        />
        <div className={`text-help ${divClassName}`}>
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  export default renderField;
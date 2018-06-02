
import Select from 'react-select';
import React from 'react';

const renderSelect = (field) => {
    const { meta: { touched, error }, className, title } = field;
    const divClassName = `form-group ${touched && error ? 'alert-danger' : ''}`;
  return (
    <div className={className} >
      <label htmlFor={field.name} style={{ display: 'block' }}>{title}</label>
      <Select
        options={field.options}
        placeholder="Select regions"
        closeOnSelect={true}
        style={{ maxWidth: '340px' }}
        value={field.input.value}
        onChange={value => field.input.onChange(value)}
        onBlur={() => field.input.onBlur(field.input.value)}
        {...field.meta}
      />
        <div className={`text-help ${divClassName}`}>
          {touched ? error : ''}
        </div>
    </div>
  )
}

export default renderSelect;
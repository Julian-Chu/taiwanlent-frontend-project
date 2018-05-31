
import React from 'react';

const renderSelect = (field) => {
  const { className, title } = field;
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
    </div>
  )
}

export default renderSelect;
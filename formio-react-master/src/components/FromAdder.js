import React, { useState } from "react";

import './FormAdder.css'

const FromAdder = (props) => {
  const [fields, setFields] = useState([{ value: null, inputType: 'inputtext' }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    //values[i].inputType = values[i].inputType;

    setFields(values);
  }

  function handleChangeInput(i, event) {
    const values = [...fields];
    //values[i].value = values[i].value;
    values[i].inputType = event.target.value;
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null, inputType: 'inputtext' });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }


  return (
    <div>
        <form onSubmit={e => {
                    e.preventDefault()

                    props.history.push({
                      pathname: '/formaddernewform',
                      state: { fields:  fields} 
                    })
                }}>
            <h1>Adding Fields to Forms</h1>

            <button type="button" onClick={() => handleAdd()}>
                +
            </button>

            {fields.map((field, idx) => {
                return (
                <div key={`${field}-${idx}`} className="grid-container">
                    <select id="elementtype" name="elementtype" className="form-control choices__input" onChange={e => handleChangeInput(idx, e)}>
                        <option value="inputtext">Input Text</option>
                        <option value="email">Email Text</option>
                        <option value="dropdown">Dropdown Options</option>
                        <option value="date">Date Text</option>
                    </select>  
                    <input
                    type="text"
                    className="form-control grid-item"
                    placeholder="Enter Label Text"
                    value={field.value || ""}
                    onChange={e => handleChange(idx, e)}
                    />
                    <button type="button" className="grid-item" onClick={() => handleRemove(idx)}>
                    X
                    </button>
                </div>
                );
            })}

            <input type="submit" className="btn btn-primary btn-md" value="Submit" />
        </form>
    </div>
  );
}

export default FromAdder
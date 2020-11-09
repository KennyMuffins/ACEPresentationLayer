import React, { useState } from "react";

const FormsList = (props) => {

    const [fields, setFields] = useState([{ value: 'Full Name', inputType: 'inputtext' },
                                          { value: 'NRIC', inputType: 'inputtext'},
                                          { value: 'AOR Reference No', inputType: 'inputtext'}
                                          ]);

    function viewFormHandler() {
        props.history.push({
            pathname: '/formaddernewform',
            state: { fields:  fields} 
          })
    }

    function editFormHandler() {
        props.history.push({
            pathname: '/formadderedit',
            state: { fields:  fields} 
          })
    }

    return (
        <div>
            <button type="button" className="btn btn-primary btn-md" onClick={() => viewFormHandler()}>
                View Buy and Claim Form (Preview)
            </button>

            <hr />

            <button type="button" className="btn btn-primary btn-md" onClick={() => editFormHandler()}>
                Edit Buy and Claim Form
            </button>
        </div>
    )
}

export default FormsList

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Form, FormBuilder} from 'react-formio';

class FormBuilderComponent extends Component {

  constructor(props) {
    super()
    this.state = {
      formfieldTexts: props.formfieldTexts
    }

    console.log(this.state.formfieldTexts)
}

  onSubmit() {
    alert('Form submitted!')
  }

  render() {
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          console.log(e.target)

          let formfieldToSave = document.querySelectorAll('.builder-component .formio-component')

          let i = 0
          for (i=0; i < formfieldToSave.length; i++) {
            let currentElementToProcess = formfieldToSave[i]
            if (currentElementToProcess.querySelector('label') !== null) {
              //console.log(currentElementToProcess.querySelector('label').innerText)
            }     
          }

        }}>
          <FormBuilder form={{display: 'form'}} onSubmit={this.onSubmit} /> 
            <div>
              <input type='submit' className='btn btn-primary btn-md pull-right'value='Save Form' />
            </div>
        </form>
        
      </div>
    );
  }
}

export default connect(
)(FormBuilderComponent)

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Form} from 'react-formio';
import { AppConfig } from '../config';

const MyForm = class extends Component {
  render() {
    return (
      <div>
        <Form src={AppConfig.projectUrl + '/myform'} onSubmit={console.log} />
        </div>
    );
  }
}

export default connect(
)(MyForm)

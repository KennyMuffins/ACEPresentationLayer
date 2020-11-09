import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Form} from 'react-formio';
import axios from 'axios'

const FormGiftEvaluationJson = class extends Component {

  onSubmit(data) {
    alert('Form submitted!')
    console.log("FORMDATA", data.data)
    //Do my API calls to NodeJSACe(5000) -> Calls Camunda(Form Workflow Progression)

    

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
      }
    const res = axios.post(`http://localhost:5002/api/camunda/submitForm`, data.data, config)

  }

  render() {
    const formValuationJson = 
      {
        "_id": "5fa0afc100c3ad198fdb0932",
        "type": "form",
        "tags": [
          "common"
        ],
        "owner": "5f967bd200c3ad5f45db0925",
        "components": [
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Full Name",
            "key": "fullName",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "spellcheck": true,
            "validate": {
              "required": true,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "type": "textfield",
            "labelPosition": "top",
            "inputFormat": "plain",
            "tags": [],
            "properties": {}
          },
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Contact Number",
            "key": "contactNumber",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "spellcheck": true,
            "validate": {
              "required": true,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "type": "textfield",
            "labelPosition": "top",
            "inputFormat": "plain",
            "tags": [],
            "properties": {}
          },
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "email",
            "label": "Email",
            "key": "email",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "kickbox": {
              "enabled": false
            },
            "type": "email",
            "labelPosition": "top",
            "inputFormat": "plain",
            "tags": [],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {},
            "validate": {
              "required": true
            }
          },
          {
            "autofocus": false,
            "input": true,
            "inputType": "checkbox",
            "tableView": true,
            "label": "Gift Receipient?",
            "dataGridLabel": false,
            "key": "giftReceipient",
            "defaultValue": false,
            "protected": false,
            "persistent": true,
            "hidden": false,
            "name": "",
            "value": "",
            "clearOnHide": true,
            "validate": {
              "required": false
            },
            "type": "checkbox",
            "labelPosition": "right",
            "hideLabel": false,
            "tags": [],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {}
          },
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "label": "Country",
            "key": "country",
            "placeholder": "",
            "data": {
              "values": [
                {
                  "value": "singapore",
                  "label": "Singapore"
                },
                {
                  "value": "malaysia",
                  "label": "Malaysia"
                },
                {
                  "value": "taiwan",
                  "label": "Taiwan"
                }
              ],
              "json": "",
              "url": "",
              "resource": "",
              "custom": ""
            },
            "dataSrc": "values",
            "valueProperty": "",
            "defaultValue": "",
            "refreshOn": "",
            "filter": "",
            "authenticate": false,
            "template": "<span>{{ item.label }}</span>",
            "multiple": false,
            "protected": false,
            "unique": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "validate": {
              "required": true
            },
            "type": "select",
            "labelPosition": "top",
            "tags": [],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {}
          },
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Reason",
            "key": "reason",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "spellcheck": true,
            "validate": {
              "required": true,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "type": "textfield",
            "labelPosition": "top",
            "inputFormat": "plain",
            "tags": [],
            "properties": {}
          },
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Description",
            "key": "description",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "unique": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "spellcheck": true,
            "validate": {
              "required": false,
              "minLength": "",
              "maxLength": "",
              "pattern": "",
              "custom": "",
              "customPrivate": false
            },
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "type": "textfield",
            "labelPosition": "top",
            "inputFormat": "plain",
            "tags": [],
            "properties": {}
          },
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "label": "Upload File",
            "key": "uploadFile",
            "image": false,
            "imageSize": "200",
            "placeholder": "",
            "multiple": false,
            "defaultValue": "",
            "protected": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "filePattern": "*",
            "fileMinSize": "0KB",
            "fileMaxSize": "1GB",
            "type": "file",
            "labelPosition": "top",
            "tags": [],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {}
          },
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "label": "Valuation Date",
            "key": "valuationDate",
            "placeholder": "",
            "format": "yyyy-MM-dd hh:mm a",
            "enableDate": true,
            "enableTime": true,
            "defaultDate": "",
            "datepickerMode": "day",
            "datePicker": {
              "showWeeks": true,
              "startingDay": 0,
              "initDate": "",
              "minMode": "day",
              "maxMode": "year",
              "yearRows": 4,
              "yearColumns": 5,
              "minDate": null,
              "maxDate": null,
              "datepickerMode": "day"
            },
            "timePicker": {
              "hourStep": 1,
              "minuteStep": 1,
              "showMeridian": true,
              "readonlyInput": false,
              "mousewheel": true,
              "arrowkeys": true
            },
            "protected": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "validate": {
              "required": true,
              "custom": ""
            },
            "type": "datetime",
            "labelPosition": "top",
            "tags": [],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {}
          },
          {
            "autofocus": false,
            "input": true,
            "inputType": "checkbox",
            "tableView": true,
            "label": "For Disposal?",
            "dataGridLabel": false,
            "key": "forDisposal",
            "defaultValue": false,
            "protected": false,
            "persistent": true,
            "hidden": false,
            "name": "",
            "value": "",
            "clearOnHide": true,
            "validate": {
              "required": false
            },
            "type": "checkbox",
            "labelPosition": "right",
            "hideLabel": false,
            "tags": [],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {}
          },
          {
            "autofocus": false,
            "input": true,
            "inputType": "checkbox",
            "tableView": true,
            "label": "For Official Use?",
            "dataGridLabel": false,
            "key": "forOfficialUse",
            "defaultValue": false,
            "protected": false,
            "persistent": true,
            "hidden": false,
            "name": "",
            "value": "",
            "clearOnHide": true,
            "validate": {
              "required": false
            },
            "type": "checkbox",
            "labelPosition": "right",
            "hideLabel": false,
            "tags": [],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {}
          },
          {
            "autofocus": false,
            "input": true,
            "label": "Submit",
            "tableView": false,
            "key": "submit",
            "size": "md",
            "leftIcon": "",
            "rightIcon": "",
            "block": false,
            "action": "submit",
            "disableOnInvalid": false,
            "theme": "primary",
            "type": "button"
          }
        ],
        "display": "form",
        "submissionAccess": [
          {
            "roles": [],
            "type": "create_all"
          },
          {
            "roles": [
              "5f967bd200c3ad379edb0919"
            ],
            "type": "read_all"
          },
          {
            "roles": [
              "5f967bd200c3ad379edb0919"
            ],
            "type": "update_all"
          },
          {
            "roles": [
              "5f967bd200c3ad379edb0919"
            ],
            "type": "delete_all"
          },
          {
            "roles": [
              "5f967bd200c3ad0b26db0918"
            ],
            "type": "create_own"
          },
          {
            "roles": [
              "5f967bd200c3ad0b26db0918"
            ],
            "type": "read_own"
          },
          {
            "roles": [
              "5f967bd200c3ad0b26db0918"
            ],
            "type": "update_own"
          },
          {
            "roles": [
              "5f967bd200c3ad0b26db0918"
            ],
            "type": "delete_own"
          }
        ],
        "title": "Gift Evaluation",
        "name": "giftEvaluation",
        "path": "giftevaluation",
        "access": [
          {
            "roles": [
              "5f967bd100c3ad3a11db0917",
              "5f967bd200c3ad0b26db0918",
              "5f967bd200c3ad379edb0919"
            ],
            "type": "read_all"
          }
        ],
        "created": "2020-11-03T01:17:53.524Z",
        "modified": "2020-11-03T01:21:12.212Z",
        "machineName": "giftEvaluation"
      }
    

    return (
      <div>
        <Form src={formValuationJson} onSubmit={(data) => {
                                        this.onSubmit(data)
                                      }}/>
        </div>
    );
  }
}

export default connect(
)(FormGiftEvaluationJson)

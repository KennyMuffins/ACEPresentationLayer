import React, { useEffect, useState } from "react";
import {Form} from 'react-formio';

const FormAdderNewform = (props) => {

    const [formAdderJson, setFormAdderJson] = useState({
        _id: "5fa0afc100c3ad198fdb0932",
        type: "form",
        tags: [
          "common"
        ],
        owner: "5f967bd200c3ad5f45db0925",
        components: [
          
        ],
        display: "form",
        submissionAccess: [
          {
            roles: [],
            type: "create_all"
          },
          {
            roles: [
              "5f967bd200c3ad379edb0919"
            ],
            type: "read_all"
          },
          {
            roles: [
              "5f967bd200c3ad379edb0919"
            ],
            type: "update_all"
          },
          {
            roles: [
              "5f967bd200c3ad379edb0919"
            ],
            type: "delete_all"
          },
          {
            roles: [
              "5f967bd200c3ad0b26db0918"
            ],
            type: "create_own"
          },
          {
            roles: [
              "5f967bd200c3ad0b26db0918"
            ],
            type: "read_own"
          },
          {
            roles: [
              "5f967bd200c3ad0b26db0918"
            ],
            type: "update_own"
          },
          {
            roles: [
              "5f967bd200c3ad0b26db0918"
            ],
            type: "delete_own"
          }
        ],
        "title": "Form Adder",
        "name": "formadder",
        "path": "formadder",
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
        created: "2020-11-03T01:17:53.524Z",
        modified: "2020-11-03T01:21:12.212Z",
        machineName: "fromadder"
      });

    const fields = props.location.state.fields

    function createInputElementJson(value) {
        return {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": value,
            "key": value.replace(/\s/g,''),
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
          }
    }


    function createEmailElementJson(value) {
        return {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "email",
            "label": value,
            "key": value.replace(/\s/g,''),
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
          }
    }

    function createDropDownElementJson(value) {
        return {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "label": value,
            "key": value.replace(/\s/g,''),
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
          }
    }

    function createDateElementJson(value) {
        return {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "label": value,
            "key": value.replace(/\s/g,''),
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
          }
    }


    useEffect(() => {
        // Update form based on variables passed in
        function setUpForm() {
            let componentsJson = [];
            fields.map((field, idx) => {
                switch (field.inputType) {
                    case 'inputtext':
                        componentsJson.push(createInputElementJson(field.value))
                        break;
                    case 'email': 
                        componentsJson.push(createEmailElementJson(field.value))
                        break;
                    case 'dropdown': 
                        componentsJson.push(createDropDownElementJson(field.value))
                        break;
                    case 'date': 
                        componentsJson.push(createDateElementJson(field.value))
                        break;
                    default:
                        break;
                }
                
            })

             setFormAdderJson({
                ...formAdderJson,
                components : [
                    ...formAdderJson.components,
                    ...componentsJson
                ]
            })
        }

        setUpForm()
      },[]);

    return (
        <div>
             <Form src={formAdderJson} onSubmit={() => {
                                        console.log("Submitted")
                                      }}/>
        </div>
    )
}


export default FormAdderNewform
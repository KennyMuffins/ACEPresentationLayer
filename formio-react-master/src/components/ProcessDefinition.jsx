import React, {Component} from 'react'
import { connect } from 'react-redux';
import { baseurl } from './ProcessTemplateList'
import { AppConfig } from '../config';
import FormBuilderComponent from './FormBuilderComponent'

import parse from 'html-react-parser';

class ProcessDefinition extends Component {
    constructor(props) {
        super()
        this.state = {
            category: props.item.category,
            deploymentId: props.item.deploymentId,
            description: props.item.description,
            diagram: props.item.diagram,
            historyTimeToLive: props.item.historyTimeToLive,
            id: props.item.id,
            key: props.item.key,
            name: props.item.name,
            resource: props.item.resource,
            startableInTaskList: props.item.startableInTaskList,
            suspended: props.item.suspended,
            tenantId: props.item.tenantId,
            version: props.item.version,
            versionTag: props.item.versionTag,
            editTemplate: false,
            formfieldTexts: [
                { id: '0', label: '', type: ''}
            ],
            testVar: 'testVar'
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleClickEditTemplate = this.handleClickEditTemplate.bind(this)
    }

    async handleClick() {

        await this.getDeploymentResourceId()
        await this.getDeploymentResourceXML()
        this.deployNewProcess()
    }

    async handleClickEditTemplate() {
        await this.getDeploymentResourceId()
        await this.getDeploymentResourceXMLWithoutReplacing()

        this.setState({
            editTemplate: !this.state.editTemplate
        })
    }

    //To find all index of an occurence of searchStr in str
    getIndicesOf(searchStr, str, caseSensitive) {
        let searchStrLen = searchStr.length;
        if (searchStrLen === 0) {
            return [];
        }
        let startIndex = 0, index, indices = [];
        if (!caseSensitive) {
            str = str.toLowerCase();
            searchStr = searchStr.toLowerCase();
        }
        while ((index = str.indexOf(searchStr, startIndex)) > -1) {
            indices.push(index);
            startIndex = index + searchStrLen;
        }
        return indices;
    }

    async getDeploymentResourceId() {
        await fetch(`${baseurl}/deployment/${this.state.deploymentId}/resources`, {
            method: 'GET',
            referredPolicy: 'no-referrer-when-downgrade'
        })
            .then(result => result.json())
            .then(result => {
                result.forEach(resource => {
                    if (resource.name === this.state.resource) {
                        this.setState({
                            deploymentResourceId: resource.id
                        })
                    }
                })
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }

    async getDeploymentResourceXML() {
        await fetch(`${baseurl}/deployment/${this.state.deploymentId}/resources/${this.state.deploymentResourceId}/data`, {
            method: 'GET',
            referredPolicy: 'no-referrer-when-downgrade'
        })
            .then(result => result.text())
            .then(text => {
                // replace process attributes
                if (text.search(this.state.key) > 0) {
                    text = text.replace(this.state.key, this.state.customFormName)
                }
                if (text.search(this.state.name) > 0) {
                    text = text.replace(this.state.name, this.state.customFormId)
                }
                
                let formDataStartStr = "<camunda:formData>"
                let formDataEndStr = "</camunda:formData>"
                let formStartIndex = text.search(formDataStartStr) + formDataStartStr.length
                let formEndIndex = text.search(formDataEndStr)
                
                let textToReplace = text.substring(formStartIndex, formEndIndex)
                let newFormFields = "<camunda:formField id=\"text1\" type=\"string\" /><camunda:formField id=\"text2\" type=\"string\" />"
                
                this.setState({
                    deploymentForm: text.replace(textToReplace, newFormFields)
                })
            })
            .catch(err => console.log("ERROR: " + err))
    }

    async getDeploymentResourceXMLWithoutReplacing() {
        await fetch(`${baseurl}/deployment/${this.state.deploymentId}/resources/${this.state.deploymentResourceId}/data`, {
            method: 'GET',
            referredPolicy: 'no-referrer-when-downgrade'
        })
            .then(result => result.text())
            .then(text => {
                // replace process attributes
                if (text.search(this.state.key) > 0) {
                    text = text.replace(this.state.key, this.state.customFormName)
                }
                if (text.search(this.state.name) > 0) {
                    text = text.replace(this.state.name, this.state.customFormId)
                }
                

                let formDataStartStr = '<camunda:formField'
                let fromFieldEndStr = '/>'
                let startIndices = this.getIndicesOf(formDataStartStr, text);

                let i = 0
                for (i = 0; i < startIndices.length; i++) {
                    let endingIndex = text.indexOf(fromFieldEndStr, startIndices[i])
                    let formfieldText = text.substring(startIndices[i], endingIndex)
                    
                    //Retrieve ID
                    let idIndexStartStr = 'id="'
                    let idIndex = formfieldText.search(idIndexStartStr) + idIndexStartStr.length
                    let endingIdIndex = formfieldText.indexOf('"', idIndex)
                    let idContent = formfieldText.substring(idIndex, endingIdIndex)

                    //Retrieve Label
                    let labelIndexStartStr = 'label="'
                    let labelIndex = formfieldText.search(labelIndexStartStr) + labelIndexStartStr.length
                    let endinglabelIndex = formfieldText.indexOf('"', labelIndex)
                    let labelContent = formfieldText.substring(labelIndex, endinglabelIndex)

                    //Retrieve Type
                    let typeIndexStartStr = 'type="'
                    let typeIndex = formfieldText.search(typeIndexStartStr) + typeIndexStartStr.length
                    let endingtypeIndex = formfieldText.indexOf('"', typeIndex)
                    let typeContent = formfieldText.substring(typeIndex, endingtypeIndex)
                    
                    const testVar1 = this.state.formfieldTexts.filter(x => x.id === idContent)
                    //console.log(testVar1)

                    let newformfieldText = {id: idContent, label: labelContent, type: typeContent }

                    var newformfieldTexts = this.state.formfieldTexts.concat(newformfieldText)
                    this.setState({
                        formfieldTexts: newformfieldTexts
                    })

                    //console.log(this.state.formfieldTexts)
                }
            })
            .catch(err => console.log("ERROR: " + err))
    }

    async deployNewProcess(xmlData) {
        const formData = new FormData()

        formData.set('deployment-name', 'exampleDeploymentName')

        const blob = new Blob([this.state.deploymentForm], {type:'application/octet-stream'})
        formData.append('upload', blob, "filename.bpmn") // file extension is important

        const response = await fetch(`${baseurl}/deployment/create`, {
            method: 'POST',
            headers: {
                'Content-Length': '<calculated when request is sent>',
                'Host': '<calculated when request is sent>'
            },
            referredPolicy: 'no-referrer-when-downgrade',
            body: formData
        })
            .then(result => console.log("SUCCESS: ", result))
            .catch(err => console.log("ERROR: ", err))
        
    }

    render() {
        return (
            <div>
                -----------------------------------------------------------------
                <h2>Name: {this.state.name}</h2>
                <p>ID: {this.state.id}</p>
                <button className='btn btn-primary btn-md' onClick={this.handleClick}>Create a new {this.state.name} workflow</button>
                <hr />
                <button className='btn btn-primary btn-md' onClick={this.handleClickEditTemplate}>Create New Form from {this.state.name} Template</button>
                <hr />
                {this.state.editTemplate ? <FormBuilderComponent formfieldTexts={this.state.formfieldTexts} /> : null}       
            </div>
        )
    }
}

export default connect(
    )(ProcessDefinition)
    
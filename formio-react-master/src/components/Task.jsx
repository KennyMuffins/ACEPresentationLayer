import React, {Component} from 'react'
import { connect } from 'react-redux'
import { AppConfig } from '../config';
import { baseurl } from './ProcessTemplateList';

class Task extends Component {
    constructor(props) {
        super()
        this.state = {
            assignee: props.attr.assignee,
            caseDefinitionId: props.attr.caseDefinitionId,
            caseExecutionId: props.attr.caseExecutionId,
            caseInstanceId: props.attr.caseInstanceId,
            created: props.attr.created,
            delegationState: props.attr.delegationState,
            description: props.attr.description,
            due: props.attr.due,
            executionId: props.attr.executionId,
            followUp: props.attr.followUp,
            formKey: props.attr.formKey,
            id: props.attr.id,
            name: props.attr.name,
            owner: props.attr.owner,
            parentTaskId: props.attr.parentTaskId,
            priority: props.attr.priority,
            processDefinitionId: props.attr.processDefinitionId,
            processInstanceId: props.attr.processInstanceId,
            suspended: props.attr.suspended,
            taskDefinitionKey: props.attr.taskDefinitionKey,
            tenantId: props.attr.tenantId,

            formLoaded: false,
            resources: [],
            rooms: [<option>--- Select room ---</option>],
            roomValue: "",
            equipment: [<option>--- Select faulty equipment ---</option>],
            equipmentValue: "",
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.submitTask = this.submitTask.bind(this)
    }

    async handleClick() {
        if (!this.state.formLoaded) { 
            let equipmentResourceId = '5f8f9ef3fa655d4625767b5a'// hard coded id 
            let roomResourceId = '5f8fa6e2fa655d3397767b62'

            await this.getResourceData(equipmentResourceId, 'equipmentArr')
            await this.getResourceData(roomResourceId, 'roomArr')
            this.setUpForms()
            this.setAssignee()
            this.setState({formLoaded: true})
        }
    }

    handleChange(event) {
        let {id, value} = event.target
        this.setState({[id]: value})
    }

    async submitTask() {
        // Hard coded form
        let requestBody = JSON.stringify({
            variables: {
                    "equipment": {
                    "type": "String",
                    "value": this.state.equipmentValue,
                    "valueInfo": {}
                },
                "room": {
                    "type": "String",
                    "value": this.state.roomValue,
                    "valueInfo": {}
                }
            }
        })

        await fetch(`${baseurl}/task/${this.state.id}/submit-form`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        }).then(result => {
            alert("Submitted")
        }).catch(err => {})
    }

    render() {
        return (
            <div>
                <p>Task Name: {this.state.name}</p>
                <p>Task ID: {this.state.id}</p>
                <p>Assignee: {this.state.assignee}</p>
                <p>Description: {this.state.description}</p>
                <button onClick={this.handleClick}>Show task form variables</button>
                <p><select id="roomValue" onChange={this.handleChange}>Room{this.state.formLoaded && this.state.rooms}</select></p>
                <p><select id="equipmentValue" onChange={this.handleChange}>Equipment{this.state.formLoaded && this.state.equipment}</select></p>
                <button onClick={this.submitTask}>Submit task</button>
            </div>
        )
    }

    async getResourceData(resourceId, resourceArr) {
        if (!this.state.resourceArr) { 
            this.setState(prevState => {
                return { 
                    [resourceArr]: [],
                    resources: prevState.resources.concat(resourceArr)
            }}) 
        }
        await fetch(`${AppConfig.projectUrl}/form/${resourceId}/submission`)
            .then(result => result.json())
            .then(result => result.forEach(resource => {
                this.setState(prevState => ({[resourceArr]: prevState[resourceArr].concat(resource)}))
            }))
    }

    setUpForms() {
        this.state.resources.forEach(resourceArray => {
            this.state[resourceArray].forEach(resource => {
                let resourceKey = (Object.keys(resource.data))[0]
                this.setState(prevState => {
                    let option = resource.data[resourceKey]
                    return {
                        [resourceKey]: prevState[resourceKey].concat(<option value={option} key={option}>{option}</option>)
                    }
                })
            })
        })
    }   

    async setAssignee() {
        this.setState({assignee: "demo"})
        let requestBody = JSON.stringify({'userId': 'demo'})
        await fetch(`${baseurl}/task/${this.state.id}/claim`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        })
    }

}

export default connect(
    )(Task)
    
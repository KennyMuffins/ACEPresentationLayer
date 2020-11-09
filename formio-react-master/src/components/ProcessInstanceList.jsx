import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProcessInstance from './ProcessInstance'
import { baseurl } from './ProcessTemplateList'
import Task from './Task'

class ProcessInstanceList extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            processInstanceList: []
        }
        
        this.getProcessInstances = this.getProcessInstances.bind(this)
        this.getTasks = this.getTasks.bind(this)
    }
    

    async componentDidMount() {
        this.setState({loading: true})
        await this.getTasks()
        await this.getProcessInstances()
    }  

    async getProcessInstances() {
            await fetch(`${baseurl}/process-instance`)
                .then(result => result.json())
                .then(result => {
                    const instanceList = result
                                            .map(instance => {
                                                const taskForInstance = this.state.taskList
                                                    .filter(task => (task.processInstanceId === instance.id 
                                                        && (task.name === "Request Step" || task.name === "Approval Step")))
                                                    .map(task => <Task key={task.id} attr={task}/>)
                                                return <ProcessInstance 
                                                            item={instance} 
                                                            key={instance.id} 
                                                            task={taskForInstance[0]}/>
                                            })
                    this.setState({
                        processInstanceList: instanceList,
                        loading: false,
                    })
                })
                .catch(error => {
                    console.error('Error:', error);
                })
    }

    async getTasks() {
        await fetch(`${baseurl}/task`)
            .then(result => result.json())
            .then(result => this.setState({taskList: result}))
    }

    render() {
        return (
            <div>
                <h1>List of all running instances</h1>
                {this.state.loading && "Loading..."}
                {this.state.processInstanceList}
            </div>
        );
    }
}



export default connect(
)(ProcessInstanceList)
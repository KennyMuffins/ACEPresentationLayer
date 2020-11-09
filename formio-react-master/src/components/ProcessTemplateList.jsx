import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProcessDefinition from './ProcessDefinition'
import ProcessInstance from './ProcessInstance'

export const baseurl = 'http://localhost:8080/engine-rest/engine/default'
  
class ProcessTemplateList extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            processTemplateList: [],
        }
        
        this.getProcessDefinitions = this.getProcessDefinitions.bind(this)
    }

    componentDidMount() {
        this.setState({loading: true})
        this.getProcessDefinitions()
    }  

    getProcessDefinitions() {
            fetch(`${baseurl}/process-definition`, {
                method: 'GET',
                referredPolicy: 'no-referrer-when-downgrade'
            })
                .then(result => {
                    //console.log('Success:', result)
                    return result.json()
                })
                .then(response => {
                    //console.log('response: ', response)
                    const templateList = response
                                            .filter(item => (item.key.includes("template")))
                                            .map(item => {return <ProcessDefinition item={item} key={item.id}/>})
                    this.setState({
                        processTemplateList: templateList,
                        loading: false,
                    })
        
                })
                .catch(error => {
                    console.error('Error:', error);
                })
    }

    render() {
        return (
            <div>
                <h1>List of all templates</h1>
                {this.state.loading && "Loading..."}
                {this.state.processTemplateList}
            </div>
        );
    }
}



export default connect(
)(ProcessTemplateList)
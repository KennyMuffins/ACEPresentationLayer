import React, {Component} from 'react'
import { connect } from 'react-redux';

class ProcessInstance extends Component {
    constructor(props) {
        super()
        this.state = {
            links: [],
            id: props.item.id,
            definitionId: props.item.definitionId,
            businessKey: props.item.businessKey,
            caseInstanceId: props.item.caseInstanceId,
            ended: props.item.ended,
            suspended: props.item.suspended,
            tenantId: props.item.tenantId,
            task: props.task
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {

    }

    componentDidMount() {

    }

    render() {
        if (!this.state.task) return (<div></div>)
        return (
            <div>
                -------------------------------
                <div>{this.state.task} </div>
            </div>
        )
    }
}

export default connect(
    )(ProcessInstance)
    
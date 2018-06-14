import React, {Component} from 'react';

export default class AllocatedFundRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fund: this.props.fund
        };
        this.removeFund = this.removeFund.bind(this);
    }

    removeFund() {
        this.setState({
            fund: {
                fundName: this.props.fund.fundName,
                allocationPercent: this.props.fund.allocationPercent,
                added: false
            }
        });
        //TODO: add fund to main annuity funds list.
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-1">
                </div>
                <div className="col-sm-6">
                    <label>{this.props.fund.fundName}</label>
                </div>
                <div className="col-sm-2">
                    <input name={"allocation-percentage-" } defaultValue={this.state.fund.allocationPercent}
                           onChange={
                               this.props.updateAllocation
                           }
                    />&nbsp;%
                </div>
                <div className="col-sm-2">
                    <i className="icon-pie-chart"/>
                </div>
                <div className="col-sm-2">
                    <i className="icon-trash"/>
                </div>
                &nbsp; <a href="#" onClick={this.removeFund}>edit</a>
            </div>);
    }
}
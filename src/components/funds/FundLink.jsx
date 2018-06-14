import React, {Component} from 'react';

export default class FundLink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fund: this.props.fund
        };
        this.addFund = this.addFund.bind(this);
    }

    addFund() {
        this.setState({
            fund: {
                fundName: this.props.fund.fundName,
                allocationPercent: this.props.fund.allocationPercent,
                added: true
            }
        });
        //TODO: add fund to main annuity funds list.
    }

    render() {
        return (
            <tr className="fundRow">
                <td>
                    {this.props.fund.fundName}
                </td>
                <td>
                    <i className="icon-pie-chart"/>
                </td>
                <td>
                    {this.state.fund.added ? (
                        "Added"
                    ) : (
                        <a onClick={this.addFund}>Add</a>
                    )}

                </td>
            </tr>
        );
    }
}
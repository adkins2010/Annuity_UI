import React, {Component} from 'react';
import AllocatedFundRow from "./AllocatedFundRow";


class CustomFunds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            funds: this.props.funds
        };
    }

    updateAllocation(event) {
        let person = this.state.editing;
        person.firstName = event.target.value;
        this.setState({editing: person})
    }

    get funds() {
        return this.props.funds.map((fund, i) => {
            if (fund.added) {
                return ((<AllocatedFundRow fund={fund} key={i}/>));
            }
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-6">
                            <strong>Fund Name</strong>
                        </div>
                        <div className="col-sm-2">
                            <strong>Allocation</strong>
                        </div>
                        <div className="col-sm-2">
                            <strong>Details</strong>
                        </div>
                        <div className="col-sm-2">
                            <strong>Remove</strong>
                        </div>
                    </div>
                    {this.funds}
                </div>
                <div className="col-4">
                </div>
            </div>
        );
    }
}

export default CustomFunds;
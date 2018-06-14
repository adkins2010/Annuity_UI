import React, { Component } from 'react';

export default class AllocatedFunds extends Component {

    get funds() {

        return this.props.funds.map((fund, i) => {
            return (
                <li key={i}>
                    {fund.fundName} {fund.allocationPercent}
                    &nbsp; <a href="#" onClick={() => {

                        return (this.props.onEdit(fund, i))
                    }}>edit</a>
                </li>)
        })
    }

    render() {
        return (
            <ul>
                {this.funds}
            </ul>
        );
    }
}
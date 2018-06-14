import React, {Component} from 'react';
import FundLink from './FundLink';

export default class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSideBar: this.props.showSideBar
        };
    }

    get fundsList() {
        return this.props.funds.map((fund, i) => {
            return ((<FundLink key={i} fund={fund}/>))
        });
    }

    render() {
        return (
            <div className="nav nav-sidebar">
                <select>
                    <option value={0} selected>Show All Fund Options</option>
                    <option value={1}>Some other Fund option - I don't know what should be here.</option>
                </select>
                <table>
                    <tbody>
                    {this.fundsList}
                    </tbody>
                    <tfoot>
                    <a onClick={this.props.closeSidebar}>CLOSE</a>
                    </tfoot>
                </table>
            </div>
        );
    }
}
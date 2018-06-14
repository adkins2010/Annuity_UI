import React, {Component} from 'react';
import SideBar from "./SideBar";
import CustomFunds from "./CustomFunds";

class AnnuitiesRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            funds: [
                {fundName: "Fixed Asset Account", allocationPercent: 0, added: false},
                {fundName: "H Worldwide Growth Fund (XHSLD)", allocationPercent: 0, added: false},
                {fundName: "K Instant Wealth Fund (TDSDD)", allocationPercent: 25, added: true},
                {fundName: "AA Global Allocation Fund (ADFDD)", allocationPercent: 0, added: false},
                {fundName: "I Income Fund (CSLDS)", allocationPercent: 0, added: false},
                {fundName: "J Super Extra Deluxe Mega Fund (MDFFD)", allocationPercent: 0, added: false},
                {fundName: "R Core Bond Fund A (RDSJJ)", allocationPercent: 25, added: true},
                {fundName: "S Developing Markets Fund A (ODFHD)", allocationPercent: 0, added: false},
                {fundName: "T Discovery Markets Fund C (GGHDL)", allocationPercent: 0, added: false},
                {fundName: "U Directive Mid Cap Growth Fund (DSDDD)", allocationPercent: 0, added: false},
                {fundName: "Fixed Asset Account", allocationPercent: 25, added: true},
                {fundName: "V Dividend Opportunity Mega Fund (FDDFS)", allocationPercent: 0, added: false},
                {fundName: "W Emerging Markets Local Debt Fund (MEESS)", allocationPercent: 0, added: false},
                {fundName: "X Emerging Markets Innovations Fund B (BSDDK)", allocationPercent: 0, added: false},
                {fundName: "Y Equity Fund C (VESSSS)", allocationPercent: 0, added: false},
                {fundName: "Z Fundamental Alter Fund (GDMLL)", allocationPercent: 25, added: true}
            ],
            showSideBar: true
        };
        this.onClick = this.onClick().bind(this);
    }

    onClick() {
        this.setState({funds: this.state.funds, showSideBar: !this.state.showSideBar});
    }

    componentWillMount() {

        console.log("component mounted");
        let me = this;
        let fetched = fetch('/funds')
            .then(function (response) {
                if (response.status === 200) {
                    console.log("200 reached");
                    return response.json();
                }
                else
                    throw new Error("This failed with rc: " + response.status)
            })
            .then(data =>{
                console.log(data);
                let state = me.state;
                state.funds = data;
                me.setState(state)
            })
            .catch(function (error) {
                console.log('Larry error', error)
            });
        // console.log(fetched);
        return fetched;
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-8">
                    <CustomFunds funds={this.state.funds}/>
                </div>
                {this.state.showSideBar ? (
                    <div className="col-lg-4 sidebar">
                        <SideBar funds={this.state.funds} onClick={this.onClick}/>
                    </div>
                ) : (
                    <div className="col-lg-4">
                    </div>
                )}
            </div>
        );
    }
}

export default AnnuitiesRoot;
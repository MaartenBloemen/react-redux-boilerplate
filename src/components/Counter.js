import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as counterActions from "../actions/counterAction"

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.actions.fetchState();
    }


    render() {
        return (
            <div className="App">
                <strong>{this.props.counterReducer.count}</strong>
                <br/>
                <button onClick={() => this.props.actions.plusOne()}>+</button>
                <button onClick={() => this.props.actions.minusOne()}>-</button>
                <button onClick={() => this.props.actions.resetState()}>RESET</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(counterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
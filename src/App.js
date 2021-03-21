import React from 'react';
import {connect} from 'react-redux';
import Provider from 'redux';
import {increment, decrement, incrementAsync} from './actions/counter';
import {get_user} from './actions/user';

class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {message} = this.props.user
        return (
            <div className="App">
                <span className="counter">{this.props.counter}</span>
                <br />
                <button onClick={this.props.increment}>inc</button>
                <button onClick={ this.props.decrement }>dec</button>
                <button onClick={ this.props.incrementAsync }>异步</button>
                <button onClick={ this.props.get_user }>网络请求</button>
                <h1>{ message }</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        user: state.user
    }
};

//const mapDispatchToProps = (dispatch) => {
  //  return {
   //     increment: (dispatch) => {dispatch(increment)}
   // }
//};

export default connect(mapStateToProps, {increment, incrementAsync, decrement, get_user})(App);



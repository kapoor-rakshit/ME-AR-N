import React from 'react';
import Button from 'react-bootstrap/Button';
import './counterComp.css';

class CounterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cnt: 0
        };
    }

    incCounter(et) {
       this.setState((prevState) => {
           return ({
               cnt: prevState.cnt + 1
           });
       });
    }

    decCounter(et) {
        this.setState((prevState) => {
            return ({
                cnt: prevState.cnt - 1
            });
        });
    }
    render() {
        return (
            <>
            <div className="content">
            <h3>Counter Demo</h3>
            <br></br>
            <h5>Counter Value : {this.state.cnt}</h5>
            <br></br>
            <Button variant="primary" onClick={(evt) => this.incCounter(evt)}>Increment Counter</Button>
            &nbsp;&nbsp;
            <Button variant="danger" onClick={(evt) => this.decCounter(evt)}>Decrement Counter</Button>
            </div>
            </>
        );
    }
}
export default CounterComponent;
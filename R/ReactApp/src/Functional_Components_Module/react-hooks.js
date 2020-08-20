import React, {useState} from 'react';

const FunctionalComponent = ()=> {
    const [state, setState] = useState({checked: false, count: 0, name: ''});

    function handleChecked() {
        setState({...state, checked: !state.checked});
    }
    function handleCount() {
        setState({...state, count: state.count + 1});
    }
    function handleName(e) {
        setState({...state, name: e.target.value});
    }


    return (
        <>
        <input type="checkbox" onChange={() => handleChecked()}/>
		<button type="button" onClick={() => handleCount()}>Counter Increment</button>
		<input type="text" onChange={(evt) => handleName(evt)}/>
		<br/>
        <span>{JSON.stringify(state)}</span>
        <br/>
		<span>Checked: {state.checked ? "true" : "false"}, Count: {state.count}, Name: {state.name}</span>
        </>
    );
}

export default FunctionalComponent;
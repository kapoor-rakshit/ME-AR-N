import React, {useState, useEffect} from 'react';

const FunctionalComponent = ()=> {
    const [state, setState] = useState({checked: false, count: 0, name: ''});

    // ALWAYS on initial render() plus re-render() for every state or props VAR
    useEffect(()=> {
        console.log(`USE EFFECT WITHOUT DEPENDENT ARG`);

        return ()=> {
            console.log(`COMPONENT WILL UNMOUNT 1`);
        }
    });

    // ONLY on initial render()   , similar to componentDidMount()
    // return of cleanup function , similar to componentWillUnmount()
    useEffect(()=> {
        console.log(`USE EFFECT WITH EMPTY DEPENDENT ARG`);

        return ()=> {
            console.log(`COMPONENT WILL UNMOUNT 2`);
        }
    }, []);

    // ONLY on initial render() plus re-render() for specified state or props VAR
    useEffect(()=> {
        console.log(`USE EFFECT WITH DEPENDENT ARG`);

        return ()=> {
            console.log(`COMPONENT WILL UNMOUNT 3`);
        }
    }, [state.count, state.name]);


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
import React from 'react';
import CounterComponent from './State_Example_Module/counterComp';
import AllProductsComponent from './ComposableComp_Example_Module/allProductsComp';
import RouterOutlet from './Formik-Router_Example_Module/routing-module';
import FunctionalComponent from './Functional_Components_Module/react-hooks';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentDisp: true
    };
  }

  toggleDisp() {
    this.setState((prevState)=> {
      return (
        {componentDisp: !prevState.componentDisp}
      );
    });
  }

  render() {
    return (
      <>
      {/* <CounterComponent></CounterComponent> */}
      {/* <AllProductsComponent></AllProductsComponent> */}
      {/* <RouterOutlet></RouterOutlet> */}
      {!!this.state.componentDisp && (<FunctionalComponent></FunctionalComponent>)}
      <br></br>
      <button type={`button`} onClick={()=> this.toggleDisp()}>Toggle Component</button>
      </>
    );
  }
}
export default App;
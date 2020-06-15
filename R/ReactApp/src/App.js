import React from 'react';
import CounterComponent from './State_Example_Module/counterComp';
import AllProductsComponent from './ComposableComp_Example_Module/allProductsComp';
import RouterOutlet from './Formik-Router_Example_Module/routing-module';


class App extends React.Component {
  render() {
    return (
      <>
      {/* <CounterComponent></CounterComponent> */}
      {/* <AllProductsComponent></AllProductsComponent> */}
      <RouterOutlet></RouterOutlet>
      </>
    );
  }
}
export default App;
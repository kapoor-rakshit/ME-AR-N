import React from 'react';

class ErrorBoundaryComponent extends React.Component {

	constructor(props) {
		super(props);
        this.state = {
            hasError: false
        };
	}

	static getDerivedStateFromError(error) {
        console.log(`ERROR from getDerivedStateFromError ==> ${error}`);
        return (
        	{
            	hasError: true
        	}
        );
    }

    componentDidCatch(error, errorInfo) {
        console.log(`ERROR ==> ${JSON.stringify(error)}`);
        console.log(`ERROR INFO ==> ${JSON.stringify(errorInfo)}`);
    }

	render() {
		if (this.state.hasError) {
            return (
            	<>
            	<p style={{color: "red"}}>Something went wrong...</p>
            	<p>Cannot load.</p>
            	</>
            );
        }
        return this.props.children
	}
}
export default ErrorBoundaryComponent;
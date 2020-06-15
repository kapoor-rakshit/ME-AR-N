import React from 'react';

class AboutComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <br/>
            <br/>
            <h1 className={`textcenter bluecolor`}>Welcome to Product Inventory App</h1>
            <h3 className={`textcenter bluecolor`}>Start Exploring...</h3>
            </>
        );
    }
}
export default AboutComponent;
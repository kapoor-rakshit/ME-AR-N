import React from 'react';

class PageNotFound extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <h1 className={`textcenter`}>404</h1>
            <h3 className={`textcenter`}>This is not the web page you are looking for !!</h3>
            </>
        );
    }
}
export default PageNotFound;
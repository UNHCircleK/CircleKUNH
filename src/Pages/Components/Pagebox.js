import React from 'react';


class PageBox extends React.Component {
    render() {
        return <div className="PageBox">{this.props.children}</div>
    }
}

export default PageBox;
import React from 'react';

class CredentialsPreview extends React.Component {
    handleClick = () => {
        console.log(this.props.department);
        this.props.onClick(this.props.id)
    }

    render(){
        return(
        <div className="CredentialsPreview">
            <div className="link credential-name" onClick={this.handleClick}>{this.props.name}</div>
            <div className="credential-department">{this.props.department}</div>
        </div>
        );
    }
}

CredentialsPreview.propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    department: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
}

export default CredentialsPreview;
import React, {Component, PropTypes} from 'react';

class Credential extends Component {
    render(){
        return (
            <div className='Credential'>
                {this.props.description}
            </div>
        );
    }
}

Credential.propTypes = {
    description: PropTypes.string.isRequired
}

export default Credential;
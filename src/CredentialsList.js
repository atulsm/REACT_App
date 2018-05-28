import React from 'react';
import CredentialsPreview from './CredentialsPreview';

const CredentialsList = ({credentials, onCredentialClick}) => {
    return(
        <div className="CredentialsList">
             {Object.keys(credentials).map(credentialId => 
                <CredentialsPreview
                onClick={onCredentialClick} 
                key={credentialId} {...credentials[credentialId]} />
            )}
         </div>
    );
};

CredentialsList.propTypes = {
    credentials: React.PropTypes.array,
    onCredentialClick: React.PropTypes.func.isRequired
};

export default CredentialsList;
import React from 'react';
import ReactDom from 'react-dom';
import Header from "./Header";
import axios from 'axios';
import CredentialsList from './CredentialsList';
import * as api from '../api/api';
import Credential from './Credential';

const pushState = (obj,url) => {
    window.history.pushState(obj,'',url)
}

class App extends React.Component {
    state = {
        pageheader: 'Credentials',
        credentials: []
    };

    componentDidMount(){
        //timers, listeners
        axios.get('/api/credentials')
            .then(resp => {
                this.setState({
                    credentials: resp.data.credentials
                });
            })
            .catch(console.error);
    }

    componentWillUnmount(){
        //clear timers, listeners
    }

    fetchCredentials = (credentialId) => {
        pushState(
            {currentCredentialId: credentialId},
            `/credentials/${credentialId}`
        );

        api.fetchCredential(credentialId).then(credential => {
            this.setState({
                pageheader: credential.name,
                currentCredentialId: credential.id,
                credentials: {
                    ...this.state.credentials,
                    [credential.id]: credential
                }
            });
        });
    }

    currentCredential(){
        if(this.state.currentCredentialId){
            return <Credential {...this.state.credentials[this.state.currentCredentialId]} />
        }
        return <CredentialsList 
        onCredentialClick={this.fetchCredentials} credentials={this.state.credentials} />

    }


    render(){
        return(
            <div className="App">
            <Header message={this.state.pageheader}/>
            {this.currentCredential()}
            </div>
        );
    }
}

export default App;
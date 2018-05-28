import axios from 'axios';

export const fetchCredential = credentialId => {
    return axios.get(`/api/credentials/${credentialId}`)
    .then(resp => resp.data);
};
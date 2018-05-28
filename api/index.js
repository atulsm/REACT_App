import express from 'express';
import data from '../src/testData'

const router = express.Router();

const credentials = data.credentials.reduce((obj, credential) => {
    obj[credential.id] = credential;
    return obj;
}, {});

router.get('/credentials', (req,res) => {
    res.send({ credentials: credentials});
});

router.get('/credentials/:credentialId', (req,res) => {
    let credential = credentials[req.params.credentialId];
    credential.description = 'A short description';
    res.send(credential);
});

export default router;
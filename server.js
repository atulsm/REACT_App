import express from 'express';
import config from "./config";
import apirouter from "./api";
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

//This is the api route
server.use('/api',apirouter);

//This is the base server context
server.get('/', (req,res) => {
    //res.send("Hello express");
    //res.render('index')
    res.render('index', {
        content: "Hello express and ejs"
    });
});

//How to server html from code
server.get('/about1.html', (req,res) => {
    res.send("This is about page");
});

//for css
server.use(sassMiddleware({
    src: path.join(__dirname,'sass'),
    dest: path.join(__dirname, 'public')
}));

//using the ejs template. 'view engine' is the view rendering component, and 'ejs' is the engine name.
server.set('view engine', 'ejs');

//how to use the content from public folder
server.use(express.static('public'));

//listen on which port
server.listen(config.port, () => {
    console.info("Server is listening on port " + config.port);
});
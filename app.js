const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();
const server = require('http').createServer(app);
const fs = require('fs');

import path from 'path';
import data from './assets/data.json';
import ssr from './src/server';


app.engine("hbs", expressHbs(
	{
		layoutsDir: "views/layouts", 
		defaultLayout: "layout",
		extname: "hbs"
	}
));
app.set("view engine", "hbs");


// middleware
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));


let initialState = {
	isFetching: false,
	users: JSON.parse (fs.readFileSync('./assets/data.json', {encoding:'utf8', flag:'r'})),
}

app.get("/", function(req, res){
	const {content, preloadedState} = ssr(initialState);

    res.render("home.hbs", {
		title: "SSR version",
		content: content,
		preloadedState: JSON.stringify(preloadedState)
	});
});

app.get("/client", function(req, res){
    res.render("client.hbs", {
		title: "Client Only Version"
	});
});

app.use(function (req, res, next) {
	res
		.status(404)
		.render("404.hbs", {
			title: "404 !Not found! 404"
		});
});




server.listen(3000, () => {
	console.log("Server run on http://localhost:3000");
});

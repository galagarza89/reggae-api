const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());


app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

Artist = require('./models/artists.js'); 



//Connect Mongoose
mongoose.connect('mongodb://localhost/reggaeArtists');

const db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('App running');
});

app.get('/api/artists', (req, res) => {
	Artist.getArtists((err, artists) => {
		if(err) {
			throw err;
		}
		res.json(artists); //res.json originally
	});
});

app.get('/api/artist/:id', (req, res) => {
	Artist.getArtistById(req.params.id,(err, artist) => {
		if(err) {
			throw err;
		}
		res.json(artist);
	});
});

app.post('/api/artists', (req, res) => {
	var artist = req.body;
	Artist.addArtist(artist,(err, artist) => {
		if(err) {
			throw err;
		}
		res.json(artist);
	});
});

app.put('/api/artists/:id', (req, res) => {
	var id = req.params.id;
	var artist = req.body;
	Artist.updateArtist(id, artist, {}, (err, artist) => {
		if(err) {
			throw err;
		}
		res.json(artist);
	});
});

app.delete('/api/artists/:id', (req, res) => {
	var id = req.params.id;
	Artist.deleteArtist(id, (err, artist) => {
		if(err) {
			throw err;
		}
		res.json(artist);
	});
});


app.listen(port);












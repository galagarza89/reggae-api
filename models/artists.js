var mongoose = require('mongoose');

//Artist Schema
var artistSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	image_url: {
		type: String,
		required: true
	},
	website_url: {
		type: String,
		required: true
	},
	twitter_url: {
		type: String,
		required: true
	},
	facebook_url: {
		type: String,
		required: true
	},
	instagram_url: {
		type: String,
		required: true
	},
	bio: {
		type: String,
		required: true
	},
	info_url: {
		type: String,
		required: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

var Artist = module.exports = mongoose.model('Artist', artistSchema);

//Get Artists
module.exports.getArtists= (callback, limit) => {
	Artist.find(callback).limit(limit);
};

//Get individual artist
module.exports.getArtistById= (id, callback) => {
	Artist.findById(id, callback);
};

//Add artist
module.exports.addArtist = (artist, callback) => {
	Artist.create(artist, callback);
};

//Update artist CHECK OUT SET TO UPDATE SPECIFIC FIELD
module.exports.updateArtist = (id, artist, options, callback) => {
	var query = {id};
	var update = {
		name: artist.name,
		image_url: artist.image_url,
		website_url: artist.website_url,
		twitter_url: artist.twitter_url,
		facebook_url: artist.facebook_url,
		instagram_url: artist.instagram_url,
		bio: artist.bio,
		info_url: artist.info_url
	}
	Artist.findOneAndUpdate(query, update, options, callback);
};

//Delete artist
module.exports.deleteArtist = (id, callback) => {
	var query = {id};	
	Artist.remove(query, artist, callback);
};




















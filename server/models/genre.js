
// Genre Structure

// -- id
// -- name
// -- movies

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// movie properties and validators
var genreSchema = new Schema({
    name: { type: String, required: true, trim: true},
		movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }]
});

module.exports = mongoose.model('Genre', genreSchema);
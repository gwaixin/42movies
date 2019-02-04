
// Movie Structure

// -- id
// -- title
// -- summary
// -- image
// -- cast
// -- slug
// ---- name
// ---- role
// -- created_at
// -- updated_at
// ---------------
// -- ratings
// -- is_featured
// -- year


const mongoose = require('mongoose')
const Schema = mongoose.Schema

// movie properties and validators
var movieSchema = new Schema({
    title: { type: String, required: true, trim: true },
    summary: { type: String, required: true, },
    image: { type: String, required: true },
    cast: [{ name: { type: String, required: true }, role: { type: String, required: true } }],
    slug: { type: String, required: true },
    ratings: { type: Number, max: 5, min: 0 },
    is_featured: { type: Boolean },
    year: { type: Number, minlength: 4, maxlength: 4 },
    genres: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
    created_at: { type: Date, default: new Date()},
    updated_at: { type: Date, default: new Date()},
});

movieSchema.pre('findOneAndUpdate', function(next) {
  this.options.runValidators = true;
  next();
});


module.exports = mongoose.model('Movie', movieSchema);
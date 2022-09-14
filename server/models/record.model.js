const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
    title: { 
        type: String, 
        minlength: [3, "Title must be at least 3 characters"]
    },
    artist: {
        type: String,
        minLength: [3, 'Artist must be at least three characters.']
    },
    
    description: {
        type: String,
        minLength: [3, 'Description must be at least three characters.']
    }
    
    
}, { timestamps: true });
module.exports.Record = mongoose.model('Record', RecordSchema);


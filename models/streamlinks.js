var mongoose = require('mongoose');

// Streamlink Schema
var streamlinkSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    linkz:{
        type: String,
        required: true
    },
});

var StreamLink = module.exports = mongoose.model('StreamLink', streamlinkSchema, 'streamtest');

// Get StreamLinks
module.exports.getStreamLinks = function(callback, limit){
    StreamLink.find(callback).limit(limit);
}

// Get StreamLinkById
module.exports.getStreamLinkById = function(id, callback){
    StreamLink.findById(id, callback);
}

// // Add Streamlink
// module.exports.addStreamLink = function(streamlink, callback){
//     StreamLink.create(streamlink, callback);
// }

// // Update Streamlink
// module.exports.updateStreamLink = function(id, streamlink, options, callback){
//     var query = {_id: id};
//     var update = {
//         name: streamlink.name,
//         linkz: streamlink.linkz
//     }
//     StreamLink.findOneAndUpdate(query, update, options, callback);
// }


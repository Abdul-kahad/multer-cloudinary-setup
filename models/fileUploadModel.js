const mongoose = require("mongoose")

const fileUploadSchema = new mongoose.Schema({
  singleUpload: {
    type: String,
    default: null        
  },
  multipleUpload: {
    type: [String],
    default: []      
  },
  vedioUpload: {
    type: String, 
    default: null       
  }
}, { timestamps: true }) 

module.exports = mongoose.model('FilesUpload', fileUploadSchema)
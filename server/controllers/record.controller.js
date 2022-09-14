const { Record } = require('../models/record.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.findAllRecords = (request, response) => {
    Record.find() 
      .then(recordList => response.json(recordList.sort((a, b)=> a.title.localeCompare(b.title))))
      .catch(err => response.json({ message: "Something went wrong", error: err }))
  };

module.exports.createRecord = (request, response) => {
    Record.create({
        ...request.body
    })
        .then(record => response.json(record))
        .catch(err => response.status(400).json(err));
}

module.exports.getRecord = (request, response) => {
    Record.findOne({_id:request.params.id})
        .then(record => {response.json(record)})
        .catch(err => response.json(err))
}

module.exports.updateRecord = (request, response) => {
    Record.findOneAndUpdate({_id:request.params.id}, request.body, {new:true, runValidators: true})
        .then(updatedRecord => response.json(updatedRecord))
        .catch(err => {
            response.status(400).json(err)
        })
}

module.exports.deleteRecord = (request, response) => {
    Record.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}


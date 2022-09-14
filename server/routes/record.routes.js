const RecordController = require('../controllers/record.controller');
module.exports = function(app){
    app.get('/api', RecordController.index);
    app.get('/api/records', RecordController.findAllRecords);
    app.get('/api/records/:id', RecordController.getRecord)
    app.post('/api/records', RecordController.createRecord);
    app.put('/api/records/:id', RecordController.updateRecord);
    app.delete('/api/records/:id', RecordController.deleteRecord);
}
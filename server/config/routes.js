const controller = require('../controllers/controller');

module.exports = function(app){
    
    app.get('/api', controller.index); // POSTMAN: Works
    app.get('/api/models', controller.getModels) // POSTMAN: Works
    app.get('/api/model/:id',controller.getModelByid); // POSTMAN: Works
    app.delete('/api/model/:id',controller.deleteModel); // POSTMAN: Works
    app.post('/api/model/new', controller.createModel); // POSTMAN: Works
    app.put('/api/model/update/:id',controller.updateModel); // POSTMAN: Works
}
// Initializes the `checkmember` service on path `/checkmember`
const { Checkmember } = require('./checkmember.class');
const createModel = require('../../models/checkmember.model');
const hooks = require('./checkmember.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/checkmember', new Checkmember(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('checkmember');

  service.hooks(hooks);
};

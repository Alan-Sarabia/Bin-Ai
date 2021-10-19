



module.exports = function(opts){
  const response = {};

  response.card = require('./card.js')(opts);
  response.text = require('./text.js')(opts);
  response.background = require('./background.js')(opts);

  return response;
};

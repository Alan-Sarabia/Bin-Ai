const oneof = require('oneof');

module.exports = function(opts){

  const response = {};

  response.classNames = function(){
    const classNames = [
      'card text-white bg-primary mb-3',
      'card text-white bg-secondary mb-3',
      'card text-white bg-success mb-3',
      'card text-white bg-danger mb-3',
      'card text-white bg-warning mb-3',
      'card text-white bg-info mb-3',
      'card bg-light mb-3',
      'card text-white bg-dark mb-3'
    ];
    return oneof(classNames);
  }

  return response;
};

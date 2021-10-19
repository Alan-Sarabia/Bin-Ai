const oneof = require('oneof');

module.exports = function(opts){

  const response = {};

  response.classNames = function(){

    const classNames = [
      'p-3 mb-2 bg-primary text-white',
      'p-3 mb-2 bg-secondary text-white',
      'p-3 mb-2 bg-success text-white',
      'p-3 mb-2 bg-danger text-white',
      'p-3 mb-2 bg-warning text-dark',
      'p-3 mb-2 bg-info text-white',
      'p-3 mb-2 bg-light text-dark',
      'p-3 mb-2 bg-dark text-white',
      'p-3 mb-2 bg-white text-dark',
      'p-3 mb-2 bg-transparent text-dark',
    ];

    return oneof(classNames);
  }

  return response;
};

const oneof = require('oneof');

module.exports = function(opts){

  const response = {};

  response.classNames = function(){

    const classNames = [
      'text-primary',
      'text-secondary',
      'text-success',
      'text-danger',
      'text-warning',
      'text-info',
      'text-light bg-dark',
      'text-dark',
      'text-body',
      'text-muted',
      'text-white bg-dark',
      'text-black-50',
      'text-white-50 bg-dark',
    ];

    return oneof(classNames);
  }

  return response;
};

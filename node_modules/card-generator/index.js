module.exports = generate;

const oneof = require('oneof');

const standardCard = require('./variations/standard-card');
const imageCard = require('./variations/standard-card');

function generate({}={}){
  return oneof([standardCard,imageCard])();
}

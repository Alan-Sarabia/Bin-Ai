
const Handlebars = require('handlebars');
const faker = require('bootstrap-faker');

module.exports = generate;




function generate({}={}){

  const source = require('fs').readFileSync(__dirname+require('path').sep+'index.hbs').toString();
  const template = Handlebars.compile(source);

  const data = {
    cardStyle: faker.card.classNames()
  };

  const result = template(data);

  return result;

}

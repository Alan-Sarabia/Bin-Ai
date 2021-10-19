# bootstrap-faker
Bootstrap Faker generates massive amounts of useful randomized bootstrap related data such as card styles, warning labels, button types, etc.

## Example

      var faker = require('bootstrap-faker');

      var randomTextColor = faker.text.classNames(); // Rowan Nikolaus
      var randomBackgroundColor = faker.background.classNames(); // Kassandra.Haley@erich.biz
      var randomCardColor = faker.card.classNames(); // Kassandra.Haley@erich.biz

## API

* text
** classNames(): reasonable class name set
* background
** classNames(): reasonable class name set
* card
** classNames(): reasonable class name set

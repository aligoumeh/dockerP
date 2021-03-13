let PersonModel = require('./person')

class PersonController {

  constructor() {
    this._initialize();
  }

  _initialize() {
    let person1 = new PersonModel({
      name: 'Tristan',
      street: 'Van Galenstraat',
      city: 'Enschede',
      country: 'Netherlands'
    })

    let person2 = new PersonModel({
      name: 'Fleur',
      street: 'van Galenstraat',
      city: 'Enschede',
      country: 'Netherlands'
    })

    let person3 = new PersonModel({
      name: 'Jelle',
      street: 'Handelskade',
      city: 'Deventer',
      country: 'Netherlands'
    })

    let person4 = new PersonModel({
      name: 'Peter',
      street: 'van Galenstraat',
      city: 'Enschede',
      country: 'Netherlands'
    })

    this._save(person1);
    this._save(person2);
    this._save(person3);
    this._save(person4);
  }

  _save(person) {
    person.save()
       .then(doc => {
         console.log('Save succesful for ' + person.name + '! ')
       })
       .catch(err => {
         console.error(err)
       });
  }

  _getAll(cb) {
    PersonModel.find({}, { _id: 1, name: 1 })
      .then(results => {
        cb(results)
      })
      .catch(err => { 
        console.error(err)
      })
  }

  _getPerson(id, cb) {
    PersonModel.findOne( { _id : id })
      .then(result => {
        cb(result)
      })
      .catch(err => {
        console.error(err)
      })
  }

}
module.exports = new PersonController()

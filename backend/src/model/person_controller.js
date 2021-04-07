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
      name: 'aaaa',
      street: 'van Galenstraat',
      city: 'Enschede',
      country: 'Netherlands'
    })

    let person3 = new PersonModel({
      name: 'bbbbb',
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

    let person5 = new PersonModel({
      name: 'Ali',
      street: 'van Galenstraat',
      city: 'Enschede',
      country: 'Netherlands'
    })

    let person6 = new PersonModel({
      name: 'Lucia',
      street: 'van Galenstraat',
      city: 'Enschede',
      country: 'Netherlands'
    })
    
    let person7 = new PersonModel({
      name: 'Alice',
      street: 'Wonderland',
      city: 'unknown',
      country: 'far away'
    })

    let person8 = new PersonModel({
      name: 'fictional name',
      street: 'kersengaarde',
      city: 'paris',
      country: 'France'
    })
    

    this._save(person1);
    this._save(person2);
    this._save(person3);
    this._save(person4);
    this._save(person5);
    this._save(person6);
    this._save(person7);
    this._save(person8);
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

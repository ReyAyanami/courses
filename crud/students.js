//crud
//create, read, update, delete
const List = require('./list.js')
const Person = require('../person.js')

class Student extends Person {
  constructor(pvtInfo) {
    super(pvtInfo);
    this.birthday = pvtInfo.birthday;
  }

  set age(value) {
    if(+value < new Date().getFullYear()) {
      this.birthday = value
    }
  }

  get age() {
    return new Date().getFullYear() - this.birthday.slice(-4);
  }
}

class StudentList extends List {
  create(object) {
    this.add(new Student(object))
  }
}

const studentList = new StudentList()

module.exports = studentList

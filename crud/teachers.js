//crud
//create, read, update, delete
const List = require('./list.js')
const Person = require('../person.js')

class Teacher extends Staff {
  constructor(pvtInfo) {
    super(pvtInfo)
    this.subject = pvtInfo.subject;
    this.workHoursPerWeek = pvtInfo.workHoursPerWeek;
    this.higherEducation = pvtInfo.higherEducation;
  }

  get countSalary() {
    return this.higherEducation ? this.workHoursPerWeek * 2 * 4 : this.workHoursPerWeek * 4;
  }
}

class TeacherList extends List {
  create(object) {
    this.add(new Teacher(object))
  }
}

const teacherList = new TeacherList()

module.exports = teacherList

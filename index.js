const studentList = require('./crud/students.js')
const teacherList = require('./crud/teachers.js')
const {
  listOfStudents,
  listOfTeachers,
  listOfCabs
} = require('./stubs.js')

listOfStudents.forEach(
  student => studentList.create(student)
)
listOfTeachers.forEach(
  teacher => teacherList.create(teacher)
)

const student = studentList.find('princess1@mail.ru')
student.age = '2020'
console.log(student.age);

/*const {
  listOfStudents,
  listOfTeachers,
  listOfCabs
} = require('./stubs.js')

const {findByName} = require('./utils.js')

class Person {
    constructor(pvtInfo) {
        this.name = pvtInfo.name;
        this.email = pvtInfo.email;
    }
}

class Student extends Person {
    constructor(pvtInfo) {
        super(pvtInfo);
        this.birthday = pvtInfo.birthday;
    }

    get studentsAge() {
        return new Date().getFullYear() - this.birthday.slice(-4);
    }
}

class Staff extends Person { }

class Guard extends Staff { }
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


class Form {
    constructor(title = "") {
        this.title = title;
        this.students = [];
        this.teachers = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        if (!this.teachers.includes(teacher)) {
            this.teachers.push(teacher);
        }
    }

    get amountOfStudents() {
        return this.students.length;
    }
}

class Room {
    constructor(roomInfo) {
        this.purpose = roomInfo.purpose;
    }
}

class Classroom extends Room {
    constructor(roomInfo) {
        super(roomInfo);
        this.desks = roomInfo.desks;
        this.board = roomInfo.board;
    }
}
class Library extends Room {
    constructor(roomInfo) {
        super(roomInfo);
        this.books = roomInfo.books;
        this.fee = roomInfo.fee;
    }
}

class School {

    static studentOnBoarding(studentInfo, teacherInfo, formInfo) {
        const student = new Student(studentInfo);
        const teacher = teacherInfo.name ? teacherInfo : new Teacher(teacherInfo);
        const form = formInfo.title ? formInfo : new Form(formInfo);

        form.addStudent(student);
        form.addTeacher(teacher);
        return form;
    }

}

let s = t = c = 0;
//forms init
const firstA = new Form('1-A');
const firstB = new Form("1-B");
//teachers init
const teachers = listOfTeachers.map(it => new Teacher(it))

const galinaInfo = new Teacher(listOfTeachers[t++])
const victoriaInfo = new Teacher(listOfTeachers[t++])
const nadezhdaInfo = new Teacher(listOfTeachers[t++])
const anastasiyaInfo = new Teacher(listOfTeachers[t++])
//students init
const alibekInfo = new Student(listOfStudents[s++])
const alenaInfo = new Student(listOfStudents[s++])
const evgeniyInfo = new Student(listOfStudents[s++])
const vasiliyInfo = new Student(listOfStudents[s++])
const vladimirInfo = new Student(listOfStudents[s++])
const ekaterinaInfo = new Student(listOfStudents[s++])
//cabs init
const physicsCab = new Classroom(listOfCabs[c++])
const historyCab = new Classroom(listOfCabs[c++])
const englishCab = new Classroom(listOfCabs[c++])
//enrolling students to the forms
School.studentOnBoarding(alibekInfo, teachers.find(findByName('Galina')), firstA);
School.studentOnBoarding(alenaInfo, galinaInfo, firstA);
School.studentOnBoarding(evgeniyInfo, victoriaInfo, firstA);
School.studentOnBoarding(vasiliyInfo, nadezhdaInfo, firstB);
School.studentOnBoarding(vladimirInfo, galinaInfo, firstB);
School.studentOnBoarding(ekaterinaInfo, anastasiyaInfo, firstA);

console.dir(firstA);
console.dir(firstB);

//count teacher's salary & student's age
const galinaSalary = galinaInfo.countSalary;
const alibekAge = alibekInfo.studentsAge;
console.log(`Galina's month's salary is $${galinaSalary}`);
console.log(`Alibek's age is ${alibekAge}`);
*/

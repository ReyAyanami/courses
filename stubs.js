// students' info that's to be enrolled
const listOfStudents = [
    {
        "name": "Алибек",
        "email": "alibek.corvus@gmail.com",
        "birthday": "04/04/1993"
    },
    {
        "name": "Алена",
        "email": "alen4ik@mail.ru",
        "birthday": '04/05/1993'
    },
    {
        "name": "Евгений",
        "email": "chizhik99@mail.ru",
        "birthday": "11/05/1995"
    },
    {
        "name": "Василий",
        "email": "vasyapupkin3000@mail.ru",
        "birthday": "04/09/1993"
    },
    {
        "name": "Владимир",
        "email": "bob_mashina@mail.ru",
        "birthday": "31/11/1995"
    },
    {
        "name": "Екатерина",
        "email": "princess1@mail.ru",
        "birthday": "11/09/1996"
    }
];
// a teacher's info that's gonna teach
const listOfTeachers = [
    {
        "name": "Галина Эдуардовна",
        "subject": "physics",
        "email": "uchilka50@mail.ru",
        "workHoursPerWeek": "40",
        "higherEducation": "true"
    },
    {
        "name": 'Виктория Михайловна',
        "subject": "literature",
        "email": 'cocainemaster1@mail.ru',
        "workHoursPerWeek": "30",
        "higherEducation": "false"
    },
    {
        "name": "Надежда Борисовна",
        "subject": "mathematics",
        "email": "nadya1967@mail.ru",
        "workHoursPerWeek": "60",
        "higherEducation": "true"
    },
    {
        "name": 'Анастасия Вячеславовна',
        "subject": "history",
        "email": 'cockandcoke@mail.ru',
        "workHoursPerWeek": "20",
        "higherEducation": "true"
    }
];
// a cab's info to handle lessons in
const listOfCabs = [
    {
        "purpose": "physics",
        "desks": "15",
        'board': "true"
    },
    {
        "purpose": "history",
        "desks": "14",
        'board': "true"
    },
    {
        "purpose": "english",
        "desks": "5",
        'board': "true"
    },
];

module.exports = {
  listOfStudents,
  listOfTeachers,
  listOfCabs
}

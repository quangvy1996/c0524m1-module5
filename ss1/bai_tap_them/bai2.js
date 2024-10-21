const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'Male',
    occupation: 'developer',
    nationality: 'American',
    city: 'New York',
    hobbies: ['reading', 'traveling', 'photography'],
    language: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard'
    }
};
const {firstName, gender, education:{degree},language:[english]} = person;
const student = {firstName, gender, degree,english};
console.log(student);
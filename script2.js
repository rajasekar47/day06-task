//3.Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, department, email, mobile, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
        this.email=email;
        this.mobile=mobile;
        this.city = city;
    }
    getPersonDetails(){
        return `Name: ${this.firstName} ${this.lastName}
        age: ${this.age}
        department: ${this.department}
        email: ${this.email}
        mobile: ${this.mobile}
        city: ${this.city}`;
    }
}
const person1 = new Person("Menaha","S", 24, "Information Technology", "menaha@gmail.com", 9876543210, "chennai");
const person2 = new Person("Dharani","T", 27, "Computer science", "dharani@gmail.com", 1234567790, "kadalur");

console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());
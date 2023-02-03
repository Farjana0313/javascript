const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
const heroPerson = {
    firstName:"hero",
    lastName:'alom',
    salary:25000,
}
// normalPerson.chargeBill();
// const bind = normalPerson.chargeBill.bind(heroPerson);
// bind(2000);

normalPerson.chargeBill.call(heroPerson,900);
console.log(heroPerson.salary);
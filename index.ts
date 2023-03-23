class Student {
  protected firstName = '';
  protected lastName = '';
  protected age = 0;
  constructor(fName: string, lName: string, age: number) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
}

const mehmood = new Student('Mehmood', 'Zaman', 26);

console.log(mehmood.fullName());

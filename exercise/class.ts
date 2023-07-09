function Person1(name, skill) {
  this.name = name;
  this.skill = skill;
}

var person = new Person1('태관', '개발자');

class Person {
  constructor(name, skill) {
    this.name = name;
    this.skill = skill;
  }
}

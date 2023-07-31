class Person {
  constructor(name, birthDay, height) {
    this._name = name;
    this._birthDay = birthDay;
    this._height = height;
    this._age = this.getPersonAge()
  }

  get personName() {
    return this._name;
  }

  set personName(personNameParameter) {
    this._name = personNameParameter;
  }

  get personBirthDay() {
    return this._birthDay;
  }

  set personBirthDay(personBirthDayParameter) {
    this._birthDay = personBirthDayParameter;
  }

  get personHeight() {
    return this._height;
  }

  set personHeight(personHeightParameter) {
    this._height = personHeightParameter;
  }

  getPersonAge() {
    const today = new Date();
    const birthDate = new Date(this._birthDay);
    let age = today.getFullYear() - birthDate.getFullYear();
  
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }
  
}

module.exports = Person;
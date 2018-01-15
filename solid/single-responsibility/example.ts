class Person {
  public firstName : string;
  public lastName : string;
  public email : string;

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = name;
    this.lastName = name;

    if (this.validEmail(email)) {
      this.email = email;
    } else {
      throw new Error('Invalid email for user.');
    }
  }

  validEmail(email: string) {
    var regex = /\S+@\S+\.\S+/; // Really simple email validation in the format of email@example.com

    return regex.test(email);
  }
}

var user = new Person('First Name', 'Last Name', 'test@example.com');
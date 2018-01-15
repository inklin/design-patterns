/* Refactor:
 * We can improve the Person class by removing the
 * responsibility of email validation. We can create a
 * new email class that will have responsibility.
 */

class Person {
  public firstName : string;
  public lastName : string;
  public email : Email;

  constructor(firstName: string, lastName: string, email: Email) {
    this.firstName = name;
    this.lastName = name;
    this.email = email;
  }
}

class Email {
  public address: string;

  constructor(emailAddress: string) {
    if (this.validEmail(emailAddress)) {
      this.address = emailAddress;
    } else {
      throw new Error('Email is invalid');
    }
  }

  validEmail(emailAddress: string) {
    var regex = /\S+@\S+\.\S+/; // Really simple email validation in the format of email@example.com

    return regex.test(emailAddress);
  }
}

var user = new Person('First Name', 'Last Name', new Email('test@example.com'));
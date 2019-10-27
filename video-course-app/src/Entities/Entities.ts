class User implements IUser {
  id: string;
  firstName: string;
  lastName: string;

  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

}
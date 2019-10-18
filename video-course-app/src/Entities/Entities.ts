class Course implements ICourse {
  id: string;
  title: string;
  creationDate: Date;
  duration: string;
  description: string;

  constructor(id, title, creationDate, duration, description) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;
    this.duration = duration;
    this.description = description;
  }
}

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
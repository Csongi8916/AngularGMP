export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

export interface Course {
  id: number;
  title: string;
  duration: number;
  creationDate: Date;
  description: string;
  topRated: boolean;
}


export interface Filterable {
  filter: string;
}

export interface Sortable {
  sortable: Date;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

export interface Course extends Filterable, Sortable {
  id: number;
  title: string;
  duration: number;
  creationDate: Date;
  description: string;
  topRated: boolean;
  filter: string;
  sortable: Date;
}


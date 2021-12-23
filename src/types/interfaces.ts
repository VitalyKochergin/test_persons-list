export interface ResponsePaginatedPersonList {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Person[]
}

export interface ResponsePerson {
  data: Person;
  supports: {
    url: string;
    text: string;
  }
}

export interface Person {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface PersonsProps {
  persons: Person[],
}
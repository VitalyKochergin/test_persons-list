import axios from "axios";
import {ResponsePaginatedPersonList, ResponsePerson} from "../types/interfaces";

export const fetchPersons = async (page: number): Promise<{data: ResponsePaginatedPersonList}> => {
  return await axios.get(`https://reqres.in/api/users?page=${page}`)
}

export const fetchOnePerson = async (id:number): Promise<{data: ResponsePerson}> => {
  return await axios.get(`https://reqres.in/api/users/${id}`);
}
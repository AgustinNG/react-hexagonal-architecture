import { IUserRepository } from "../../domain/interface/IUserRepository";
const BASE_URL = "https://jsonplaceholder.typicode.com";

export class ApiRestRepository implements IUserRepository {
  async getById(id: string) {
    const url = `${BASE_URL}/users/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }
}

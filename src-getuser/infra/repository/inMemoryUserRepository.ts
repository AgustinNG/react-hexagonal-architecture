import { IUserRepository } from "../../domain/interface/IUserRepository";
import { UserModel } from "../../domain/models/user-model";

export class MemoryUserRepository implements IUserRepository {
  async getById(id: string): Promise<UserModel> {
    const user: UserModel = {
      email: "a@a.com",
      firstName: "paco",
      id: "a1",
      lastName: "castillo",
    };

    return user;
  }
}

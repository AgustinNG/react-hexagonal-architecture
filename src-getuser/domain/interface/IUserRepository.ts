import { UserModel } from "../models/user-model";

export interface IUserRepository {
  getById(id: string): Promise<UserModel>;
}

import { UserModel } from "../models";

export type LoginParams = {
  email: string;
  password: string;
};

export interface IUserRepository {
  login(params: LoginParams): Promise<UserModel>;
}

import {
  IUserRepository,
  LoginParams,
} from "../../domain/interfaces/IUserRepository";
import { UserModel } from "../../domain/models";

const inMemoryUser = {
  "a@a.es:abcd1234": {
    id: 1,
    email: "a@a.es",
    firstName: "andres",
    lastName: "putomaquina",
  },
};

class AwsAuthAdapter implements IUserRepository {
  async login(params: LoginParams): Promise<UserModel> {
    // "login contra AWS"
    const logged_user = inMemoryUser[`${params.email}:${params.password}`];
    return logged_user;
  }
}

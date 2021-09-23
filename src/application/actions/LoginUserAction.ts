import { IAction } from "../../domain/interfaces/IAction";
import { UserModel } from "../../domain/models";

export class LoginUserAction implements IAction {
  constructor(private readonly userRepository: IUserRepository) {}

  async run(email: string, password: string): Promise<UserModel> {}
}

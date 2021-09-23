import { IAction } from "../domain/interface/IAction";
import { IUserRepository } from "../domain/interface/IUserRepository";
import { UserModel } from "../domain/models/user-model";

export class GetUserAction implements IAction {
  constructor(private userRepository: IUserRepository) {}

  async run(id: string): Promise<UserModel> {
    return this.userRepository.getById(id);
  }
}

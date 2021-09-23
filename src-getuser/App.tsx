import React from "react";
import { GetUserAction } from "./application/get-user";
import { IUserRepository } from "./domain/interface/IUserRepository";
// import { IAction } from "./domain/interface/IAction";
//injectado getUserAction
// ...
// const user = getUserAction.run(urlParams.id)
// console.log(user.name)
type AppProps = {
  getUserAction: GetUserAction;
};

export default function App(props: AppProps) {
  const { getUserAction } = props;

  const getUserData = async () => {
    const response = await getUserAction.run("1");
    console.log(response);
  };

  return (
    <div>
      <h1>App...</h1>
      <button onClick={getUserData}>Obtener datos del usuario</button>
    </div>
  );
}

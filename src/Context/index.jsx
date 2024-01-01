import React ,{ useState, createContext, useContext } from "react";

const UserContext = createContext();

export const ComponentContext1 = () => {
    const [user, setUser] = useState("Sherif Hesham");

    return (
        <UserContext.Provider value={user}>
            <h1>Hello {user} from component 1</h1>
            <ComponentContext2 />
        </UserContext.Provider>
    );
}

export const ComponentContext2 = () => {
  return (
    <>
        <h1> component 2</h1>
        <ComponentContext3 />
    </>
  );
}

export const ComponentContext3 = () => {

  return (
    <>
      <h1> component 3</h1>
      <ComponentContext4 />
    </>
  );
}

export const ComponentContext4 = () => {
  const user = useContext(UserContext);

  return (
    <h1>
      Hello {user} from component 4
    </h1>
  );
}

export const ComponentContext5 = () => {
  const user = useContext(UserContext);

  return (
      <h1>
        Hello {user} from component 4
      </h1>
  );
}
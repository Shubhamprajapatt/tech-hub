import React, { createContext, useContext, useState } from "react";
function Component1() {
  return (
    <>
      <h1>Component 1</h1>
      <Component2 />
    </>
  );
}
function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}
function Component3() {
  const user = useContext(userContext);
  return (
    <>
      <h1>Component 3 user from parent is :- {user}</h1>
    </>
  );
}

const userContext = createContext();
export default function Context() {
  const [user, setUser] = useState("Universal");
  return (
    <div>
      <userContext.Provider value={user}>
        <h1>user in parent is :- {user}</h1>
        <Component1 />
      </userContext.Provider>
    </div>
  );
}

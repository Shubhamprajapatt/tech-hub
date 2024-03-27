import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import IncDec from "./IncDec";
import FormHandling from "./FormHandling";
import InputField from "./InputField";
import { useState } from "react";
import Button from "./components/Button";
import Home from "./pages/Home";

function AppBackup() {
  const [items, setItems] = useState([{}]);
  const [isRead, setIsRead] = useState(false);
  const [inputValue, setInputValue] = useState([]);
  const [id, setId] = useState(null);
  const addInputField = () => {
    setItems([...items, {}]);
    setIsRead(true);
    setInputValue([...items]);
  };

  const removeInputField = (e, index) => {
    const list = [...items];
    list.splice(index, 1);
    setItems(list);
  };
  const deleteName = (index) => {
    // alert('dELETE')
    const list = [...inputValue];
    list.splice(index, 1);
    setInputValue(list);
  };
  const handleChane = (e, item, index) => {
    const list = [...items];
    list[index] = { name: e.target.value };
    setItems(list);
    // setIsRead(false);
  };
  console.log("items", items);

  return (
    <>
      {/* <div className="AppBackup">
        {/* <Login/> */}
        {/* <IncDec />
        <FormHandling /> */}
        {/* {items.map((item, index) => {
          return (
            <div key={index}>
              <div>
                {/* <InputField /> */}
                {/* <div>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={item.name}
                    onChange={(e) => handleChane(e, item, index)}
                  />
                  {items.length > 1 && (
                    <Button
                      onclick={(e) => removeInputField(e, index)}
                      name="-"
                      backgroundColor="red"
                    />
                  )}
                </div> */}
              {/* </div> */}
            {/* </div> */}
          {/* ); */}
        {/* })}  */}
        {/* <Button name="Add Input" onclick={()=>addInputField()} backgroundColor="#2cee2c" /> */}
      {/* </div> */}
      {/* <div>
        <table>
          <tr>
            <td>name</td>
          </tr>
          {isRead &&
            inputValue.map((item, index) => {
              return (
                <div key={index}>
                  <div>
                    {/* <InputField /> */}
                    {/* {isRead && <td>{item.name}</td>}
                    {isRead && (
                      <td>
                        <button onClick={(e) => deleteName(index)}>
                          Delete
                        </button>
                      </td>
                    )} */}

                    {/* {isRead && (
                      <td>
                        <button>Edit</button>
                      </td>
                    )}
                  </div>
                </div>
              );
            })} */}
        {/* // </table> */}
      {/* </div>  */} 
      <Home/>
    </>
  );
}

export default AppBackup;

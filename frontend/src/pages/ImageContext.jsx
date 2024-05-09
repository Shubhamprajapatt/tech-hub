import { createContext, useState } from "react";
import App from "../App";
export const imageData = createContext();
export default function ImageContext() {
  const [imageValue, setImageValue] = useState();
  const contextValue = {
    imageValue,
    setImageValue,
  };
  return (
    <imageData.Provider value={contextValue}>
      <App />
    </imageData.Provider>
  );
}

import { createContext, useState } from "react";

const [cartItems, setCartItems] = useState(undefined);

ReferenceDataContext = createContext({ cartItems, setCartItems });

const ReferenceDataContextProvider = ({ children }) => {
  return (
    <ReferenceDataContext.Provider value={{ cartItems, setCartItems }}>
      {...children}
    </ReferenceDataContext.Provider>
  );
};

export default { ReferenceDataContext, ReferenceDataContextProvider };

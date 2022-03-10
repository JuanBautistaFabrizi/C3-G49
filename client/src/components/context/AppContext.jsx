import React, { createContext, useContext, useState, useEffect} from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch ('https://api.mercadolibre.com/sites/MLA/search?category=MLA1648&limit=6')
    .then(response => response.json())
    .then(respJSON => {console.log(respJSON.results); setProducts(respJSON.results)})
    //.then(respJSON => {console.log(respJSON.results); setProducts(respJSON.results.map(product => product.id) )})
    //.then(resp => setProducts (resp.results.map(c => c.results)) )
},[])
  
   

  return (
    <AppContext.Provider 
      value={{
        products
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


export default AppContextProvider;
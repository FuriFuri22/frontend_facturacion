import React, { createContext, useContext, useState } from 'react';

const InvoiceContext = createContext();

export const useInvoice = () => useContext(InvoiceContext);

export const InvoiceProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addProductToInvoice = (product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <InvoiceContext.Provider value={{ selectedProducts, addProductToInvoice }}>
      {children}
    </InvoiceContext.Provider>
  );
};

import React from 'react';
import ListStock from '../components/ListStock';
import Factura from '../components/Factura';
import { useInvoice } from '../Context/InvoiceContext';
import './CssViews/StockView.css'; // Asegúrate de crear este archivo para los estilos

const StockView = () => {
  const { selectedProducts, addProductToInvoice } = useInvoice();

  return (
    <div className="stock-view-container">
    <h1>Stock</h1>
    <div className="stock-view-content">
      <div className="factura-container">
        <Factura selectedProducts={selectedProducts} />
      </div>
      <div className="list-stock-container">
        <ListStock addProductToInvoice={addProductToInvoice} />
      </div>
    </div>
  </div>
  );
}

export default StockView;

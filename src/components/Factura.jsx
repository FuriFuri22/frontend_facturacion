import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Buttons from './Buttons';

const Factura = ({ selectedProducts }) => {
  const calculateTotal = () => {
    return selectedProducts.reduce((total, product) => total + product.price, 0);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Invoice', 20, 20);
    doc.autoTable({
      head: [['Name', 'Quality', 'Price', 'Type', 'Model']],
      body: selectedProducts.map((product) => [
        product.name,
        product.quality,
        product.price,
        product.type,
        product.model,
      ]),
    });
    doc.text(`Total: ${calculateTotal()}`, 20, doc.autoTable.previous.finalY + 10);
    doc.save('invoice.pdf');
  };

  return (
    <div>
      <h2>Invoice</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quality</th>
            <th>Price</th>
            <th>Type</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.quality}</td>
              <td>{product.price}</td>
              <td>{product.type}</td>
              <td>{product.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: {calculateTotal()}</p>
      <Buttons callBack={generatePDF} text={"Descargar factura en PDF"} />
    </div>
  );
};

export default Factura;

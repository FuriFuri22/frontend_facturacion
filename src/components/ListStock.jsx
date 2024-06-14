import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductFilter from './ProductFilter'; 
import Buttons from './Buttons';
import { useInvoice } from '../Context/InvoiceContext'; 

const ListStock = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addProductToInvoice } = useInvoice();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const endpoints = [
          'http://localhost:3000/api/repuestos',
          'http://localhost:3000/api/insumos',
          'http://localhost:3000/api/celulares',
          'http://localhost:3000/api/accesorios',
        ];

        // Realizar todas las solicitudes en paralelo
        const responses = await Promise.all(endpoints.map(endpoint => axios.get(endpoint)));
        
        // Extraer los datos de las respuestas y combinarlos en un solo array
        const allProducts = responses.reduce((acc, response) => acc.concat(response.data), []);
        
        setProducts(allProducts);
        setFilteredProducts(allProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]); // Asegura que products sea un array
      }
    };

    fetchProducts();
  }, []);

  const handleFilter = (searchTerm) => {
    if (!searchTerm) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  // Verifica que products sea un array antes de mapear
  if (!Array.isArray(products)) {
    return <div>No products available</div>;
  }

  return (
    <div>
      <ProductFilter onFilter={handleFilter} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quality</th>
            <th>PriceGremy</th>
            <th>PriceUSD</th>
            <th>Category</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.quality}</td>
              <td>{product.priceGremy}</td>
              <td>{product.priceUsd}</td>
              <td>{product.category}</td>
              <td>
                <Buttons text={"Agregar"} callBack={() => addProductToInvoice(product)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListStock;

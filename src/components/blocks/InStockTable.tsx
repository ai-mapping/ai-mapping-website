'use client';

import React from 'react';
import { TableColumn, StockItem } from './InStock';

// Props interface
type InStockTableProps = {
  columns: TableColumn[];
  items: StockItem[];
  orderButtonText: string;
};

const InStockTable = ({ 
  columns, 
  items, 
  orderButtonText 
}: InStockTableProps) => {
  
  // Handle order button click
  const handleOrder = (itemId: string) => {
    console.log(`Order button clicked for item ID: ${itemId}`);
    // Placeholder for actual implementation
    // This would typically open a modal form or add to cart
  };

  // Render stock indicator based on availability
  const renderStockIndicator = (status: StockItem['inStock']) => {
    const colorMap = {
      'available': 'bg-success',
      'limited': 'bg-warning',
      'unavailable': 'bg-error'
    };
    
    return (
      <span className={`inline-block w-3 h-3 ${colorMap[status]} rounded-full shadow-sm`}></span>
    );
  };
  
  return (
    <table className="min-w-full bg-surface border border-neutral-dark rounded-lg overflow-hidden shadow-lg">
      <thead>
        <tr className="bg-neutral-light text-primary border-b border-neutral-dark">
          {columns.map((column) => (
            <th 
              key={column.key} 
              className={`py-4 px-6 text-${column.align || 'left'} font-semibold`}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr 
            key={item.id} 
            className={`border-b border-neutral-dark ${index % 2 === 0 ? 'bg-surface' : 'bg-neutral-light/30'} hover:bg-neutral-light transition-colors duration-200`}
          >
            <td className="py-4 px-6 text-white">{item.name}</td>
            <td className="py-4 px-6 font-medium text-primary">{item.partNumber}</td>
            <td className="py-4 px-6 text-neutral">{item.compatibility}</td>
            <td className="py-4 px-6 text-center">
              {renderStockIndicator(item.inStock)}
            </td>
            <td className="py-4 px-6 text-center">
              <button 
                className="bg-primary text-black font-bold py-1.5 px-4 rounded-lg text-sm hover:bg-primary-light transition-colors duration-300"
                onClick={() => handleOrder(item.id)}
              >
                {orderButtonText}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InStockTable;
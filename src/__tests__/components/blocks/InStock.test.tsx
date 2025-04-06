import React from 'react';
import { render, screen, within } from '@testing-library/react';
import InStock, { defaultInStockProps } from '@/components/blocks/InStock';

// Mock the InStockTable component
jest.mock('@/components/blocks/InStockTable', () => {
  return {
    __esModule: true,
    default: ({ columns, items, orderButtonText }) => (
      <div data-testid="in-stock-table">
        <div>Columns: {columns.length}</div>
        <div>Items: {items.length}</div>
        <div>Order Button Text: {orderButtonText}</div>
        <div>
          {items.map((item, index) => (
            <div key={index} data-testid={`stock-item-${index}`}>
              <div>Name: {item.name}</div>
              <div>Part Number: {item.partNumber}</div>
              <div>Compatibility: {item.compatibility}</div>
              <div>In Stock: {item.inStock}</div>
            </div>
          ))}
        </div>
      </div>
    )
  };
});

describe('InStock Component', () => {
  it('renders with default props correctly', () => {
    const { container } = render(<InStock />);
    
    // Check if heading and subheading are rendered
    expect(screen.getByText(defaultInStockProps.heading)).toBeInTheDocument();
    expect(screen.getByText(defaultInStockProps.subheading)).toBeInTheDocument();
    
    // Check if the InStockTable is rendered
    expect(screen.getByTestId('in-stock-table')).toBeInTheDocument();
    expect(screen.getByText(`Columns: ${defaultInStockProps.columns.length}`)).toBeInTheDocument();
    expect(screen.getByText(`Items: ${defaultInStockProps.items.length}`)).toBeInTheDocument();
    expect(screen.getByText(`Order Button Text: ${defaultInStockProps.orderButtonText}`)).toBeInTheDocument();
    
    // Check if all stock items are rendered
    defaultInStockProps.items.forEach((item, index) => {
      const stockItem = screen.getByTestId(`stock-item-${index}`);
      expect(stockItem).toBeInTheDocument();
      expect(within(stockItem).getByText(`Name: ${item.name}`)).toBeInTheDocument();
      expect(within(stockItem).getByText(`Part Number: ${item.partNumber}`)).toBeInTheDocument();
      expect(within(stockItem).getByText(`Compatibility: ${item.compatibility}`)).toBeInTheDocument();
      expect(within(stockItem).getByText(`In Stock: ${item.inStock}`)).toBeInTheDocument();
    });
    
    // Check if "view all" link is rendered
    expect(screen.getByText(defaultInStockProps.viewAllLinkText)).toBeInTheDocument();
    expect(screen.getByText(defaultInStockProps.viewAllLinkText).closest('a')).toHaveAttribute('href', defaultInStockProps.viewAllLink);
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
  
  it('renders with custom props correctly', () => {
    const customProps = {
      heading: 'Custom InStock Heading',
      subheading: 'Custom InStock Subheading',
      columns: [
        { key: 'name', header: 'Custom Name', align: 'left' }
      ],
      items: [
        {
          id: 'custom-1',
          name: 'Custom Item',
          partNumber: 'CUSTOM-123',
          compatibility: 'Custom Equipment',
          inStock: 'available' as const
        }
      ],
      orderButtonText: 'Custom Order',
      viewAllLinkText: 'Custom View All',
      viewAllLink: '/custom-catalog'
    };
    
    const { container } = render(<InStock {...customProps} />);
    
    // Check if custom heading and subheading are rendered
    expect(screen.getByText(customProps.heading)).toBeInTheDocument();
    expect(screen.getByText(customProps.subheading)).toBeInTheDocument();
    
    // Check if the InStockTable has correct props
    expect(screen.getByText(`Columns: ${customProps.columns.length}`)).toBeInTheDocument();
    expect(screen.getByText(`Items: ${customProps.items.length}`)).toBeInTheDocument();
    expect(screen.getByText(`Order Button Text: ${customProps.orderButtonText}`)).toBeInTheDocument();
    
    // Check if custom stock item is rendered
    const stockItem = screen.getByTestId('stock-item-0');
    expect(stockItem).toBeInTheDocument();
    expect(within(stockItem).getByText(`Name: ${customProps.items[0].name}`)).toBeInTheDocument();
    expect(within(stockItem).getByText(`Part Number: ${customProps.items[0].partNumber}`)).toBeInTheDocument();
    expect(within(stockItem).getByText(`Compatibility: ${customProps.items[0].compatibility}`)).toBeInTheDocument();
    expect(within(stockItem).getByText(`In Stock: ${customProps.items[0].inStock}`)).toBeInTheDocument();
    
    // Check if custom "view all" link is rendered
    expect(screen.getByText(customProps.viewAllLinkText)).toBeInTheDocument();
    expect(screen.getByText(customProps.viewAllLinkText).closest('a')).toHaveAttribute('href', customProps.viewAllLink);
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });
});
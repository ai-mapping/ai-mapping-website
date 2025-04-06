import createIconMock from './iconMock';

// Mock icon components
jest.mock('@/components/ui/icons/FastDeliveryIcon', () => createIconMock('FastDelivery'));
jest.mock('@/components/ui/icons/QualityIcon', () => createIconMock('Quality'));
jest.mock('@/components/ui/icons/SearchIcon', () => createIconMock('Search'));
jest.mock('@/components/ui/icons/PriceIcon', () => createIconMock('Price'));
jest.mock('@/components/ui/icons/CheckmarkIcon', () => createIconMock('Checkmark'));
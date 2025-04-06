import { render, screen } from '@testing-library/react';
import Header, { defaultHeaderProps } from '@/components/layout/Header';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img 
      src={props.src} 
      alt={props.alt} 
      width={props.width}
      height={props.height}
      className={props.className}
      data-testid={`image-${props.src.split('/').pop().split('.')[0]}`}
    />;
  },
}));

// Mock HeaderControls which is a client component
jest.mock('@/components/layout/HeaderControls', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="header-controls">Header Controls</div>,
  };
});

describe('Header Component', () => {
  it('renders the header with default props', () => {
    const { container } = render(<Header />);
    
    // Check logo images are rendered
    expect(screen.getByTestId('image-ai-mapping-logo')).toBeInTheDocument();
    expect(screen.getByTestId('image-companyName-text')).toBeInTheDocument();
    
    // Check navigation items
    expect(screen.getByText('Documentation')).toBeInTheDocument();
    expect(screen.getByText('Examples')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    
    // Check header controls
    expect(screen.getByTestId('header-controls')).toBeInTheDocument();
    
    expect(container).toMatchSnapshot();
  });
  
  it('renders with custom logo and nav items', () => {
    const customProps = {
      logo: {
        fullName: 'Custom Company',
        image: '/custom-logo.png',
        textImage: '/custom-text.png',
      },
      navItems: [
        { href: '/custom1', label: 'Custom Link 1' },
        { href: '/custom2', label: 'Custom Link 2' },
      ],
    };
    
    render(<Header {...customProps} />);
    
    // Check custom logo images
    expect(screen.getByTestId('image-custom-logo')).toBeInTheDocument();
    expect(screen.getByTestId('image-custom-text')).toBeInTheDocument();
    
    // Check custom navigation items
    expect(screen.getByText('Custom Link 1')).toBeInTheDocument();
    expect(screen.getByText('Custom Link 2')).toBeInTheDocument();
  });
});
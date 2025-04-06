import { render, screen, fireEvent } from '@testing-library/react';
import HeroAI, { defaultHeroAIProps } from '@/components/layout/HeroAI';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img 
      src={props.src} 
      alt={props.alt} 
      className={props.className} 
      style={props.style}
      data-testid="mock-image"
    />;
  },
}));

describe('HeroAI Component', () => {
  it('renders with default props', () => {
    const { container } = render(<HeroAI />);
    
    expect(screen.getByText('New Framework')).toBeInTheDocument();
    expect(screen.getByText('Content-First Frontend Development with AI')).toBeInTheDocument();
    expect(screen.getByText('AI-Mapping revolutionizes how websites are built by letting your content shape the interface, not the other way around.')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByText('View on GitHub')).toBeInTheDocument();
    expect(screen.getByTestId('mock-image')).toHaveAttribute('src', '/images/hero/hero-image.png');
    
    expect(container).toMatchSnapshot();
  });

  it('renders with custom props', () => {
    render(
      <HeroAI
        badge="Custom Badge"
        title="Custom Title"
        description="Custom description text"
        primaryButtonText="Custom Primary"
        secondaryButtonText="Custom Secondary"
        backgroundImage="/custom-image.jpg"
        overlayOpacity={50}
        overlayColor="primary"
      />
    );
    
    expect(screen.getByText('Custom Badge')).toBeInTheDocument();
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom description text')).toBeInTheDocument();
    expect(screen.getByText('Custom Primary')).toBeInTheDocument();
    expect(screen.getByText('Custom Secondary')).toBeInTheDocument();
    expect(screen.getByTestId('mock-image')).toHaveAttribute('src', '/custom-image.jpg');
    
    // Check overlay style
    const overlay = screen.getByTestId('hero-overlay');
    expect(overlay).toHaveStyle('opacity: 0.5');
    expect(overlay).toHaveClass('from-primary-dark');
  });

  it('calls onPrimaryButtonClick when primary button is clicked', () => {
    const mockOnPrimaryButtonClick = jest.fn();
    render(<HeroAI onPrimaryButtonClick={mockOnPrimaryButtonClick} />);
    
    fireEvent.click(screen.getByText('Get Started'));
    expect(mockOnPrimaryButtonClick).toHaveBeenCalledTimes(1);
  });

  it('calls onSecondaryButtonClick when secondary button is clicked', () => {
    const mockOnSecondaryButtonClick = jest.fn();
    render(<HeroAI onSecondaryButtonClick={mockOnSecondaryButtonClick} />);
    
    fireEvent.click(screen.getByText('View on GitHub'));
    expect(mockOnSecondaryButtonClick).toHaveBeenCalledTimes(1);
  });

  it('renders without badge when badge prop is not provided', () => {
    render(<HeroAI badge="" />);
    
    expect(screen.queryByText('New Framework')).not.toBeInTheDocument();
  });

  it('renders without buttons when button text props are not provided', () => {
    render(
      <HeroAI 
        primaryButtonText="" 
        secondaryButtonText="" 
      />
    );
    
    expect(screen.queryByText('Get Started')).not.toBeInTheDocument();
    expect(screen.queryByText('View on GitHub')).not.toBeInTheDocument();
  });

  it('renders without background image when backgroundImage prop is empty', () => {
    render(<HeroAI backgroundImage="" />);
    
    expect(screen.queryByTestId('mock-image')).not.toBeInTheDocument();
  });
});